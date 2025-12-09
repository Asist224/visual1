/**
 * =====================================================
 * CONFIGURATION FILE - Admin Panel
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
        ADMIN_LOGIN: '/admin/auth',
        CLIENTS: '/api/clients',
        RESET_PASSWORD: '/api/reset-password'
    },

    // Items per page in the table
    // Количество элементов на странице в таблице
    ITEMS_PER_PAGE: 10
};
