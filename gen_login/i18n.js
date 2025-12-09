/**
 * =====================================================
 * INTERNATIONALIZATION (i18n)
 * =====================================================
 * Translations for Russian and English
 */

const TRANSLATIONS = {
    ru: {
        // Page title
        pageTitle: 'Управление пользователями - Admin Panel',

        // Header
        headerTitle: 'Управление пользователями',
        logout: 'Выход',

        // Create user panel
        addNewUser: 'Добавить нового пользователя',
        username: 'Имя пользователя',
        usernameRequired: 'Имя пользователя *',
        password: 'Пароль',
        passwordRequired: 'Пароль *',
        email: 'Email',
        role: 'Роль',
        roleRequired: 'Роль *',
        fullName: 'Полное имя',
        createUser: 'Создать пользователя',

        // Placeholders
        minChars3: 'минимум 3 символа',
        minChars6: 'минимум 6 символов',
        emailPlaceholder: 'user@example.com',
        fullNamePlaceholder: 'Иван Иванов',

        // Roles
        roleViewer: 'Viewer (просмотр)',
        roleManager: 'Manager (управление)',
        roleAdmin: 'Admin (полный доступ)',

        // Users table
        usersList: 'Список пользователей',
        refresh: 'Обновить',
        tableId: 'ID',
        tableUsername: 'Имя пользователя',
        tableEmail: 'Email',
        tableRole: 'Роль',
        tableFullName: 'Полное имя',
        tableCreated: 'Создан',
        tableLastLogin: 'Последний вход',
        tableStatus: 'Статус',
        tableActions: 'Действия',

        // Status
        statusActive: 'Активен',
        statusInactive: 'Неактивен',
        never: 'Никогда',

        // Actions
        edit: 'Изменить',
        delete: 'Удалить',

        // Messages
        loading: 'Загрузка данных...',
        loadingShort: 'Загрузка...',
        noUsersFound: 'Пользователи не найдены',
        userCreated: 'Пользователь успешно создан!',
        userDeleted: 'Пользователь удален',
        passwordChanged: 'Пароль изменен',
        errorCreating: 'Ошибка создания пользователя',
        errorLoading: 'Ошибка загрузки пользователей',
        errorDeleting: 'Ошибка удаления',
        errorUpdating: 'Ошибка обновления',

        // Confirmations
        confirmLogout: 'Выйти из системы?',
        confirmDelete: 'Удалить пользователя "{username}"?\nЭто действие нельзя отменить!',
        changePassword: 'Изменить пароль для "{username}":\n(минимум 6 символов)',
        passwordTooShort: 'Пароль должен быть минимум 6 символов',
        authRequired: 'Требуется авторизация',

        // Language
        language: 'Язык'
    },

    en: {
        // Page title
        pageTitle: 'User Management - Admin Panel',

        // Header
        headerTitle: 'User Management',
        logout: 'Logout',

        // Create user panel
        addNewUser: 'Add New User',
        username: 'Username',
        usernameRequired: 'Username *',
        password: 'Password',
        passwordRequired: 'Password *',
        email: 'Email',
        role: 'Role',
        roleRequired: 'Role *',
        fullName: 'Full Name',
        createUser: 'Create User',

        // Placeholders
        minChars3: 'minimum 3 characters',
        minChars6: 'minimum 6 characters',
        emailPlaceholder: 'user@example.com',
        fullNamePlaceholder: 'John Doe',

        // Roles
        roleViewer: 'Viewer (read only)',
        roleManager: 'Manager (management)',
        roleAdmin: 'Admin (full access)',

        // Users table
        usersList: 'Users List',
        refresh: 'Refresh',
        tableId: 'ID',
        tableUsername: 'Username',
        tableEmail: 'Email',
        tableRole: 'Role',
        tableFullName: 'Full Name',
        tableCreated: 'Created',
        tableLastLogin: 'Last Login',
        tableStatus: 'Status',
        tableActions: 'Actions',

        // Status
        statusActive: 'Active',
        statusInactive: 'Inactive',
        never: 'Never',

        // Actions
        edit: 'Edit',
        delete: 'Delete',

        // Messages
        loading: 'Loading data...',
        loadingShort: 'Loading...',
        noUsersFound: 'No users found',
        userCreated: 'User created successfully!',
        userDeleted: 'User deleted',
        passwordChanged: 'Password changed',
        errorCreating: 'Error creating user',
        errorLoading: 'Error loading users',
        errorDeleting: 'Error deleting',
        errorUpdating: 'Error updating',

        // Confirmations
        confirmLogout: 'Logout from system?',
        confirmDelete: 'Delete user "{username}"?\nThis action cannot be undone!',
        changePassword: 'Change password for "{username}":\n(minimum 6 characters)',
        passwordTooShort: 'Password must be at least 6 characters',
        authRequired: 'Authorization required',

        // Language
        language: 'Language'
    }
};

// Current language
let currentLang = localStorage.getItem('app_language') || CONFIG.DEFAULT_LANGUAGE || 'ru';

/**
 * Get translation by key
 */
function t(key, replacements = {}) {
    let text = TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS['en']?.[key] || key;

    // Replace placeholders like {username}
    Object.keys(replacements).forEach(placeholder => {
        text = text.replace(`{${placeholder}}`, replacements[placeholder]);
    });

    return text;
}

/**
 * Set language and update UI
 */
function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
        currentLang = lang;
        localStorage.setItem('app_language', lang);
        updateUI();
    }
}

/**
 * Get current language
 */
function getCurrentLanguage() {
    return currentLang;
}

/**
 * Update all UI elements with translations
 */
function updateUI() {
    // Update page title
    document.title = t('pageTitle');

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Update elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update select options
    const roleSelect = document.getElementById('role');
    if (roleSelect) {
        roleSelect.innerHTML = `
            <option value="viewer">👁️ ${t('roleViewer')}</option>
            <option value="manager">👔 ${t('roleManager')}</option>
            <option value="admin">👑 ${t('roleAdmin')}</option>
        `;
    }

    // Update table headers
    const tableHeaders = document.querySelectorAll('.users-table th');
    if (tableHeaders.length === 9) {
        tableHeaders[0].textContent = t('tableId');
        tableHeaders[1].textContent = t('tableUsername');
        tableHeaders[2].textContent = t('tableEmail');
        tableHeaders[3].textContent = t('tableRole');
        tableHeaders[4].textContent = t('tableFullName');
        tableHeaders[5].textContent = t('tableCreated');
        tableHeaders[6].textContent = t('tableLastLogin');
        tableHeaders[7].textContent = t('tableStatus');
        tableHeaders[8].textContent = t('tableActions');
    }

    // Update language selector
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = currentLang;
    }

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}
