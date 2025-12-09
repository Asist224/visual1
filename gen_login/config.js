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

    // Admin credentials for login
    // Логин и пароль администратора для входа
    ADMIN_USERNAME: 'admin',
    ADMIN_PASSWORD: 'admin123',

    // JWT token for API authorization (get from your n8n or generate valid JWT)
    // JWT токен для авторизации API (получите из n8n или сгенерируйте валидный JWT)
    AUTH_TOKEN: 'your-valid-jwt-token-here',

    // Default language: 'ru' or 'en'
    // Язык по умолчанию: 'ru' или 'en'
    DEFAULT_LANGUAGE: 'ru'
};
