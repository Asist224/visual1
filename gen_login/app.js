/**
 * =====================================================
 * APP.JS - User Management Application Logic
 * =====================================================
 */

// =====================================================
// AUTHENTICATION
// =====================================================
function getAuthToken() {
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
}

function logout() {
    if (confirm(t('confirmLogout'))) {
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
        window.location.reload();
    }
}

// =====================================================
// CREATE USER
// =====================================================
async function createUser(event) {
    event.preventDefault();

    const token = getAuthToken();
    const btn = document.getElementById('createBtn');
    const btnText = document.getElementById('createBtnText');
    const btnSpinner = document.getElementById('createBtnSpinner');

    // Show loading
    btn.disabled = true;
    btnText.style.display = 'none';
    btnSpinner.style.display = 'inline-block';

    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                action: 'create',
                username: document.getElementById('username').value.trim(),
                password: document.getElementById('password').value,
                email: document.getElementById('email').value.trim(),
                role: document.getElementById('role').value,
                fullName: document.getElementById('fullName').value.trim()
            })
        });

        const data = await response.json();

        if (data.success) {
            showNotification('✅ ' + t('userCreated'), 'success');
            document.getElementById('createUserForm').reset();
            loadUsers();
        } else {
            throw new Error(data.error || t('errorCreating'));
        }
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    } finally {
        btn.disabled = false;
        btnText.style.display = 'inline';
        btnSpinner.style.display = 'none';
    }
}

// =====================================================
// LOAD USERS
// =====================================================
async function loadUsers() {
    const token = getAuthToken();
    const tbody = document.getElementById('usersTableBody');

    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 40px;">${t('loadingShort')}</td></tr>`;

    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ action: 'list' })
        });

        const data = await response.json();

        if (data.success) {
            renderUsers(data.users);
        } else {
            throw new Error(data.error || t('errorLoading'));
        }
    } catch (error) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 40px; color: #ef4444;">❌ ${error.message}</td></tr>`;
    }
}

function renderUsers(users) {
    const tbody = document.getElementById('usersTableBody');

    if (users.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 40px;">${t('noUsersFound')}</td></tr>`;
        return;
    }

    tbody.innerHTML = users.map(user => `
        <tr>
            <td><code>${user.id.substring(0, 8)}...</code></td>
            <td><strong>${user.username}</strong></td>
            <td>${user.email || '—'}</td>
            <td><span class="badge badge-${user.role}">${getRoleIcon(user.role)} ${user.role}</span></td>
            <td>${user.fullName || '—'}</td>
            <td>${formatDate(user.createdAt)}</td>
            <td>${user.lastLogin ? formatDate(user.lastLogin) : t('never')}</td>
            <td><span class="badge badge-${user.isActive ? 'active' : 'inactive'}">${user.isActive ? '✅ ' + t('statusActive') : '❌ ' + t('statusInactive')}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn btn-primary" onclick="editUser('${user.id}', '${user.username}')">✏️ ${t('edit')}</button>
                    <button class="action-btn btn-danger" onclick="deleteUser('${user.id}', '${user.username}')">🗑️ ${t('delete')}</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// =====================================================
// DELETE USER
// =====================================================
async function deleteUser(userId, username) {
    if (!confirm(t('confirmDelete', { username }))) {
        return;
    }

    const token = getAuthToken();

    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                action: 'delete',
                userId: userId
            })
        });

        const data = await response.json();

        if (data.success) {
            showNotification('✅ ' + t('userDeleted'), 'success');
            loadUsers();
        } else {
            throw new Error(data.error || t('errorDeleting'));
        }
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

// =====================================================
// EDIT USER (Password change)
// =====================================================
async function editUser(userId, username) {
    const newPassword = prompt(t('changePassword', { username }));

    if (!newPassword) return;

    if (newPassword.length < 6) {
        alert(t('passwordTooShort'));
        return;
    }

    const token = getAuthToken();

    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                action: 'update',
                userId: userId,
                newPassword: newPassword
            })
        });

        const data = await response.json();

        if (data.success) {
            showNotification('✅ ' + t('passwordChanged'), 'success');
        } else {
            throw new Error(data.error || t('errorUpdating'));
        }
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

// =====================================================
// HELPER FUNCTIONS
// =====================================================
function getRoleIcon(role) {
    const icons = { admin: '👑', manager: '👔', viewer: '👁️' };
    return icons[role] || '👤';
}

function formatDate(dateString) {
    if (!dateString) return '—';
    const date = new Date(dateString);
    const locale = currentLang === 'ru' ? 'ru-RU' : 'en-US';
    return date.toLocaleString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 4000);
}

// =====================================================
// INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    if (!getAuthToken()) {
        document.getElementById('accessDenied').style.display = 'flex';
        document.getElementById('mainContainer').style.display = 'none';
        return;
    }

    // Initialize language
    updateUI();

    // Load users
    loadUsers();

    // Show current user name
    const userData = localStorage.getItem('userData');
    if (userData) {
        try {
            const user = JSON.parse(userData);
            document.getElementById('currentUser').textContent = `👤 ${user.username}`;
        } catch (e) {}
    }

    // Setup form submit handler
    document.getElementById('createUserForm').addEventListener('submit', createUser);

    // Setup language selector
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            loadUsers(); // Reload to update action buttons
        });
    }
});
