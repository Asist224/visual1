/**
 * =====================================================
 * APP.JS - Admin Panel (License Management)
 * =====================================================
 */

// State
let allClients = [];
let filteredClients = [];
let currentPage = 1;
let authToken = null;

// Sorting state
let currentSortColumn = null;
let currentSortDirection = 'asc';

// =====================================================
// LOGIN
// =====================================================
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.ADMIN_LOGIN}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (result.success) {
            authToken = result.token;
            localStorage.setItem('adminToken', authToken);
            localStorage.setItem('adminUsername', username);
            showDashboard(username);
        } else {
            document.getElementById('loginError').textContent = result.message || 'Invalid credentials';
            document.getElementById('loginError').classList.remove('hidden');
        }
    } catch (error) {
        document.getElementById('loginError').textContent = 'Connection error';
        document.getElementById('loginError').classList.remove('hidden');
    }
});

function showDashboard(username) {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('adminUsername').textContent = username;
    loadClients();
}

function logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    authToken = null;
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('loginForm').reset();
}

// =====================================================
// LOAD CLIENTS
// =====================================================
async function loadClients() {
    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.CLIENTS}`);
        const result = await response.json();

        if (result.success) {
            allClients = result.clients || [];
            filteredClients = [...allClients];
            updateStats();

            if (currentSortColumn) {
                applySorting(currentSortColumn, currentSortDirection);
            }

            renderClients();
        }
    } catch (error) {
    }
}

// =====================================================
// SORTING
// =====================================================
function sortTable(column) {
    if (currentSortColumn === column) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = column;
        currentSortDirection = 'asc';
    }

    updateSortIcons(column, currentSortDirection);
    applySorting(column, currentSortDirection);
    currentPage = 1;
    renderClients();
}

function applySorting(column, direction) {
    filteredClients.sort((a, b) => {
        let valueA, valueB;

        switch (column) {
            case 'status':
                valueA = getClientStatus(a);
                valueB = getClientStatus(b);
                break;
            case 'domains':
                valueA = (a.allowed_domains && Array.isArray(a.allowed_domains)) ? a.allowed_domains.length : 0;
                valueB = (b.allowed_domains && Array.isArray(b.allowed_domains)) ? b.allowed_domains.length : 0;
                break;
            case 'expires':
                valueA = a.expires_at ? new Date(a.expires_at).getTime() : 0;
                valueB = b.expires_at ? new Date(b.expires_at).getTime() : 0;
                break;
            default:
                return 0;
        }

        if (valueA < valueB) return direction === 'asc' ? -1 : 1;
        if (valueA > valueB) return direction === 'asc' ? 1 : -1;
        return 0;
    });
}

function updateSortIcons(activeColumn, direction) {
    ['status', 'domains', 'expires'].forEach(col => {
        const icon = document.getElementById(`sort-icon-${col}`);
        if (icon) {
            icon.classList.remove('active');
            icon.textContent = '▼';
        }
    });

    const activeIcon = document.getElementById(`sort-icon-${activeColumn}`);
    if (activeIcon) {
        activeIcon.classList.add('active');
        activeIcon.textContent = direction === 'asc' ? '▲' : '▼';
    }
}

function getClientStatus(client) {
    if (client.status === 'inactive') return 'inactive';
    if (client.expires_at) {
        const expiresDate = new Date(client.expires_at);
        const now = new Date();
        if (expiresDate < now) return 'expired';
    }
    return 'active';
}

// =====================================================
// STATS
// =====================================================
function updateStats() {
    const now = new Date();
    let active = 0, inactive = 0, expired = 0, totalDomains = 0;

    allClients.forEach(client => {
        if (client.allowed_domains && Array.isArray(client.allowed_domains)) {
            totalDomains += client.allowed_domains.length;
        }

        if (client.status === 'inactive') {
            inactive++;
        } else if (client.expires_at) {
            const expiresDate = new Date(client.expires_at);
            if (expiresDate < now) {
                expired++;
            } else {
                active++;
            }
        } else {
            active++;
        }
    });

    document.getElementById('totalClients').textContent = allClients.length;
    document.getElementById('activeClients').textContent = active;
    document.getElementById('inactiveClients').textContent = inactive;
    document.getElementById('expiredClients').textContent = expired;
    document.getElementById('totalDomains').textContent = totalDomains;
}

// =====================================================
// RENDER CLIENTS
// =====================================================
function renderClients() {
    const tbody = document.getElementById('clientsTableBody');
    tbody.innerHTML = '';

    const start = (currentPage - 1) * CONFIG.ITEMS_PER_PAGE;
    const end = start + CONFIG.ITEMS_PER_PAGE;
    const pageClients = filteredClients.slice(start, end);

    if (pageClients.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="px-6 py-8 text-center text-gray-400">No clients found</td></tr>';
        return;
    }

    pageClients.forEach(client => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-white/5 transition';

        const actualStatus = getClientStatus(client);
        const statusColors = {
            active: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
            expired: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
            inactive: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' }
        };
        const colors = statusColors[actualStatus];

        const domainCount = (client.allowed_domains && Array.isArray(client.allowed_domains)) ? client.allowed_domains.length : 0;
        const maxDomains = client.max_domains || 1;
        const expiresDate = client.expires_at ? new Date(client.expires_at).toLocaleDateString() : 'Never';

        tr.innerHTML = `
            <td class="px-6 py-4 text-sm font-mono text-gray-400">${client.client_id}</td>
            <td class="px-6 py-4 text-sm font-medium text-white">${client.name}</td>
            <td class="px-6 py-4 text-sm text-gray-400">${client.email}</td>
            <td class="px-6 py-4">
                <span class="px-3 py-1 text-xs font-semibold rounded-full border ${colors.bg} ${colors.text} ${colors.border}">
                    ${actualStatus}
                </span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-400">${domainCount} / ${maxDomains}</td>
            <td class="px-6 py-4 text-sm text-gray-400">${expiresDate}</td>
            <td class="px-6 py-4 text-sm space-x-2">
                <button onclick='viewClient(${JSON.stringify(client).replace(/'/g, "\\'")})'  class="text-blue-400 hover:text-blue-300">View</button>
                <button onclick='editClient(${JSON.stringify(client).replace(/'/g, "\\'")})'  class="text-purple-400 hover:text-purple-300">Edit</button>
                <button onclick="resetPassword('${client.client_id}')" class="text-yellow-400 hover:text-yellow-300">Reset</button>
                <button onclick="deleteClient('${client.client_id}')" class="text-red-400 hover:text-red-300">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    renderPagination();
}

// =====================================================
// PAGINATION
// =====================================================
function renderPagination() {
    const totalPages = Math.ceil(filteredClients.length / CONFIG.ITEMS_PER_PAGE);
    const container = document.getElementById('paginationContainer');
    container.innerHTML = '';

    const start = (currentPage - 1) * CONFIG.ITEMS_PER_PAGE + 1;
    const end = Math.min(currentPage * CONFIG.ITEMS_PER_PAGE, filteredClients.length);

    document.getElementById('showingFrom').textContent = start;
    document.getElementById('showingTo').textContent = end;
    document.getElementById('totalCount').textContent = filteredClients.length;

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn px-3 py-2 rounded-lg';
    prevBtn.innerHTML = '&laquo;';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);
    container.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `pagination-btn px-4 py-2 rounded-lg ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.onclick = () => changePage(i);
            container.appendChild(pageBtn);
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            const dots = document.createElement('span');
            dots.className = 'px-2 text-gray-400';
            dots.textContent = '...';
            container.appendChild(dots);
        }
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn px-3 py-2 rounded-lg';
    nextBtn.innerHTML = '&raquo;';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentPage + 1);
    container.appendChild(nextBtn);
}

function changePage(page) {
    currentPage = page;
    renderClients();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =====================================================
// SEARCH
// =====================================================
document.getElementById('searchInput').addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    filteredClients = allClients.filter(c =>
        c.client_id.toLowerCase().includes(search) ||
        c.name.toLowerCase().includes(search) ||
        c.email.toLowerCase().includes(search)
    );

    if (currentSortColumn) {
        applySorting(currentSortColumn, currentSortDirection);
    }

    currentPage = 1;
    renderClients();
});

// =====================================================
// MODAL FUNCTIONS
// =====================================================
function openCreateModal() {
    document.getElementById('modalTitle').textContent = 'Create Client';
    document.getElementById('clientForm').reset();
    document.getElementById('editClientId').value = '';
    document.getElementById('clientMaxDomains').value = '3';
    document.getElementById('modalError').classList.add('hidden');
    document.getElementById('modalSuccess').classList.add('hidden');
    document.getElementById('saveButton').style.display = 'block';
    document.getElementById('clientModal').classList.add('active');
}

function editClient(client) {
    document.getElementById('modalTitle').textContent = 'Edit Client';
    document.getElementById('editClientId').value = client.client_id;
    document.getElementById('clientName').value = client.name;
    document.getElementById('clientEmail').value = client.email;
    document.getElementById('clientMaxDomains').value = client.max_domains || 1;
    document.getElementById('clientStatus').value = client.status || 'active';
    document.getElementById('clientExpires').value = client.expires_at ? client.expires_at.split('T')[0] : '';
    document.getElementById('modalError').classList.add('hidden');
    document.getElementById('modalSuccess').classList.add('hidden');
    document.getElementById('saveButton').style.display = 'block';
    document.getElementById('clientModal').classList.add('active');
}

function viewClient(client) {
    const content = document.getElementById('viewClientContent');

    const actualStatus = getClientStatus(client);
    const statusColors = {
        active: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
        expired: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
        inactive: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' }
    };
    const colors = statusColors[actualStatus];

    const domainsList = client.allowed_domains && client.allowed_domains.length > 0
        ? client.allowed_domains.map(d => `<span class="inline-block bg-white/5 border border-white/10 rounded px-2 py-1 text-xs mr-2 mb-2">${d}</span>`).join('')
        : '<span class="text-gray-500">No domains added</span>';

    const featuresList = client.features && client.features.length > 0
        ? client.features.map(f => `<span class="inline-block bg-white/5 border border-white/10 rounded px-2 py-1 text-xs mr-2 mb-2">${f}</span>`).join('')
        : '<span class="text-gray-500">No features</span>';

    content.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Client ID</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3 font-mono text-sm">${client.client_id}</div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Status</label>
                <span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${colors.bg} ${colors.text} ${colors.border}">${actualStatus.toUpperCase()}</span>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3">${client.name}</div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3">${client.email}</div>
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-400 mb-2">License Key</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3 font-mono text-xs break-all">${client.license_key}</div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Max Domains</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3">${client.max_domains || 1}</div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Current Domains</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3">${client.allowed_domains?.length || 0}</div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Expires At</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3">${client.expires_at ? new Date(client.expires_at).toLocaleDateString() : 'Never'}</div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Created At</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3">${client.created_at ? new Date(client.created_at).toLocaleDateString() : 'N/A'}</div>
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-400 mb-2">Allowed Domains</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3">${domainsList}</div>
            </div>
            <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-400 mb-2">Features</label>
                <div class="bg-white/5 border border-white/10 rounded-lg p-3">${featuresList}</div>
            </div>
        </div>
    `;

    document.getElementById('viewClientModal').classList.add('active');
}

function closeViewModal() {
    document.getElementById('viewClientModal').classList.remove('active');
}

function closeModal() {
    document.getElementById('clientModal').classList.remove('active');
    document.getElementById('saveButton').style.display = 'block';
}

// =====================================================
// FORM SUBMISSION
// =====================================================
document.getElementById('clientForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const clientId = document.getElementById('editClientId').value;
    const isEdit = !!clientId;

    const data = {
        name: document.getElementById('clientName').value,
        email: document.getElementById('clientEmail').value,
        max_domains: parseInt(document.getElementById('clientMaxDomains').value),
        status: document.getElementById('clientStatus').value,
        expires_at: document.getElementById('clientExpires').value || null
    };

    if (isEdit) data.client_id = clientId;

    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.CLIENTS}`, {
            method: isEdit ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success || result.client_id) {
            if (isEdit) {
                document.getElementById('modalSuccess').textContent = 'Client updated successfully!';
                document.getElementById('modalSuccess').classList.remove('hidden');
                setTimeout(() => {
                    closeModal();
                    loadClients();
                }, 1500);
            } else {
                document.getElementById('saveButton').style.display = 'none';
                document.getElementById('modalSuccess').innerHTML =
                    '<strong>Client created successfully!</strong><br><br>' +
                    '<strong>⚠️ IMPORTANT: Save these credentials:</strong><br><br>' +
                    '<div class="bg-black/20 p-4 rounded mt-2 font-mono text-xs">' +
                    '<strong>Client ID:</strong> ' + result.client_id + '<br>' +
                    '<strong>Password:</strong> ' + result.password + '<br>' +
                    '<strong>License Key:</strong> ' + result.license_key +
                    '</div><br>' +
                    '<em class="text-red-400">Password will NOT be shown again!</em>';
                document.getElementById('modalSuccess').classList.remove('hidden');
                loadClients();
            }
        } else {
            document.getElementById('modalError').textContent = result.message || 'Error saving client';
            document.getElementById('modalError').classList.remove('hidden');
        }
    } catch (error) {
        document.getElementById('modalError').textContent = 'Connection error';
        document.getElementById('modalError').classList.remove('hidden');
    }
});

// =====================================================
// DELETE CLIENT
// =====================================================
let currentDeleteClientId = null;
let currentDeleteClientName = null;

function deleteClient(clientId) {
    const client = allClients.find(c => c.client_id === clientId);
    if (!client) return;

    currentDeleteClientId = clientId;
    currentDeleteClientName = client.name;
    document.getElementById('deleteClientName').textContent = client.name;
    document.getElementById('deleteClientModal').classList.add('active');
}

function closeDeleteModal() {
    currentDeleteClientId = null;
    currentDeleteClientName = null;
    document.getElementById('deleteClientModal').classList.remove('active');
}

async function confirmDeleteClient() {
    if (!currentDeleteClientId) return;

    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.CLIENTS}?client_id=${currentDeleteClientId}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (result.success) {
            closeDeleteModal();
            loadClients();
        } else {
            alert('Error: ' + (result.message || 'Failed'));
        }
    } catch (error) {
        alert('Connection error');
    }
}

// =====================================================
// RESET PASSWORD
// =====================================================
let currentResetClientId = null;

async function resetPassword(clientId) {
    currentResetClientId = clientId;
    document.getElementById('resetPasswordResult').classList.add('hidden');
    document.getElementById('resetPasswordBtn').classList.remove('hidden');
    document.getElementById('resetPasswordModal').classList.add('active');
}

function closeResetModal() {
    currentResetClientId = null;
    document.getElementById('resetPasswordModal').classList.remove('active');
    document.getElementById('resetPasswordResult').classList.add('hidden');
    document.getElementById('resetPasswordBtn').classList.remove('hidden');
}

async function confirmResetPassword() {
    if (!currentResetClientId) return;

    try {
        const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.RESET_PASSWORD}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ client_id: currentResetClientId })
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById('resetClientId').textContent = result.client_id;
            document.getElementById('resetNewPassword').textContent = result.new_password;
            document.getElementById('resetPasswordResult').classList.remove('hidden');
            document.getElementById('resetPasswordBtn').classList.add('hidden');
        } else {
            alert('Error: ' + (result.message || 'Failed'));
            closeResetModal();
        }
    } catch (error) {
        alert('Connection error');
        closeResetModal();
    }
}

function copyResetPassword(button) {
    const passwordElement = document.getElementById('resetNewPassword');
    if (!passwordElement) {
        if (button) showPasswordCopyError(button);
        return;
    }

    const password = passwordElement.textContent;
    if (!password || password.trim() === '') {
        if (button) showPasswordCopyError(button);
        return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = password;
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    textArea.setAttribute('readonly', '');

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, password.length);

    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (err) {
    } finally {
        document.body.removeChild(textArea);
    }

    if (success) {
        if (button) showPasswordCopySuccess(button);
    } else {
        if (button) showPasswordCopyError(button);
    }
}

function showPasswordCopySuccess(button) {
    if (!button.dataset.originalHtml) {
        button.dataset.originalHtml = button.innerHTML;
    }

    button.innerHTML = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
    button.classList.remove('text-indigo-400');
    button.classList.add('text-green-400');

    setTimeout(() => {
        button.innerHTML = button.dataset.originalHtml;
        button.classList.remove('text-green-400');
        button.classList.add('text-indigo-400');
    }, 2000);
}

function showPasswordCopyError(button) {
    if (!button.dataset.originalHtml) {
        button.dataset.originalHtml = button.innerHTML;
    }

    button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
    button.classList.remove('text-indigo-400');
    button.classList.add('text-red-400');

    setTimeout(() => {
        button.innerHTML = button.dataset.originalHtml;
        button.classList.remove('text-red-400');
        button.classList.add('text-indigo-400');
    }, 2000);
}

// =====================================================
// INITIALIZATION
// =====================================================
window.addEventListener('DOMContentLoaded', () => {
    const savedToken = localStorage.getItem('adminToken');
    const savedUsername = localStorage.getItem('adminUsername');

    if (savedToken && savedUsername) {
        authToken = savedToken;
        showDashboard(savedUsername);
    }

    // Setup copy password button with event delegation
    document.body.addEventListener('click', handleCopyPasswordClick);
});

function handleCopyPasswordClick(event) {
    const button = event.target.closest('.copy-reset-password-btn');
    if (button) {
        event.preventDefault();
        event.stopPropagation();
        copyResetPassword(button);
    }
}
