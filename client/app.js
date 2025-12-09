/**
 * =====================================================
 * APP.JS - Client Dashboard (License System)
 * =====================================================
 */

let authToken = null;
let clientData = null;
let allDomains = [];
let currentDomainPage = 1;

// =====================================================
// LOGIN
// =====================================================
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const clientId = document.getElementById('clientId').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.CLIENT_AUTH}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ client_id: clientId, password: password })
        });

        const data = await response.json();

        if (data.success && data.authenticated) {
            authToken = data.token;
            clientData = data.client;

            localStorage.setItem('clientToken', data.token);
            localStorage.setItem('clientData', JSON.stringify(data.client));

            showDashboard();
        } else {
            document.getElementById('loginError').textContent = data.message || 'Invalid credentials';
            document.getElementById('loginError').classList.remove('hidden');
        }
    } catch (error) {
        document.getElementById('loginError').textContent = 'Connection error';
        document.getElementById('loginError').classList.remove('hidden');
    }
});

// =====================================================
// SHOW DASHBOARD
// =====================================================
function showDashboard() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');

    // Fill license data
    document.getElementById('clientName').textContent = clientData.name;
    document.getElementById('displayClientId').value = clientData.client_id;
    document.getElementById('displayEmail').value = clientData.email;
    document.getElementById('displayLicenseKey').value = clientData.license_key;

    // Status
    const statusEl = document.getElementById('displayStatus');
    const isActive = clientData.status === 'active';
    statusEl.textContent = clientData.status.toUpperCase();
    statusEl.className = `px-4 py-2 rounded-full text-sm font-semibold border ${
        isActive
            ? 'bg-green-500/10 text-green-400 border-green-500/20'
            : 'bg-red-500/10 text-red-400 border-red-500/20'
    }`;

    // Expires
    const expiresDate = clientData.expires_at ? new Date(clientData.expires_at).toLocaleDateString() : 'Never';
    document.getElementById('displayExpires').value = expiresDate;

    // Features
    const featuresEl = document.getElementById('displayFeatures');
    featuresEl.innerHTML = '';
    clientData.features.forEach(feature => {
        const badge = document.createElement('span');
        badge.className = 'feature-badge px-3 py-1 text-sm rounded-lg';
        badge.textContent = feature;
        featuresEl.appendChild(badge);
    });

    // Integration code
    updateIntegrationCode();

    // Load domains
    loadDomains();

    // Setup Copy Code button with event delegation
    const dashboard = document.getElementById('dashboard');
    if (dashboard) {
        dashboard.removeEventListener('click', handleCopyButtonClick);
        dashboard.addEventListener('click', handleCopyButtonClick);
    }
}

// =====================================================
// COPY BUTTON HANDLER
// =====================================================
function handleCopyButtonClick(event) {
    // Check for Client ID copy button
    let button = event.target.closest('.copy-client-id-btn');
    if (button) {
        event.preventDefault();
        event.stopPropagation();
        const targetId = button.getAttribute('data-copy-target');
        copyToClipboard(targetId, button);
        return;
    }

    // Check for License Key copy button
    button = event.target.closest('.copy-license-key-btn');
    if (button) {
        event.preventDefault();
        event.stopPropagation();
        const targetId = button.getAttribute('data-copy-target');
        copyToClipboard(targetId, button);
        return;
    }

    // Check for Integration Code copy button
    button = event.target.closest('.copy-integration-btn');
    if (button) {
        event.preventDefault();
        event.stopPropagation();
        window.copyIntegrationCode(event);
        return;
    }
}

// =====================================================
// INTEGRATION CODE
// =====================================================
function updateIntegrationCode() {
    if (!clientData || !clientData.license_key) {
        console.error('clientData or license_key is not defined');
        return;
    }

    const codeElement = document.getElementById('integrationCode');
    if (!codeElement) {
        console.error('integrationCode element not found!');
        return;
    }

    const code = `<!-- Add this to your HTML file -->
<script src="${CONFIG.LICENSE_SCRIPT_URL}"
        data-license="${clientData.license_key}">
<\/script>`;

    codeElement.textContent = code;
}

// =====================================================
// LOAD DOMAINS
// =====================================================
async function loadDomains() {
    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.CLIENT_DOMAINS}?client_id=${clientData.client_id}`);
        const data = await response.json();

        if (data.success) {
            allDomains = data.allowed_domains || [];
            currentDomainPage = 1;
            renderDomains(data.max_domains);
        }
    } catch (error) {
        console.error('Error loading domains:', error);
    }
}

// =====================================================
// RENDER DOMAINS
// =====================================================
function renderDomains(maxDomains) {
    const domainsList = document.getElementById('domainsList');
    const noDomains = document.getElementById('noDomains');
    const pagination = document.getElementById('domainPagination');

    document.getElementById('domainCount').textContent = allDomains.length;
    document.getElementById('maxDomains').textContent = maxDomains;

    // Enable/disable add button
    const addBtn = document.getElementById('addDomainBtn');
    if (allDomains.length >= maxDomains) {
        addBtn.disabled = true;
        addBtn.classList.add('opacity-50', 'cursor-not-allowed');
        addBtn.classList.remove('hover:shadow-lg');
    } else {
        addBtn.disabled = false;
        addBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    if (allDomains.length === 0) {
        domainsList.innerHTML = '';
        noDomains.classList.remove('hidden');
        pagination.classList.add('hidden');
        return;
    }

    noDomains.classList.add('hidden');

    // Pagination
    const start = (currentDomainPage - 1) * CONFIG.DOMAINS_PER_PAGE;
    const end = start + CONFIG.DOMAINS_PER_PAGE;
    const pageDomains = allDomains.slice(start, end);

    domainsList.innerHTML = '';
    pageDomains.forEach(domain => {
        const domainCard = document.createElement('div');
        domainCard.className = 'domain-card flex items-center justify-between p-4 rounded-lg border border-white/10';
        domainCard.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div>
                    <div class="font-medium text-white">${domain}</div>
                    <div class="text-xs text-gray-400">Active</div>
                </div>
            </div>
            <button onclick="deleteDomain('${domain}')"
                class="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        `;
        domainsList.appendChild(domainCard);
    });

    // Show pagination if needed
    if (allDomains.length > CONFIG.DOMAINS_PER_PAGE) {
        pagination.classList.remove('hidden');
        renderDomainPagination();
    } else {
        pagination.classList.add('hidden');
    }
}

// =====================================================
// DOMAIN PAGINATION
// =====================================================
function renderDomainPagination() {
    const totalPages = Math.ceil(allDomains.length / CONFIG.DOMAINS_PER_PAGE);
    const container = document.getElementById('domainPaginationContainer');
    container.innerHTML = '';

    const start = (currentDomainPage - 1) * CONFIG.DOMAINS_PER_PAGE + 1;
    const end = Math.min(currentDomainPage * CONFIG.DOMAINS_PER_PAGE, allDomains.length);

    document.getElementById('domainShowingFrom').textContent = start;
    document.getElementById('domainShowingTo').textContent = end;
    document.getElementById('domainTotalCount').textContent = allDomains.length;

    // Previous
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn px-3 py-2 rounded-lg';
    prevBtn.innerHTML = '&laquo;';
    prevBtn.disabled = currentDomainPage === 1;
    prevBtn.onclick = () => changeDomainPage(currentDomainPage - 1);
    container.appendChild(prevBtn);

    // Pages
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-btn px-4 py-2 rounded-lg ${i === currentDomainPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => changeDomainPage(i);
        container.appendChild(pageBtn);
    }

    // Next
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn px-3 py-2 rounded-lg';
    nextBtn.innerHTML = '&raquo;';
    nextBtn.disabled = currentDomainPage === totalPages;
    nextBtn.onclick = () => changeDomainPage(currentDomainPage + 1);
    container.appendChild(nextBtn);
}

function changeDomainPage(page) {
    currentDomainPage = page;
    renderDomains(clientData.max_domains || 1);
}

// =====================================================
// ADD DOMAIN MODAL
// =====================================================
function openAddDomainModal() {
    document.getElementById('addDomainModal').classList.add('active');
    document.getElementById('addDomainForm').reset();
    document.getElementById('addDomainError').classList.add('hidden');
    document.getElementById('addDomainSuccess').classList.add('hidden');
}

function closeAddDomainModal() {
    document.getElementById('addDomainModal').classList.remove('active');
}

// Add Domain
document.getElementById('addDomainForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const domain = document.getElementById('newDomain').value.trim();

    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.CLIENT_DOMAINS}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_id: clientData.client_id,
                domain: domain
            })
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById('addDomainSuccess').textContent = 'Domain added successfully!';
            document.getElementById('addDomainSuccess').classList.remove('hidden');
            setTimeout(() => {
                closeAddDomainModal();
                loadDomains();
            }, 1500);
        } else {
            document.getElementById('addDomainError').textContent = result.message || 'Error adding domain';
            document.getElementById('addDomainError').classList.remove('hidden');
        }
    } catch (error) {
        document.getElementById('addDomainError').textContent = 'Connection error';
        document.getElementById('addDomainError').classList.remove('hidden');
    }
});

// =====================================================
// DELETE DOMAIN
// =====================================================
let currentDeleteDomain = null;

function deleteDomain(domain) {
    currentDeleteDomain = domain;
    document.getElementById('deleteDomainName').textContent = domain;
    document.getElementById('deleteDomainModal').classList.add('active');
}

function closeDeleteDomainModal() {
    currentDeleteDomain = null;
    document.getElementById('deleteDomainModal').classList.remove('active');
}

async function confirmDeleteDomain() {
    if (!currentDeleteDomain) return;

    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.CLIENT_DOMAINS}?client_id=${clientData.client_id}&domain=${currentDeleteDomain}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (result.success) {
            closeDeleteDomainModal();
            loadDomains();
        } else {
            alert('Error: ' + (result.message || 'Failed to delete domain'));
            closeDeleteDomainModal();
        }
    } catch (error) {
        alert('Connection error');
        closeDeleteDomainModal();
    }
}

// =====================================================
// COPY FUNCTIONS
// =====================================================
function copyToClipboard(elementId, button) {
    const element = document.getElementById(elementId);
    if (!element) {
        if (button) showError(button, '');
        return;
    }

    const text = element.value || element.textContent || element.innerText;

    if (!text || text.trim() === '') {
        if (button) showError(button, '');
        return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    textArea.setAttribute('readonly', '');

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, text.length);

    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (err) {
        console.error('Copy error:', err);
    } finally {
        document.body.removeChild(textArea);
    }

    if (success) {
        if (button) showSuccess(button, '');
    } else {
        if (button) showError(button, '');
    }
}

// Copy Integration Code
window.copyIntegrationCode = function(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const codeElement = document.getElementById('integrationCode');
    if (!codeElement) return;

    const code = codeElement.textContent || codeElement.innerText;
    if (code === 'Loading...' || code.trim() === '') return;

    const button = event ? event.target.closest('button') : document.querySelector('.copy-integration-btn');
    const originalText = button ? button.textContent : '';

    const textArea = document.createElement('textarea');
    textArea.value = code;
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    textArea.setAttribute('readonly', '');

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, code.length);

    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (err) {
        console.error('Copy error:', err);
    } finally {
        document.body.removeChild(textArea);
    }

    if (success) {
        if (button) showSuccess(button, originalText);
    } else {
        if (button) showError(button, originalText);
    }
};

function showSuccess(button, originalText) {
    if (!button.dataset.originalHtml) {
        button.dataset.originalHtml = button.innerHTML;
    }

    if (originalText && originalText.trim() !== '') {
        button.textContent = '✓ Copied!';
    } else {
        button.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>`;
    }

    button.classList.remove('bg-white/10', 'bg-white/5', 'bg-red-500/20', 'btn-gradient');
    button.classList.add('bg-green-500/20', 'border', 'border-green-500/40');

    setTimeout(() => {
        if (button.dataset.originalHtml) {
            button.innerHTML = button.dataset.originalHtml;
        } else if (originalText) {
            button.textContent = originalText;
        }
        button.classList.remove('bg-green-500/20', 'border', 'border-green-500/40');
        button.classList.add('bg-white/10');
    }, 2000);
}

function showError(button, originalText) {
    if (!button.dataset.originalHtml) {
        button.dataset.originalHtml = button.innerHTML;
    }

    if (originalText && originalText.trim() !== '') {
        button.textContent = '✗ Failed';
    } else {
        button.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>`;
    }

    button.classList.remove('bg-white/10', 'bg-white/5', 'bg-green-500/20', 'btn-gradient');
    button.classList.add('bg-red-500/20', 'border', 'border-red-500/40');

    setTimeout(() => {
        if (button.dataset.originalHtml) {
            button.innerHTML = button.dataset.originalHtml;
        } else if (originalText) {
            button.textContent = originalText;
        }
        button.classList.remove('bg-red-500/20', 'border', 'border-red-500/40');
        button.classList.add('bg-white/10');
    }, 2000);
}

// =====================================================
// LOGOUT
// =====================================================
function logout() {
    authToken = null;
    clientData = null;
    localStorage.removeItem('clientToken');
    localStorage.removeItem('clientData');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('loginForm').reset();
}

// =====================================================
// INITIALIZATION
// =====================================================
window.addEventListener('DOMContentLoaded', () => {
    const savedToken = localStorage.getItem('clientToken');
    const savedData = localStorage.getItem('clientData');

    if (savedToken && savedData) {
        authToken = savedToken;
        clientData = JSON.parse(savedData);
        showDashboard();
    }
});
