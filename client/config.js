/**
 * =====================================================
 * CONFIGURATION FILE - Client Dashboard
 * =====================================================
 * Edit this file to configure your webhooks and settings
 * Отредактируйте этот файл для настройки вебхуков
 */

const CONFIG = {
    // Base API URL for all endpoints
    // Базовый URL API для всех эндпоинтов
    API_BASE: 'https://your-server.com/webhook',

    // Specific endpoints (relative to API_BASE)
    // Конкретные эндпоинты (относительно API_BASE)
    ENDPOINTS: {
        CLIENT_AUTH: '/client/auth',
        CLIENT_DOMAINS: '/client/domains'
    },

    // Items per page for domains list
    // Количество доменов на странице
    DOMAINS_PER_PAGE: 10,

    // License integration script URL (for integration guide)
    // URL скрипта интеграции лицензии (для гида по интеграции)
    LICENSE_SCRIPT_URL: 'https://license.cryptomator.pro/monitoring.js'
};
