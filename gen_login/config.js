/**
 * =====================================================
 * CONFIGURATION FILE
 * =====================================================
 * Edit this file to configure your webhooks and settings
 * Отредактируйте этот файл для настройки вебхуков
 */

const CONFIG = {
    // API endpoint for user management
    // URL вебхука для управления пользователями
    API_URL: 'https://your-server.com/webhook/admin/users',

    // Admin credentials for local login
    // Логин и пароль администратора для локальной авторизации
    ADMIN_USERNAME: 'admin',
    ADMIN_PASSWORD: 'admin123',

    // JWT token for API calls (generate once in n8n and paste here)
    // JWT токен для API запросов (сгенерируйте один раз в n8n и вставьте сюда)
    AUTH_TOKEN: 'your-jwt-token-here',

    // Default language: 'ru' or 'en'
    // Язык по умолчанию: 'ru' или 'en'
    DEFAULT_LANGUAGE: 'ru'
};
