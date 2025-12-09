
   // Переключение вкладок - ГЛОБАЛЬНАЯ ФУНКЦИЯ (определена в начале для надёжности)
window.switchTab = function(tabName) {
    // Скрыть все вкладки
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Показать выбранную вкладку
    const tabContent = document.getElementById(`${tabName}-tab`);
    if (tabContent) {
        tabContent.classList.add('active');
    }

    // Найти и активировать кнопку вкладки
    document.querySelectorAll('.tab').forEach(tab => {
        if (tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(tabName)) {
            tab.classList.add('active');
        }
    });
}

   // Переводы для страницы настроек
const ConfigEditorTranslations = {
    ru: {
        title: "Настройки конфигурации мониторинга",
        subtitle: "Визуальный редактор для настройки системы мониторинга чатов",
        tabs: {
            general: "🌍 Основные",
            display: "👁️ Отображение",
            configurations: "📋 Конфигурации",
            platforms: "📱 Платформы",
            languages: "🌐 Языки анализа",
            technical: "🔧 Технические",
            crm: "📊 CRM Интеграция",
            branding: "🏷️ Брендирование"
        },
        general: {
            interfaceLanguage: "🌐 Язык интерфейса",
            theme: "🎨 Тема оформления",
            selectTheme: "Выберите тему:",
            lightTheme: "☀️ Светлая",
            darkTheme: "🌙 Тёмная"
        },
        display: {
            filters: "🔍 Фильтры",
            statsCards: "📊 Карточки статистики",
            charts: "📈 Графики",
            tableColumns: "📋 Колонки таблицы",
            actionButtons: "⚡ Кнопки действий в таблице",
            emailMonitoring: "📧 Email мониторинг",
            enableEmailTable: "Включить таблицу Email пользователей"
        },
        filterLabels: {
            period: "📅 Период",
            configuration: "📋 Конфигурация",
            platform: "📱 Платформа",
            search: "🔍 Поиск",
            refreshButton: "🔄 Кнопка обновления",
            analysisButtons: "🤖 Кнопки анализа"
        },
        statsLabels: {
            totalUsers: "👥 Всего пользователей",
            activeSessions: "🟢 Активные сессии",
            avgSessionTime: "⏰ Среднее время сессии",
            totalMessages: "📩 Всего сообщений"
        },
        chartLabels: {
            activity: "📈 Активность по времени",
            geography: "🌍 География пользователей",
            platforms: "📱 Распределение по платформам"
        },
        tableLabels: {
            leadScore: "⭐ Lead Score",
            bantAnalysis: "💼 BANT Анализ",
            contactName: "👤 Имя контакта",
            contactPhone: "📞 Телефон",
            contactEmail: "📧 Email",
            contactMessengers: "💬 Мессенджеры",
            contactCompany: "🏢 Компания",
            sessionId: "🆔 Session ID",
            ipAddress: "🌐 IP адрес",
            country: "🏳️ Страна",
            city: "🏙️ Город",
            platform: "📱 Платформа",
            configuration: "📋 Конфигурация",
            startTime: "🕐 Время начала",
            duration: "⏱️ Длительность",
            messages: "💬 Сообщений",
            satisfaction: "😊 Удовлетворенность",
            crmStatus: "📊 CRM статус",
            status: "🔵 Статус",
            actions: "⚡ Действия"
        },
        actionButtonLabels: {
            viewDialog: "👁️ Кнопка \"Диалог\"",
            analyze: "🔍 Кнопка \"Анализ\"",
            viewAnalysis: "📊 Кнопка \"Результат\"",
            extractContacts: "📥 Кнопка \"Обновить контакты\"",
            deleteRecord: "🗑️ Кнопка \"Удалить запись\""
        },
        highlights: {
            title: "⚡ Хайлайты разговоров",
            enabled: "Включить хайлайты",
            pricing: "💰 Обсуждение цены",
            objection: "❌ Возражение клиента",
            buyingSignal: "✅ Сигнал покупки"
        },
        configurations: {
            available: "📋 Доступные конфигурации"
        },
        platforms: {
            available: "📱 Доступные платформы"
        },
        analysisLanguages: {
            title: "🌐 Языки для анализа диалогов"
        },
        analysisLanguageSync: {
            title: "Синхронизация языка анализа",
    autoSync: "Автоматически синхронизировать язык анализа с языком интерфейса",
    autoSyncHint: "При включении язык анализа диалогов будет автоматически меняться при смене языка интерфейса"
},
        resultLanguages: {
    title: "🌍 Выбор языка результата анализа диалога"
},
        technical: {
            intervals: "⏱️ Интервалы и лимиты",
            refreshInterval: "Интервал автообновления (мс):",
            itemsPerPage: "Элементов на странице:",
            apiSettings: "🔑 API настройки",
            webhookApiKey: "API ключ:",
            webhookApiKeyPlaceholder: "Введите API ключ для защиты вебхуков",
            webhooks: "🔗 Адреса вебхуков",
            monitoringData: "Данные мониторинга:",
            dialogs: "Диалоги:",
            analyzeDialog: "Анализ диалогов:",
            autoAnalysisSettings: "Настройки автоанализа:",
            cleanupSettings: "Настройки очистки:",
            updateCleanupSettings: "Обновление настроек очистки:",
            getAnalysis: "Получение анализа:",
            getAllAnalysis: "Все анализы:",
            serverTime: "Время сервера:",
            extractContacts: "Извлечение контактов:",
            getContacts: "Получение контактов:",
            getAnalysisLanguage: "Получение языка анализа:",
            setAnalysisLanguage: "Установка языка анализа:",
            deleteSession: "Удаление сессии:",
            deleteEmail: "Удаление email записи:",
            sendToCRM: "Отправка в CRM:",
            crmStatus: "Статус CRM:",
            crmSettings: "Настройки CRM:",
            updateCRMSettings: "Обновление настроек CRM:",
            emailWebhooks: "📧 Адреса вебхуков для Email мониторинга",
            emailData: "Данные Email мониторинга:",
            emailDialogs: "Email диалоги:",
            analyzeEmail: "Анализ Email диалога:",
            getEmailAnalysis: "Получение Email анализа:",
            getAllEmailAnalysis: "Все Email анализы:",
            extractEmailContacts: "Извлечение Email контактов:",
            getEmailContacts: "Получение данных Email контактов:",
            authLoginEndpoint: "Вход в систему (аутентификация):",
            authValidateEndpoint: "Проверка токена (валидация):",
        },
        crm: {
            mainSettings: "📊 Основные настройки CRM",
            enableIntegration: "Включить интеграцию с CRM системой",
            systemName: "Название CRM системы:",
            systemNamePlaceholder: "Например: Bitrix24, amoCRM и т.д.",
            apiKey: "API ключ:",
            apiKeyPlaceholder: "Введите API ключ вашей CRM",
            systemUrl: "URL CRM системы:",
            systemUrlPlaceholder: "https://your-crm.com",
            fieldMapping: "🔗 Сопоставление полей",
            fieldMappingDesc: "Настройте соответствие полей между системой мониторинга и вашей CRM",
            nameField: "Поле \"Имя\" в CRM:",
            nameFieldPlaceholder: "name, first_name, contact_name и т.д.",
            phoneField: "Поле \"Телефон\" в CRM:",
            phoneFieldPlaceholder: "phone, phone_number, mobile и т.д.",
            emailField: "Поле \"Email\" в CRM:",
            emailFieldPlaceholder: "email, email_address, mail и т.д.",
            companyField: "Поле \"Компания\" в CRM:",
            companyFieldPlaceholder: "company, company_name, organization и т.д."
        },
        buttons: {
            save: "💾 Сохранить изменения",
            reset: "↩️ Сбросить изменения",
            export: "📤 Экспортировать конфигурацию",
            restore: "📥 Восстановить из резерва",
            resetToDefaults: "🔄 Сбросить на заводские"
        },
        messages: {
            success: "✅ Настройки успешно сохранены!",
            resetConfirm: "✅ Изменения сброшены",
            defaultsConfirm: "Вы уверены, что хотите сбросить все настройки на заводские? Это действие нельзя отменить.",
            noBackups: "Нет доступных резервных копий",
            selectBackup: "📥 Выберите резервную копию для восстановления",
            cancel: "❌ Отмена",
            restoreConfirm: "Вы уверены, что хотите восстановить эту резервную копию? Текущая конфигурация будет перезаписана.",
            restoreSuccess: "✅ Конфигурация успешно восстановлена!",
            restoreError: "❌ Ошибка",
            saveError: "Ошибка сохранения",
            unknownError: "Неизвестная ошибка",
            saveLocalPrompt: "Не удалось сохранить на сервер. Скачать файл конфигурации?",
            reloadPrompt: "Конфигурация сохранена! Перезагрузить страницу мониторинга для применения изменений?"
        },
        branding: {
            title: "Брендирование системы мониторинга",
            subtitle: "Настройте логотип и название вашей компании в системе мониторинга",
            enabled: "Включить брендирование",
            enabledHint: "Показывать логотип и название компании в правом нижнем углу таблицы пользователей",
            mainSettings: "Основные настройки",
            logoType: "Тип логотипа:",
            logoTypes: {
                svg: "SVG код",
                icon: "Иконка (emoji)",
                image: "URL изображения"
            },
            logoTypeHint: "Выберите как отображать логотип",
            svgCode: "SVG код логотипа:",
            svgCodeHint: "Вставьте полный SVG код (включая теги <svg>...</svg>)",
            iconEmoji: "Иконка (emoji):",
            iconEmojiHint: "Введите emoji иконку",
            imageUrl: "URL изображения:",
            imageUrlHint: "Ссылка на изображение логотипа",
            companyName: "Название компании:",
            companyNameHint: "Будет отображаться рядом с логотипом",
            companyUrl: "Ссылка на сайт компании (опционально):",
            companyUrlHint: "Если указана, название компании станет кликабельной ссылкой",
            poweredByText: "Текст \"Powered by\" (опционально):",
            poweredByTextHint: "Текст перед названием компании. Оставьте пустым, чтобы не отображать",
            sizesTitle: "Размеры",
            logoWidth: "Ширина логотипа (px):",
            logoHeight: "Высота логотипа (px):",
            fontSize: "Размер шрифта (px):",
            previewTitle: "Превью",
            lightTheme: "Светлая тема",
            darkTheme: "Темная тема"
        }
    },
    en: {
        title: "Monitoring Configuration Settings",
        subtitle: "Visual editor for chat monitoring system configuration",
        tabs: {
            general: "🌍 General",
            display: "👁️ Display",
            configurations: "📋 Configurations",
            platforms: "📱 Platforms",
            languages: "🌐 Analysis Languages",
            technical: "🔧 Technical",
            crm: "📊 CRM Integration",
            branding: "🏷️ Branding"
        },
        general: {
            interfaceLanguage: "🌐 Interface Language",
            theme: "🎨 Theme",
            selectTheme: "Select theme:",
            lightTheme: "☀️ Light",
            darkTheme: "🌙 Dark"
        },
        display: {
            filters: "🔍 Filters",
            statsCards: "📊 Statistics Cards",
            charts: "📈 Charts",
            tableColumns: "📋 Table Columns",
            actionButtons: "⚡ Action Buttons in Table",
            emailMonitoring: "📧 Email Monitoring",
            enableEmailTable: "Enable Email Users Table"
        },
        filterLabels: {
            period: "📅 Period",
            configuration: "📋 Configuration",
            platform: "📱 Platform",
            search: "🔍 Search",
            refreshButton: "🔄 Refresh Button",
            analysisButtons: "🤖 Analysis Buttons"
        },
        statsLabels: {
            totalUsers: "👥 Total Users",
            activeSessions: "🟢 Active Sessions",
            avgSessionTime: "⏰ Average Session Time",
            totalMessages: "📩 Total Messages"
        },
        chartLabels: {
            activity: "📈 Activity Timeline",
            geography: "🌍 User Geography",
            platforms: "📱 Platform Distribution"
        },
        tableLabels: {
            leadScore: "⭐ Lead Score",
            bantAnalysis: "💼 BANT Analysis",
            contactName: "👤 Contact Name",
            contactPhone: "📞 Phone",
            contactEmail: "📧 Email",
            contactMessengers: "💬 Messengers",
            contactCompany: "🏢 Company",
            sessionId: "🆔 Session ID",
            ipAddress: "🌐 IP Address",
            country: "🏳️ Country",
            city: "🏙️ City",
            platform: "📱 Platform",
            configuration: "📋 Configuration",
            startTime: "🕐 Start Time",
            duration: "⏱️ Duration",
            messages: "💬 Messages",
            satisfaction: "😊 Satisfaction",
            crmStatus: "📊 CRM Status",
            status: "🔵 Status",
            actions: "⚡ Actions"
        },
        actionButtonLabels: {
            viewDialog: "👁️ \"Dialog\" Button",
            analyze: "🔍 \"Analyze\" Button",
            viewAnalysis: "📊 \"Result\" Button",
            extractContacts: "📥 \"Update Contacts\" Button",
            deleteRecord: "🗑️ \"Delete Record\" Button"
        },
        highlights: {
            title: "⚡ Conversation Highlights",
            enabled: "Enable highlights",
            pricing: "💰 Pricing Discussion",
            objection: "❌ Customer Objection",
            buyingSignal: "✅ Buying Signal"
        },
        configurations: {
            available: "📋 Available Configurations"
        },
        platforms: {
            available: "📱 Available Platforms"
        },
        analysisLanguages: {
            title: "🌐 Languages for Dialog Analysis"
        },
        analysisLanguageSync: {
            title: "Analysis Language Sync",
    autoSync: "Automatically sync analysis language with interface language",
    autoSyncHint: "When enabled, dialog analysis language will automatically change when interface language changes"
},
        resultLanguages: {
    title: "🌍 Analysis Result Language Selection"
},
        technical: {
            intervals: "⏱️ Intervals and Limits",
            refreshInterval: "Auto-refresh interval (ms):",
            itemsPerPage: "Items per page:",
            apiSettings: "🔑 API Settings",
            webhookApiKey: "API Key:",
            webhookApiKeyPlaceholder: "Enter API key for webhook protection",
            webhooks: "🔗 Webhook URLs",
            monitoringData: "Monitoring Data:",
            dialogs: "Dialogs:",
            analyzeDialog: "Analyze Dialog:",
            autoAnalysisSettings: "Auto-analysis Settings:",
            cleanupSettings: "Cleanup Settings:",
            updateCleanupSettings: "Update Cleanup Settings:",
            getAnalysis: "Get Analysis:",
            getAllAnalysis: "All Analysis:",
            serverTime: "Server Time:",
            extractContacts: "Extract Contacts:",
            getContacts: "Get Contacts:",
            getAnalysisLanguage: "Get Analysis Language:",
            setAnalysisLanguage: "Set Analysis Language:",
            deleteSession: "Delete Session:",
            deleteEmail: "Delete Email Record:",
            sendToCRM: "Send to CRM:",
            crmStatus: "CRM Status:",
            crmSettings: "CRM Settings:",
            updateCRMSettings: "Update CRM Settings:",
            emailWebhooks: "📧 Email Monitoring Webhook URLs",
            emailData: "Email Monitoring Data:",
            emailDialogs: "Email Dialogs:",
            analyzeEmail: "Analyze Email Dialog:",
            getEmailAnalysis: "Get Email Analysis:",
            getAllEmailAnalysis: "All Email Analysis:",
            extractEmailContacts: "Extract Email Contacts:",
            getEmailContacts: "Get Email Contact Data:",
            authLoginEndpoint: "System Login (Authentication):",
            authValidateEndpoint: "Token Validation:",
        },
        crm: {
            mainSettings: "📊 Main CRM Settings",
            enableIntegration: "Enable CRM System Integration",
            systemName: "CRM System Name:",
            systemNamePlaceholder: "E.g.: Bitrix24, amoCRM, etc.",
            apiKey: "API Key:",
            apiKeyPlaceholder: "Enter your CRM API key",
            systemUrl: "CRM System URL:",
            systemUrlPlaceholder: "https://your-crm.com",
            fieldMapping: "🔗 Field Mapping",
            fieldMappingDesc: "Configure field mapping between monitoring system and your CRM",
            nameField: "\"Name\" field in CRM:",
            nameFieldPlaceholder: "name, first_name, contact_name, etc.",
            phoneField: "\"Phone\" field in CRM:",
            phoneFieldPlaceholder: "phone, phone_number, mobile, etc.",
            emailField: "\"Email\" field in CRM:",
            emailFieldPlaceholder: "email, email_address, mail, etc.",
            companyField: "\"Company\" field in CRM:",
            companyFieldPlaceholder: "company, company_name, organization, etc."
        },
        buttons: {
            save: "💾 Save Changes",
            reset: "↩️ Reset Changes",
            export: "📤 Export Configuration",
            restore: "📥 Restore from Backup",
            resetToDefaults: "🔄 Reset to Defaults"
        },
        messages: {
            success: "✅ Settings saved successfully!",
            resetConfirm: "✅ Changes reset",
            defaultsConfirm: "Are you sure you want to reset all settings to defaults? This action cannot be undone.",
            noBackups: "No backups available",
            selectBackup: "📥 Select a backup to restore",
            cancel: "❌ Cancel",
            restoreConfirm: "Are you sure you want to restore this backup? Current configuration will be overwritten.",
            restoreSuccess: "✅ Configuration restored successfully!",
            restoreError: "❌ Error",
            saveError: "Save error",
            unknownError: "Unknown error",
            saveLocalPrompt: "Failed to save to server. Download configuration file?",
            reloadPrompt: "Configuration saved! Reload monitoring page to apply changes?"
        },
        branding: {
            title: "Monitoring System Branding",
            subtitle: "Customize your company logo and name in the monitoring system",
            enabled: "Enable branding",
            enabledHint: "Display company logo and name in the bottom right corner of the users table",
            mainSettings: "Main Settings",
            logoType: "Logo type:",
            logoTypes: {
                svg: "SVG code",
                icon: "Icon (emoji)",
                image: "Image URL"
            },
            logoTypeHint: "Choose how to display the logo",
            svgCode: "SVG logo code:",
            svgCodeHint: "Paste complete SVG code (including <svg>...</svg> tags)",
            iconEmoji: "Icon (emoji):",
            iconEmojiHint: "Enter emoji icon",
            imageUrl: "Image URL:",
            imageUrlHint: "Link to logo image",
            companyName: "Company name:",
            companyNameHint: "Will be displayed next to the logo",
            companyUrl: "Company website URL (optional):",
            companyUrlHint: "If specified, company name will become a clickable link",
            poweredByText: "\"Powered by\" text (optional):",
            poweredByTextHint: "Text before company name. Leave empty to hide",
            sizesTitle: "Sizes",
            logoWidth: "Logo width (px):",
            logoHeight: "Logo height (px):",
            fontSize: "Font size (px):",
            previewTitle: "Preview",
            lightTheme: "Light theme",
            darkTheme: "Dark theme"
        }
    },
    es: {
        title: "Configuración del Sistema de Monitoreo",
        subtitle: "Editor visual para la configuración del sistema de monitoreo de chats",
        tabs: {
            general: "🌍 General",
            display: "👁️ Visualización",
            configurations: "📋 Configuraciones",
            platforms: "📱 Plataformas",
            languages: "🌐 Idiomas de Análisis",
            technical: "🔧 Técnico",
            crm: "📊 Integración CRM",
            branding: "🏷️ Marca"
        },
        general: {
            interfaceLanguage: "🌐 Idioma de Interfaz",
            theme: "🎨 Tema",
            selectTheme: "Seleccionar tema:",
            lightTheme: "☀️ Claro",
            darkTheme: "🌙 Oscuro"
        },
        display: {
            filters: "🔍 Filtros",
            statsCards: "📊 Tarjetas de Estadísticas",
            charts: "📈 Gráficos",
            tableColumns: "📋 Columnas de Tabla",
            actionButtons: "⚡ Botones de Acción en Tabla",
            emailMonitoring: "📧 Monitoreo de Email",
            enableEmailTable: "Habilitar Tabla de Usuarios de Email"
        },
        filterLabels: {
            period: "📅 Período",
            configuration: "📋 Configuración",
            platform: "📱 Plataforma",
            search: "🔍 Búsqueda",
            refreshButton: "🔄 Botón de Actualización",
            analysisButtons: "🤖 Botones de Análisis"
        },
        statsLabels: {
            totalUsers: "👥 Total de Usuarios",
            activeSessions: "🟢 Sesiones Activas",
            avgSessionTime: "⏰ Tiempo Promedio de Sesión",
            totalMessages: "📩 Total de Mensajes"
        },
        chartLabels: {
            activity: "📈 Actividad en el Tiempo",
            geography: "🌍 Geografía de Usuarios",
            platforms: "📱 Distribución por Plataforma"
        },
        tableLabels: {
            leadScore: "⭐ Lead Score",
            bantAnalysis: "💼 Análisis BANT",
            contactName: "👤 Nombre del Contacto",
            contactPhone: "📞 Teléfono",
            contactEmail: "📧 Email",
            contactMessengers: "💬 Mensajería",
            contactCompany: "🏢 Empresa",
            sessionId: "🆔 ID de Sesión",
            ipAddress: "🌐 Dirección IP",
            country: "🏳️ País",
            city: "🏙️ Ciudad",
            platform: "📱 Plataforma",
            configuration: "📋 Configuración",
            startTime: "🕐 Hora de Inicio",
            duration: "⏱️ Duración",
            messages: "💬 Mensajes",
            satisfaction: "😊 Satisfacción",
            crmStatus: "📊 Estado CRM",
            status: "🔵 Estado",
            actions: "⚡ Acciones"
        },
        actionButtonLabels: {
            viewDialog: "👁️ Botón \"Diálogo\"",
            analyze: "🔍 Botón \"Análisis\"",
            viewAnalysis: "📊 Botón \"Resultado\"",
            extractContacts: "📥 Botón \"Actualizar Contactos\"",
            deleteRecord: "🗑️ Botón \"Eliminar Registro\""
        },
        highlights: {
            title: "⚡ Aspectos destacados de conversaciones",
            enabled: "Habilitar destacados",
            pricing: "💰 Discusión de precios",
            objection: "❌ Objeción del cliente",
            buyingSignal: "✅ Señal de compra"
        },
        configurations: {
            available: "📋 Configuraciones Disponibles"
        },
        platforms: {
            available: "📱 Plataformas Disponibles"
        },
        analysisLanguages: {
            title: "🌐 Idiomas para Análisis de Diálogos"
        },
        analysisLanguageSync: {
            title: "Sincronización de Idioma de Análisis",
    autoSync: "Sincronizar automáticamente el idioma de análisis con el idioma de la interfaz",
    autoSyncHint: "Cuando está habilitado, el idioma de análisis de diálogo cambiará automáticamente cuando cambie el idioma de la interfaz"
},
        resultLanguages: {
    title: "🌍 Selección de Idioma de Resultados de Análisis"
},
        technical: {
            intervals: "⏱️ Intervalos y Límites",
            refreshInterval: "Intervalo de actualización automática (ms):",
            itemsPerPage: "Elementos por página:",
            apiSettings: "🔑 Configuración de API",
            webhookApiKey: "Clave API:",
            webhookApiKeyPlaceholder: "Ingrese la clave API para proteger los webhooks",
            webhooks: "🔗 URLs de Webhooks",
            monitoringData: "Datos de Monitoreo:",
            dialogs: "Diálogos:",
            analyzeDialog: "Analizar Diálogo:",
            autoAnalysisSettings: "Configuración de Autoanálisis:",
            cleanupSettings: "Configuración de Limpieza:",
            updateCleanupSettings: "Actualizar Configuración de Limpieza:",
            getAnalysis: "Obtener Análisis:",
            getAllAnalysis: "Todos los Análisis:",
            serverTime: "Hora del Servidor:",
            extractContacts: "Extraer Contactos:",
            getContacts: "Obtener Contactos:",
            getAnalysisLanguage: "Obtener Idioma de Análisis:",
            setAnalysisLanguage: "Establecer Idioma de Análisis:",
            deleteSession: "Eliminar Sesión:",
            deleteEmail: "Eliminar Registro de Email:",
            sendToCRM: "Enviar a CRM:",
            crmStatus: "Estado CRM:",
            crmSettings: "Configuración CRM:",
            updateCRMSettings: "Actualizar Configuración CRM:",
            emailWebhooks: "📧 URLs de Webhooks para Monitoreo de Email",
            emailData: "Datos de Monitoreo de Email:",
            emailDialogs: "Diálogos de Email:",
            analyzeEmail: "Analizar Diálogo de Email:",
            getEmailAnalysis: "Obtener Análisis de Email:",
            getAllEmailAnalysis: "Todos los Análisis de Email:",
            extractEmailContacts: "Extraer Contactos de Email:",
            getEmailContacts: "Obtener Datos de Contactos de Email:",
            authLoginEndpoint: "Inicio de sesión (autenticación):",
            authValidateEndpoint: "Validación de token:"
        },
        crm: {
            mainSettings: "📊 Configuración Principal de CRM",
            enableIntegration: "Habilitar Integración con Sistema CRM",
            systemName: "Nombre del Sistema CRM:",
            systemNamePlaceholder: "Ej.: Bitrix24, amoCRM, etc.",
            apiKey: "Clave API:",
            apiKeyPlaceholder: "Ingrese su clave API de CRM",
            systemUrl: "URL del Sistema CRM:",
            systemUrlPlaceholder: "https://su-crm.com",
            fieldMapping: "🔗 Mapeo de Campos",
            fieldMappingDesc: "Configure el mapeo de campos entre el sistema de monitoreo y su CRM",
            nameField: "Campo \"Nombre\" en CRM:",
            nameFieldPlaceholder: "name, first_name, contact_name, etc.",
            phoneField: "Campo \"Teléfono\" en CRM:",
            phoneFieldPlaceholder: "phone, phone_number, mobile, etc.",
            emailField: "Campo \"Email\" en CRM:",
            emailFieldPlaceholder: "email, email_address, mail, etc.",
            companyField: "Campo \"Empresa\" en CRM:",
            companyFieldPlaceholder: "company, company_name, organization, etc."
        },
        buttons: {
            save: "💾 Guardar Cambios",
            reset: "↩️ Restablecer Cambios",
            export: "📤 Exportar Configuración",
            restore: "📥 Restaurar desde Copia",
            resetToDefaults: "🔄 Restablecer a Valores Predeterminados"
        },
        messages: {
            success: "✅ ¡Configuración guardada exitosamente!",
            resetConfirm: "✅ Cambios restablecidos",
            defaultsConfirm: "¿Está seguro de que desea restablecer toda la configuración a los valores predeterminados? Esta acción no se puede deshacer.",
            noBackups: "No hay copias de seguridad disponibles",
            selectBackup: "📥 Seleccione una copia de seguridad para restaurar",
            cancel: "❌ Cancelar",
            restoreConfirm: "¿Está seguro de que desea restaurar esta copia de seguridad? La configuración actual será sobrescrita.",
            restoreSuccess: "✅ ¡Configuración restaurada exitosamente!",
            restoreError: "❌ Error",
            saveError: "Error al guardar",
            unknownError: "Error desconocido",
            saveLocalPrompt: "No se pudo guardar en el servidor. ¿Descargar archivo de configuración?",
            reloadPrompt: "¡Configuración guardada! ¿Recargar la página de monitoreo para aplicar los cambios?"
        },
        branding: {
            title: "Marca del Sistema de Monitoreo",
            subtitle: "Personalice el logotipo y nombre de su empresa en el sistema de monitoreo",
            enabled: "Activar marca",
            enabledHint: "Mostrar logotipo y nombre de la empresa en la esquina inferior derecha de la tabla de usuarios",
            mainSettings: "Configuración Principal",
            logoType: "Tipo de logotipo:",
            logoTypes: {
                svg: "Código SVG",
                icon: "Icono (emoji)",
                image: "URL de imagen"
            },
            logoTypeHint: "Elija cómo mostrar el logotipo",
            svgCode: "Código SVG del logotipo:",
            svgCodeHint: "Pegue el código SVG completo (incluyendo las etiquetas <svg>...</svg>)",
            iconEmoji: "Icono (emoji):",
            iconEmojiHint: "Ingrese icono emoji",
            imageUrl: "URL de imagen:",
            imageUrlHint: "Enlace a la imagen del logotipo",
            companyName: "Nombre de la empresa:",
            companyNameHint: "Se mostrará junto al logotipo",
            companyUrl: "URL del sitio web de la empresa (opcional):",
            companyUrlHint: "Si se especifica, el nombre de la empresa se convertirá en un enlace clicable",
            poweredByText: "Texto \"Powered by\" (opcional):",
            poweredByTextHint: "Texto antes del nombre de la empresa. Dejar vacío para ocultar",
            sizesTitle: "Tamaños",
            logoWidth: "Ancho del logotipo (px):",
            logoHeight: "Alto del logotipo (px):",
            fontSize: "Tamaño de fuente (px):",
            previewTitle: "Vista Previa",
            lightTheme: "Tema claro",
            darkTheme: "Tema oscuro"
        }
    },
    fr: {
        title: "Paramètres de Configuration du Monitoring",
        subtitle: "Éditeur visuel pour la configuration du système de surveillance des chats",
        tabs: {
            general: "🌍 Général",
            display: "👁️ Affichage",
            configurations: "📋 Configurations",
            platforms: "📱 Plateformes",
            languages: "🌐 Langues d'Analyse",
            technical: "🔧 Technique",
            crm: "📊 Intégration CRM",
            branding: "🏷️ Marque"
        },
        general: {
            interfaceLanguage: "🌐 Langue de l'Interface",
            theme: "🎨 Thème",
            selectTheme: "Sélectionner le thème:",
            lightTheme: "☀️ Clair",
            darkTheme: "🌙 Sombre"
        },
        display: {
            filters: "🔍 Filtres",
            statsCards: "📊 Cartes de Statistiques",
            charts: "📈 Graphiques",
            tableColumns: "📋 Colonnes du Tableau",
            actionButtons: "⚡ Boutons d'Action dans le Tableau",
            emailMonitoring: "📧 Surveillance Email",
            enableEmailTable: "Activer le Tableau des Utilisateurs Email"
        },
        filterLabels: {
            period: "📅 Période",
            configuration: "📋 Configuration",
            platform: "📱 Plateforme",
            search: "🔍 Recherche",
            refreshButton: "🔄 Bouton de Rafraîchissement",
            analysisButtons: "🤖 Boutons d'Analyse"
        },
        statsLabels: {
            totalUsers: "👥 Total des Utilisateurs",
            activeSessions: "🟢 Sessions Actives",
            avgSessionTime: "⏰ Temps Moyen de Session",
            totalMessages: "📩 Total des Messages"
        },
        chartLabels: {
            activity: "📈 Activité dans le Temps",
            geography: "🌍 Géographie des Utilisateurs",
            platforms: "📱 Répartition par Plateforme"
        },
        tableLabels: {
            leadScore: "⭐ Lead Score",
            bantAnalysis: "💼 Analyse BANT",
            contactName: "👤 Nom du Contact",
            contactPhone: "📞 Téléphone",
            contactEmail: "📧 Email",
            contactMessengers: "💬 Messageries",
            contactCompany: "🏢 Entreprise",
            sessionId: "🆔 ID de Session",
            ipAddress: "🌐 Adresse IP",
            country: "🏳️ Pays",
            city: "🏙️ Ville",
            platform: "📱 Plateforme",
            configuration: "📋 Configuration",
            startTime: "🕐 Heure de Début",
            duration: "⏱️ Durée",
            messages: "💬 Messages",
            satisfaction: "😊 Satisfaction",
            crmStatus: "📊 Statut CRM",
            status: "🔵 Statut",
            actions: "⚡ Actions"
        },
        actionButtonLabels: {
            viewDialog: "👁️ Bouton \"Dialogue\"",
            analyze: "🔍 Bouton \"Analyse\"",
            viewAnalysis: "📊 Bouton \"Résultat\"",
            extractContacts: "📥 Bouton \"Mettre à Jour les Contacts\"",
            deleteRecord: "🗑️ Bouton \"Supprimer l'Enregistrement\""
        },
        highlights: {
            title: "⚡ Points forts des conversations",
            enabled: "Activer les points forts",
            pricing: "💰 Discussion sur les prix",
            objection: "❌ Objection du client",
            buyingSignal: "✅ Signal d'achat"
        },
        configurations: {
            available: "📋 Configurations Disponibles"
        },
        platforms: {
            available: "📱 Plateformes Disponibles"
        },
        analysisLanguages: {
            title: "🌐 Langues pour l'Analyse des Dialogues"
        },
        analysisLanguageSync: {
            title: "Synchronisation de Langue d'Analyse",
    autoSync: "Synchroniser automatiquement la langue d'analyse avec la langue de l'interface",
    autoSyncHint: "Lorsqu'elle est activée, la langue d'analyse des dialogues changera automatiquement lors du changement de langue de l'interface"
},
        resultLanguages: {
    title: "🌍 Sélection de la Langue des Résultats d'Analyse"
},
        technical: {
            intervals: "⏱️ Intervalles et Limites",
            refreshInterval: "Intervalle de rafraîchissement automatique (ms):",
            itemsPerPage: "Éléments par page:",
            apiSettings: "🔑 Paramètres API",
            webhookApiKey: "Clé API:",
            webhookApiKeyPlaceholder: "Entrez la clé API pour la protection des webhooks",
            webhooks: "🔗 URLs des Webhooks",
            monitoringData: "Données de Surveillance:",
            dialogs: "Dialogues:",
            analyzeDialog: "Analyser le Dialogue:",
            autoAnalysisSettings: "Paramètres d'Auto-analyse:",
            cleanupSettings: "Paramètres de Nettoyage:",
            updateCleanupSettings: "Mettre à Jour les Paramètres de Nettoyage:",
            getAnalysis: "Obtenir l'Analyse:",
            getAllAnalysis: "Toutes les Analyses:",
            serverTime: "Heure du Serveur:",
            extractContacts: "Extraire les Contacts:",
            getContacts: "Obtenir les Contacts:",
            getAnalysisLanguage: "Obtenir la Langue d'Analyse:",
            setAnalysisLanguage: "Définir la Langue d'Analyse:",
            deleteSession: "Supprimer la Session:",
            deleteEmail: "Supprimer l'Enregistrement Email:",
            sendToCRM: "Envoyer au CRM:",
            crmStatus: "Statut CRM:",
            crmSettings: "Paramètres CRM:",
            updateCRMSettings: "Mettre à Jour les Paramètres CRM:",
            emailWebhooks: "📧 URLs des Webhooks pour la Surveillance Email",
            emailData: "Données de Surveillance Email:",
            emailDialogs: "Dialogues Email:",
            analyzeEmail: "Analyser le Dialogue Email:",
            getEmailAnalysis: "Obtenir l'Analyse Email:",
            getAllEmailAnalysis: "Toutes les Analyses Email:",
            extractEmailContacts: "Extraire les Contacts Email:",
            getEmailContacts: "Obtenir les Données des Contacts Email:",
            authLoginEndpoint: "Connexion système (authentification):",
            authValidateEndpoint: "Validation du token:"
        },
        crm: {
            mainSettings: "📊 Paramètres Principaux du CRM",
            enableIntegration: "Activer l'Intégration avec le Système CRM",
            systemName: "Nom du Système CRM:",
            systemNamePlaceholder: "Ex.: Bitrix24, amoCRM, etc.",
            apiKey: "Clé API:",
            apiKeyPlaceholder: "Entrez votre clé API CRM",
            systemUrl: "URL du Système CRM:",
            systemUrlPlaceholder: "https://votre-crm.com",
            fieldMapping: "🔗 Mappage des Champs",
            fieldMappingDesc: "Configurez le mappage des champs entre le système de surveillance et votre CRM",
            nameField: "Champ \"Nom\" dans le CRM:",
            nameFieldPlaceholder: "name, first_name, contact_name, etc.",
            phoneField: "Champ \"Téléphone\" dans le CRM:",
            phoneFieldPlaceholder: "phone, phone_number, mobile, etc.",
            emailField: "Champ \"Email\" dans le CRM:",
            emailFieldPlaceholder: "email, email_address, mail, etc.",
            companyField: "Champ \"Entreprise\" dans le CRM:",
            companyFieldPlaceholder: "company, company_name, organization, etc."
        },
        buttons: {
            save: "💾 Enregistrer les Modifications",
            reset: "↩️ Réinitialiser les Modifications",
            export: "📤 Exporter la Configuration",
            restore: "📥 Restaurer depuis une Sauvegarde",
            resetToDefaults: "🔄 Réinitialiser aux Valeurs par Défaut"
        },
        messages: {
            success: "✅ Paramètres enregistrés avec succès!",
            resetConfirm: "✅ Modifications réinitialisées",
            defaultsConfirm: "Êtes-vous sûr de vouloir réinitialiser tous les paramètres aux valeurs par défaut? Cette action ne peut pas être annulée.",
            noBackups: "Aucune sauvegarde disponible",
            selectBackup: "📥 Sélectionnez une sauvegarde à restaurer",
            cancel: "❌ Annuler",
            restoreConfirm: "Êtes-vous sûr de vouloir restaurer cette sauvegarde? La configuration actuelle sera écrasée.",
            restoreSuccess: "✅ Configuration restaurée avec succès!",
            restoreError: "❌ Erreur",
            saveError: "Erreur de sauvegarde",
            unknownError: "Erreur inconnue",
            saveLocalPrompt: "Échec de la sauvegarde sur le serveur. Télécharger le fichier de configuration?",
            reloadPrompt: "Configuration enregistrée! Recharger la page de surveillance pour appliquer les modifications?"
        },
        branding: {
            title: "Marquage du Système de Surveillance",
            subtitle: "Personnalisez le logo et le nom de votre entreprise dans le système de surveillance",
            enabled: "Activer le marquage",
            enabledHint: "Afficher le logo et le nom de l'entreprise dans le coin inférieur droit du tableau des utilisateurs",
            mainSettings: "Paramètres Principaux",
            logoType: "Type de logo:",
            logoTypes: {
                svg: "Code SVG",
                icon: "Icône (emoji)",
                image: "URL d'image"
            },
            logoTypeHint: "Choisissez comment afficher le logo",
            svgCode: "Code SVG du logo:",
            svgCodeHint: "Collez le code SVG complet (incluant les balises <svg>...</svg>)",
            iconEmoji: "Icône (emoji):",
            iconEmojiHint: "Entrez l'icône emoji",
            imageUrl: "URL de l'image:",
            imageUrlHint: "Lien vers l'image du logo",
            companyName: "Nom de l'entreprise:",
            companyNameHint: "Sera affiché à côté du logo",
            companyUrl: "URL du site web de l'entreprise (facultatif):",
            companyUrlHint: "Si spécifié, le nom de l'entreprise deviendra un lien cliquable",
            poweredByText: "Texte \"Powered by\" (facultatif):",
            poweredByTextHint: "Texte avant le nom de l'entreprise. Laisser vide pour masquer",
            sizesTitle: "Tailles",
            logoWidth: "Largeur du logo (px):",
            logoHeight: "Hauteur du logo (px):",
            fontSize: "Taille de police (px):",
            previewTitle: "Aperçu",
            lightTheme: "Thème clair",
            darkTheme: "Thème sombre"
        }
    },
    de: {
        title: "Überwachungskonfigurationseinstellungen",
        subtitle: "Visueller Editor für die Chat-Überwachungssystem-Konfiguration",
        tabs: {
            general: "🌍 Allgemein",
            display: "👁️ Anzeige",
            configurations: "📋 Konfigurationen",
            platforms: "📱 Plattformen",
            languages: "🌐 Analysesprachen",
            technical: "🔧 Technisch",
            crm: "📊 CRM-Integration",
            branding: "🏷️ Branding"
        },
        general: {
            interfaceLanguage: "🌐 Schnittstellensprache",
            theme: "🎨 Thema",
            selectTheme: "Thema auswählen:",
            lightTheme: "☀️ Hell",
            darkTheme: "🌙 Dunkel"
        },
        display: {
            filters: "🔍 Filter",
            statsCards: "📊 Statistikkarten",
            charts: "📈 Diagramme",
            tableColumns: "📋 Tabellenspalten",
            actionButtons: "⚡ Aktionsschaltflächen in Tabelle",
            emailMonitoring: "📧 E-Mail-Überwachung",
            enableEmailTable: "E-Mail-Benutzertabelle aktivieren"
        },
        filterLabels: {
            period: "📅 Zeitraum",
            configuration: "📋 Konfiguration",
            platform: "📱 Plattform",
            search: "🔍 Suche",
            refreshButton: "🔄 Aktualisierungsschaltfläche",
            analysisButtons: "🤖 Analyseschaltflächen"
        },
        statsLabels: {
            totalUsers: "👥 Gesamtbenutzer",
            activeSessions: "🟢 Aktive Sitzungen",
            avgSessionTime: "⏰ Durchschnittliche Sitzungszeit",
            totalMessages: "📩 Gesamtnachrichten"
        },
        chartLabels: {
            activity: "📈 Aktivität über Zeit",
            geography: "🌍 Benutzergeografie",
            platforms: "📱 Plattformverteilung"
        },
        tableLabels: {
            leadScore: "⭐ Lead Score",
            bantAnalysis: "💼 BANT-Analyse",
            contactName: "👤 Kontaktname",
            contactPhone: "📞 Telefon",
            contactEmail: "📧 E-Mail",
            contactMessengers: "💬 Messenger",
            contactCompany: "🏢 Unternehmen",
            sessionId: "🆔 Sitzungs-ID",
            ipAddress: "🌐 IP-Adresse",
            country: "🏳️ Land",
            city: "🏙️ Stadt",
            platform: "📱 Plattform",
            configuration: "📋 Konfiguration",
            startTime: "🕐 Startzeit",
            duration: "⏱️ Dauer",
            messages: "💬 Nachrichten",
            satisfaction: "😊 Zufriedenheit",
            crmStatus: "📊 CRM-Status",
            status: "🔵 Status",
            actions: "⚡ Aktionen"
        },
        actionButtonLabels: {
            viewDialog: "👁️ \"Dialog\"-Schaltfläche",
            analyze: "🔍 \"Analyse\"-Schaltfläche",
            viewAnalysis: "📊 \"Ergebnis\"-Schaltfläche",
            extractContacts: "📥 \"Kontakte aktualisieren\"-Schaltfläche",
            deleteRecord: "🗑️ \"Eintrag löschen\"-Schaltfläche"
        },
        highlights: {
            title: "⚡ Gesprächs-Highlights",
            enabled: "Highlights aktivieren",
            pricing: "💰 Preisdiskussion",
            objection: "❌ Kundeneinwand",
            buyingSignal: "✅ Kaufsignal"
        },
        configurations: {
            available: "📋 Verfügbare Konfigurationen"
        },
        platforms: {
            available: "📱 Verfügbare Plattformen"
        },
        analysisLanguages: {
            title: "🌐 Sprachen für Dialoganalyse"
        },
        analysisLanguageSync: {
            title: "Analysesprache-Synchronisation",
    autoSync: "Analysesprache automatisch mit Schnittstellensprache synchronisieren",
    autoSyncHint: "Wenn aktiviert, ändert sich die Dialoganalysesprache automatisch, wenn sich die Schnittstellensprache ändert"
},
        resultLanguages: {
    title: "🌍 Auswahl der Analyseergebnis-Sprache"
},
        technical: {
            intervals: "⏱️ Intervalle und Limits",
            refreshInterval: "Auto-Aktualisierungsintervall (ms):",
            itemsPerPage: "Elemente pro Seite:",
            apiSettings: "🔑 API-Einstellungen",
            webhookApiKey: "API-Schlüssel:",
            webhookApiKeyPlaceholder: "API-Schlüssel für Webhook-Schutz eingeben",
            webhooks: "🔗 Webhook-URLs",
            monitoringData: "Überwachungsdaten:",
            dialogs: "Dialoge:",
            analyzeDialog: "Dialog analysieren:",
            autoAnalysisSettings: "Auto-Analyse-Einstellungen:",
            cleanupSettings: "Bereinigungseinstellungen:",
            updateCleanupSettings: "Bereinigungseinstellungen aktualisieren:",
            getAnalysis: "Analyse abrufen:",
            getAllAnalysis: "Alle Analysen:",
            serverTime: "Serverzeit:",
            extractContacts: "Kontakte extrahieren:",
            getContacts: "Kontakte abrufen:",
            getAnalysisLanguage: "Analysesprache abrufen:",
            setAnalysisLanguage: "Analysesprache festlegen:",
            deleteSession: "Sitzung löschen:",
            deleteEmail: "E-Mail-Eintrag löschen:",
            sendToCRM: "An CRM senden:",
            crmStatus: "CRM-Status:",
            crmSettings: "CRM-Einstellungen:",
            updateCRMSettings: "CRM-Einstellungen aktualisieren:",
            emailWebhooks: "📧 Webhook-URLs für E-Mail-Überwachung",
            emailData: "E-Mail-Überwachungsdaten:",
            emailDialogs: "E-Mail-Dialoge:",
            analyzeEmail: "E-Mail-Dialog analysieren:",
            getEmailAnalysis: "E-Mail-Analyse abrufen:",
            getAllEmailAnalysis: "Alle E-Mail-Analysen:",
            extractEmailContacts: "E-Mail-Kontakte extrahieren:",
            getEmailContacts: "E-Mail-Kontaktdaten abrufen:",
            authLoginEndpoint: "Systemanmeldung (Authentifizierung):",
            authValidateEndpoint: "Token-Validierung:"
        },
        crm: {
            mainSettings: "📊 Haupt-CRM-Einstellungen",
            enableIntegration: "CRM-Systemintegration aktivieren",
            systemName: "CRM-Systemname:",
            systemNamePlaceholder: "Z.B.: Bitrix24, amoCRM, usw.",
            apiKey: "API-Schlüssel:",
            apiKeyPlaceholder: "Geben Sie Ihren CRM-API-Schlüssel ein",
            systemUrl: "CRM-System-URL:",
            systemUrlPlaceholder: "https://ihr-crm.com",
            fieldMapping: "🔗 Feldzuordnung",
            fieldMappingDesc: "Konfigurieren Sie die Feldzuordnung zwischen Überwachungssystem und Ihrem CRM",
            nameField: "\"Name\"-Feld im CRM:",
            nameFieldPlaceholder: "name, first_name, contact_name, usw.",
            phoneField: "\"Telefon\"-Feld im CRM:",
            phoneFieldPlaceholder: "phone, phone_number, mobile, usw.",
            emailField: "\"E-Mail\"-Feld im CRM:",
            emailFieldPlaceholder: "email, email_address, mail, usw.",
            companyField: "\"Unternehmen\"-Feld im CRM:",
            companyFieldPlaceholder: "company, company_name, organization, usw."
        },
        buttons: {
            save: "💾 Änderungen speichern",
            reset: "↩️ Änderungen zurücksetzen",
            export: "📤 Konfiguration exportieren",
            restore: "📥 Aus Sicherung wiederherstellen",
            resetToDefaults: "🔄 Auf Standardwerte zurücksetzen"
        },
        messages: {
            success: "✅ Einstellungen erfolgreich gespeichert!",
            resetConfirm: "✅ Änderungen zurückgesetzt",
            defaultsConfirm: "Sind Sie sicher, dass Sie alle Einstellungen auf die Standardwerte zurücksetzen möchten? Diese Aktion kann nicht rückgängig gemacht werden.",
            noBackups: "Keine Sicherungen verfügbar",
            selectBackup: "📥 Wählen Sie eine Sicherung zur Wiederherstellung",
            cancel: "❌ Abbrechen",
            restoreConfirm: "Sind Sie sicher, dass Sie diese Sicherung wiederherstellen möchten? Die aktuelle Konfiguration wird überschrieben.",
            restoreSuccess: "✅ Konfiguration erfolgreich wiederhergestellt!",
            restoreError: "❌ Fehler",
            saveError: "Speicherfehler",
            unknownError: "Unbekannter Fehler",
            saveLocalPrompt: "Speichern auf Server fehlgeschlagen. Konfigurationsdatei herunterladen?",
            reloadPrompt: "Konfiguration gespeichert! Überwachungsseite neu laden, um Änderungen anzuwenden?"
        },
        branding: {
            title: "Überwachungssystem-Branding",
            subtitle: "Passen Sie Ihr Firmenlogo und -namen im Überwachungssystem an",
            enabled: "Branding aktivieren",
            enabledHint: "Firmenlogo und -name in der rechten unteren Ecke der Benutzertabelle anzeigen",
            mainSettings: "Haupteinstellungen",
            logoType: "Logo-Typ:",
            logoTypes: {
                svg: "SVG-Code",
                icon: "Symbol (Emoji)",
                image: "Bild-URL"
            },
            logoTypeHint: "Wählen Sie, wie das Logo angezeigt werden soll",
            svgCode: "SVG-Logo-Code:",
            svgCodeHint: "Vollständigen SVG-Code einfügen (einschließlich <svg>...</svg> Tags)",
            iconEmoji: "Symbol (Emoji):",
            iconEmojiHint: "Emoji-Symbol eingeben",
            imageUrl: "Bild-URL:",
            imageUrlHint: "Link zum Logo-Bild",
            companyName: "Firmenname:",
            companyNameHint: "Wird neben dem Logo angezeigt",
            companyUrl: "Firmenwebsite-URL (optional):",
            companyUrlHint: "Falls angegeben, wird der Firmenname zu einem klickbaren Link",
            poweredByText: "\"Powered by\" Text (optional):",
            poweredByTextHint: "Text vor dem Firmennamen. Leer lassen zum Ausblenden",
            sizesTitle: "Größen",
            logoWidth: "Logo-Breite (px):",
            logoHeight: "Logo-Höhe (px):",
            fontSize: "Schriftgröße (px):",
            previewTitle: "Vorschau",
            lightTheme: "Helles Theme",
            darkTheme: "Dunkles Theme"
        }
    },
    it: {
        title: "Impostazioni di Configurazione del Monitoraggio",
        subtitle: "Editor visuale per la configurazione del sistema di monitoraggio chat",
        tabs: {
            general: "🌍 Generale",
            display: "👁️ Visualizzazione",
            configurations: "📋 Configurazioni",
            platforms: "📱 Piattaforme",
            languages: "🌐 Lingue di Analisi",
            technical: "🔧 Tecnico",
            crm: "📊 Integrazione CRM",
            branding: "🏷️ Marchio"
        },
        general: {
            interfaceLanguage: "🌐 Lingua dell'Interfaccia",
            theme: "🎨 Tema",
            selectTheme: "Seleziona tema:",
            lightTheme: "☀️ Chiaro",
            darkTheme: "🌙 Scuro"
        },
        display: {
            filters: "🔍 Filtri",
            statsCards: "📊 Schede Statistiche",
            charts: "📈 Grafici",
            tableColumns: "📋 Colonne della Tabella",
            actionButtons: "⚡ Pulsanti di Azione nella Tabella",
            emailMonitoring: "📧 Monitoraggio Email",
            enableEmailTable: "Abilita Tabella Utenti Email"
        },
        filterLabels: {
            period: "📅 Periodo",
            configuration: "📋 Configurazione",
            platform: "📱 Piattaforma",
            search: "🔍 Ricerca",
            refreshButton: "🔄 Pulsante di Aggiornamento",
            analysisButtons: "🤖 Pulsanti di Analisi"
        },
        statsLabels: {
            totalUsers: "👥 Utenti Totali",
            activeSessions: "🟢 Sessioni Attive",
            avgSessionTime: "⏰ Tempo Medio di Sessione",
            totalMessages: "📩 Messaggi Totali"
        },
        chartLabels: {
            activity: "📈 Attività nel Tempo",
            geography: "🌍 Geografia degli Utenti",
            platforms: "📱 Distribuzione per Piattaforma"
        },
        tableLabels: {
            leadScore: "⭐ Lead Score",
            bantAnalysis: "💼 Analisi BANT",
            contactName: "👤 Nome Contatto",
            contactPhone: "📞 Telefono",
            contactEmail: "📧 Email",
            contactMessengers: "💬 Messaggistica",
            contactCompany: "🏢 Azienda",
            sessionId: "🆔 ID Sessione",
            ipAddress: "🌐 Indirizzo IP",
            country: "🏳️ Paese",
            city: "🏙️ Città",
            platform: "📱 Piattaforma",
            configuration: "📋 Configurazione",
            startTime: "🕐 Ora di Inizio",
            duration: "⏱️ Durata",
            messages: "💬 Messaggi",
            satisfaction: "😊 Soddisfazione",
            crmStatus: "📊 Stato CRM",
            status: "🔵 Stato",
            actions: "⚡ Azioni"
        },
        actionButtonLabels: {
            viewDialog: "👁️ Pulsante \"Dialogo\"",
            analyze: "🔍 Pulsante \"Analisi\"",
            viewAnalysis: "📊 Pulsante \"Risultato\"",
            extractContacts: "📥 Pulsante \"Aggiorna Contatti\"",
            deleteRecord: "🗑️ Pulsante \"Elimina Record\""
        },
        highlights: {
            title: "⚡ Punti salienti delle conversazioni",
            enabled: "Abilita punti salienti",
            pricing: "💰 Discussione sui prezzi",
            objection: "❌ Obiezione del cliente",
            buyingSignal: "✅ Segnale di acquisto"
        },
        configurations: {
            available: "📋 Configurazioni Disponibili"
        },
        platforms: {
            available: "📱 Piattaforme Disponibili"
        },
        analysisLanguages: {
            title: "🌐 Lingue per l'Analisi dei Dialoghi"
        },
        analysisLanguageSync: {
            title: "Sincronizzazione Lingua di Analisi",
    autoSync: "Sincronizza automaticamente la lingua di analisi con la lingua dell'interfaccia",
    autoSyncHint: "Quando abilitata, la lingua di analisi del dialogo cambierà automaticamente quando cambia la lingua dell'interfaccia"
},
        resultLanguages: {
    title: "🌍 Selezione Lingua Risultati Analisi"
},
        technical: {
            intervals: "⏱️ Intervalli e Limiti",
            refreshInterval: "Intervallo di aggiornamento automatico (ms):",
            itemsPerPage: "Elementi per pagina:",
            apiSettings: "🔑 Impostazioni API",
            webhookApiKey: "Chiave API:",
            webhookApiKeyPlaceholder: "Inserisci la chiave API per la protezione dei webhook",
            webhooks: "🔗 URL dei Webhook",
            monitoringData: "Dati di Monitoraggio:",
            dialogs: "Dialoghi:",
            analyzeDialog: "Analizza Dialogo:",
            autoAnalysisSettings: "Impostazioni Auto-analisi:",
            cleanupSettings: "Impostazioni di Pulizia:",
            updateCleanupSettings: "Aggiorna Impostazioni di Pulizia:",
            getAnalysis: "Ottieni Analisi:",
            getAllAnalysis: "Tutte le Analisi:",
            serverTime: "Ora del Server:",
            extractContacts: "Estrai Contatti:",
            getContacts: "Ottieni Contatti:",
            getAnalysisLanguage: "Ottieni Lingua di Analisi:",
            setAnalysisLanguage: "Imposta Lingua di Analisi:",
            deleteSession: "Elimina Sessione:",
            deleteEmail: "Elimina Record Email:",
            sendToCRM: "Invia al CRM:",
            crmStatus: "Stato CRM:",
            crmSettings: "Impostazioni CRM:",
            updateCRMSettings: "Aggiorna Impostazioni CRM:",
            emailWebhooks: "📧 URL dei Webhook per il Monitoraggio Email",
            emailData: "Dati di Monitoraggio Email:",
            emailDialogs: "Dialoghi Email:",
            analyzeEmail: "Analizza Dialogo Email:",
            getEmailAnalysis: "Ottieni Analisi Email:",
            getAllEmailAnalysis: "Tutte le Analisi Email:",
            extractEmailContacts: "Estrai Contatti Email:",
            getEmailContacts: "Ottieni Dati Contatti Email:",
            authLoginEndpoint: "Accesso al sistema (autenticazione):",
            authValidateEndpoint: "Validazione token:"
        },
        crm: {
            mainSettings: "📊 Impostazioni Principali CRM",
            enableIntegration: "Abilita Integrazione con Sistema CRM",
            systemName: "Nome del Sistema CRM:",
            systemNamePlaceholder: "Es.: Bitrix24, amoCRM, ecc.",
            apiKey: "Chiave API:",
            apiKeyPlaceholder: "Inserisci la tua chiave API CRM",
            systemUrl: "URL del Sistema CRM:",
            systemUrlPlaceholder: "https://tuo-crm.com",
            fieldMapping: "🔗 Mappatura dei Campi",
            fieldMappingDesc: "Configura la mappatura dei campi tra il sistema di monitoraggio e il tuo CRM",
            nameField: "Campo \"Nome\" nel CRM:",
            nameFieldPlaceholder: "name, first_name, contact_name, ecc.",
            phoneField: "Campo \"Telefono\" nel CRM:",
            phoneFieldPlaceholder: "phone, phone_number, mobile, ecc.",
            emailField: "Campo \"Email\" nel CRM:",
            emailFieldPlaceholder: "email, email_address, mail, ecc.",
            companyField: "Campo \"Azienda\" nel CRM:",
            companyFieldPlaceholder: "company, company_name, organization, ecc."
        },
        buttons: {
            save: "💾 Salva Modifiche",
            reset: "↩️ Ripristina Modifiche",
            export: "📤 Esporta Configurazione",
            restore: "📥 Ripristina da Backup",
            resetToDefaults: "🔄 Ripristina ai Valori Predefiniti"
        },
        messages: {
            success: "✅ Impostazioni salvate con successo!",
            resetConfirm: "✅ Modifiche ripristinate",
            defaultsConfirm: "Sei sicuro di voler ripristinare tutte le impostazioni ai valori predefiniti? Questa azione non può essere annullata.",
            noBackups: "Nessun backup disponibile",
            selectBackup: "📥 Seleziona un backup da ripristinare",
            cancel: "❌ Annulla",
            restoreConfirm: "Sei sicuro di voler ripristinare questo backup? La configurazione attuale verrà sovrascritta.",
            restoreSuccess: "✅ Configurazione ripristinata con successo!",
            restoreError: "❌ Errore",
            saveError: "Errore di salvataggio",
            unknownError: "Errore sconosciuto",
            saveLocalPrompt: "Impossibile salvare sul server. Scaricare il file di configurazione?",
            reloadPrompt: "Configurazione salvata! Ricaricare la pagina di monitoraggio per applicare le modifiche?"
        },
        branding: {
            title: "Marchio del Sistema di Monitoraggio",
            subtitle: "Personalizza il logo e il nome della tua azienda nel sistema di monitoraggio",
            enabled: "Attiva marchio",
            enabledHint: "Mostra il logo e il nome dell'azienda nell'angolo in basso a destra della tabella utenti",
            mainSettings: "Impostazioni Principali",
            logoType: "Tipo di logo:",
            logoTypes: {
                svg: "Codice SVG",
                icon: "Icona (emoji)",
                image: "URL immagine"
            },
            logoTypeHint: "Scegli come visualizzare il logo",
            svgCode: "Codice SVG del logo:",
            svgCodeHint: "Incolla il codice SVG completo (inclusi i tag <svg>...</svg>)",
            iconEmoji: "Icona (emoji):",
            iconEmojiHint: "Inserisci icona emoji",
            imageUrl: "URL immagine:",
            imageUrlHint: "Link all'immagine del logo",
            companyName: "Nome dell'azienda:",
            companyNameHint: "Verrà visualizzato accanto al logo",
            companyUrl: "URL del sito web aziendale (facoltativo):",
            companyUrlHint: "Se specificato, il nome dell'azienda diventerà un link cliccabile",
            poweredByText: "Testo \"Powered by\" (facoltativo):",
            poweredByTextHint: "Testo prima del nome dell'azienda. Lasciare vuoto per nascondere",
            sizesTitle: "Dimensioni",
            logoWidth: "Larghezza logo (px):",
            logoHeight: "Altezza logo (px):",
            fontSize: "Dimensione carattere (px):",
            previewTitle: "Anteprima",
            lightTheme: "Tema chiaro",
            darkTheme: "Tema scuro"
        }
    },
    pt: {
        title: "Configurações de Monitoramento",
        subtitle: "Editor visual para configuração do sistema de monitoramento de chats",
        tabs: {
            general: "🌍 Geral",
            display: "👁️ Exibição",
            configurations: "📋 Configurações",
            platforms: "📱 Plataformas",
            languages: "🌐 Idiomas de Análise",
            technical: "🔧 Técnico",
            crm: "📊 Integração CRM",
            branding: "🏷️ Marca"
        },
        general: {
            interfaceLanguage: "🌐 Idioma da Interface",
            theme: "🎨 Tema",
            selectTheme: "Selecionar tema:",
            lightTheme: "☀️ Claro",
            darkTheme: "🌙 Escuro"
        },
        display: {
            filters: "🔍 Filtros",
            statsCards: "📊 Cartões de Estatísticas",
            charts: "📈 Gráficos",
            tableColumns: "📋 Colunas da Tabela",
            actionButtons: "⚡ Botões de Ação na Tabela",
            emailMonitoring: "📧 Monitoramento de Email",
            enableEmailTable: "Ativar Tabela de Utilizadores de Email"
        },
        filterLabels: {
            period: "📅 Período",
            configuration: "📋 Configuração",
            platform: "📱 Plataforma",
            search: "🔍 Pesquisa",
            refreshButton: "🔄 Botão de Atualização",
            analysisButtons: "🤖 Botões de Análise"
        },
        statsLabels: {
            totalUsers: "👥 Total de Utilizadores",
            activeSessions: "🟢 Sessões Ativas",
            avgSessionTime: "⏰ Tempo Médio de Sessão",
            totalMessages: "📩 Total de Mensagens"
        },
        chartLabels: {
            activity: "📈 Atividade ao Longo do Tempo",
            geography: "🌍 Geografia dos Utilizadores",
            platforms: "📱 Distribuição por Plataforma"
        },
        tableLabels: {
            leadScore: "⭐ Lead Score",
            bantAnalysis: "💼 Análise BANT",
            contactName: "👤 Nome do Contacto",
            contactPhone: "📞 Telefone",
            contactEmail: "📧 Email",
            contactMessengers: "💬 Mensageiros",
            contactCompany: "🏢 Empresa",
            sessionId: "🆔 ID da Sessão",
            ipAddress: "🌐 Endereço IP",
            country: "🏳️ País",
            city: "🏙️ Cidade",
            platform: "📱 Plataforma",
            configuration: "📋 Configuração",
            startTime: "🕐 Hora de Início",
            duration: "⏱️ Duração",
            messages: "💬 Mensagens",
            satisfaction: "😊 Satisfação",
            crmStatus: "📊 Estado CRM",
            status: "🔵 Estado",
            actions: "⚡ Ações"
        },
        actionButtonLabels: {
            viewDialog: "👁️ Botão \"Diálogo\"",
            analyze: "🔍 Botão \"Análise\"",
            viewAnalysis: "📊 Botão \"Resultado\"",
            extractContacts: "📥 Botão \"Atualizar Contactos\"",
            deleteRecord: "🗑️ Botão \"Eliminar Registo\""
        },
        highlights: {
            title: "⚡ Destaques de conversas",
            enabled: "Ativar destaques",
            pricing: "💰 Discussão de preços",
            objection: "❌ Objeção do cliente",
            buyingSignal: "✅ Sinal de compra"
        },
        configurations: {
            available: "📋 Configurações Disponíveis"
        },
        platforms: {
            available: "📱 Plataformas Disponíveis"
        },
        analysisLanguages: {
            title: "🌐 Idiomas para Análise de Diálogos"
        },
        analysisLanguageSync: {
            title: "Sincronização de Idioma de Análise",
    autoSync: "Sincronizar automaticamente o idioma de análise com o idioma da interface",
    autoSyncHint: "Quando ativado, o idioma de análise de diálogo mudará automaticamente quando o idioma da interface mudar"
},
        resultLanguages: {
    title: "🌍 Seleção de Idioma dos Resultados de Análise"
},
        technical: {
            intervals: "⏱️ Intervalos e Limites",
            refreshInterval: "Intervalo de atualização automática (ms):",
            itemsPerPage: "Itens por página:",
            apiSettings: "🔑 Configurações de API",
            webhookApiKey: "Chave API:",
            webhookApiKeyPlaceholder: "Insira a chave API para proteção dos webhooks",
            webhooks: "🔗 URLs de Webhooks",
            monitoringData: "Dados de Monitoramento:",
            dialogs: "Diálogos:",
            analyzeDialog: "Analisar Diálogo:",
            autoAnalysisSettings: "Configurações de Auto-análise:",
            cleanupSettings: "Configurações de Limpeza:",
            updateCleanupSettings: "Atualizar Configurações de Limpeza:",
            getAnalysis: "Obter Análise:",
            getAllAnalysis: "Todas as Análises:",
            serverTime: "Hora do Servidor:",
            extractContacts: "Extrair Contactos:",
            getContacts: "Obter Contactos:",
            getAnalysisLanguage: "Ottieni Lingua di Analisi:",
            setAnalysisLanguage: "Imposta Lingua di Analisi:",
            deleteSession: "Eliminar Sessão:",
            deleteEmail: "Eliminar Registo de Email:",
            sendToCRM: "Enviar para CRM:",
            crmStatus: "Estado CRM:",
            crmSettings: "Configurações CRM:",
            updateCRMSettings: "Atualizar Configurações CRM:",
            emailWebhooks: "📧 URLs de Webhooks para Monitoramento de Email",
            emailData: "Dados de Monitoramento de Email:",
            emailDialogs: "Diálogos de Email:",
            analyzeEmail: "Analisar Diálogo de Email:",
            getEmailAnalysis: "Obter Análise de Email:",
            getAllEmailAnalysis: "Todas as Análises de Email:",
            extractEmailContacts: "Extrair Contactos de Email:",
            getEmailContacts: "Obter Dados de Contactos de Email:",
            authLoginEndpoint: "Login do sistema (autenticação):",
            authValidateEndpoint: "Validação de token:"
        },
        crm: {
            mainSettings: "📊 Configurações Principais do CRM",
            enableIntegration: "Ativar Integração com Sistema CRM",
            systemName: "Nome do Sistema CRM:",
            systemNamePlaceholder: "Ex.: Bitrix24, amoCRM, etc.",
            apiKey: "Chave API:",
            apiKeyPlaceholder: "Insira a sua chave API CRM",
            systemUrl: "URL do Sistema CRM:",
            systemUrlPlaceholder: "https://seu-crm.com",
            fieldMapping: "🔗 Mapeamento de Campos",
            fieldMappingDesc: "Configure o mapeamento de campos entre o sistema de monitoramento e o seu CRM",
            nameField: "Campo \"Nome\" no CRM:",
            nameFieldPlaceholder: "name, first_name, contact_name, etc.",
            phoneField: "Campo \"Telefone\" no CRM:",
            phoneFieldPlaceholder: "phone, phone_number, mobile, etc.",
            emailField: "Campo \"Email\" no CRM:",
            emailFieldPlaceholder: "email, email_address, mail, etc.",
            companyField: "Campo \"Empresa\" no CRM:",
            companyFieldPlaceholder: "company, company_name, organization, etc."
        },
        buttons: {
            save: "💾 Guardar Alterações",
            reset: "↩️ Repor Alterações",
            export: "📤 Exportar Configuração",
            restore: "📥 Restaurar de Cópia",
            resetToDefaults: "🔄 Repor Valores Predefinidos"
        },
        messages: {
            success: "✅ Configurações guardadas com sucesso!",
            resetConfirm: "✅ Alterações repostas",
            defaultsConfirm: "Tem a certeza de que deseja repor todas as configurações para os valores predefinidos? Esta ação não pode ser anulada.",
            noBackups: "Sem cópias de segurança disponíveis",
            selectBackup: "📥 Selecione uma cópia de segurança para restaurar",
            cancel: "❌ Cancelar",
            restoreConfirm: "Tem a certeza de que deseja restaurar esta cópia de segurança? A configuração atual será substituída.",
            restoreSuccess: "✅ Configuração restaurada com sucesso!",
            restoreError: "❌ Erro",
            saveError: "Erro ao guardar",
            unknownError: "Erro desconhecido",
            saveLocalPrompt: "Falha ao guardar no servidor. Descarregar ficheiro de configuração?",
            reloadPrompt: "Configuração guardada! Recarregar página de monitoramento para aplicar alterações?"
        },
        branding: {
            title: "Marca do Sistema de Monitoramento",
            subtitle: "Personalize o logotipo e nome da sua empresa no sistema de monitoramento",
            enabled: "Ativar marca",
            enabledHint: "Mostrar logotipo e nome da empresa no canto inferior direito da tabela de utilizadores",
            mainSettings: "Configurações Principais",
            logoType: "Tipo de logotipo:",
            logoTypes: {
                svg: "Código SVG",
                icon: "Ícone (emoji)",
                image: "URL de imagem"
            },
            logoTypeHint: "Escolha como exibir o logotipo",
            svgCode: "Código SVG do logotipo:",
            svgCodeHint: "Cole o código SVG completo (incluindo as tags <svg>...</svg>)",
            iconEmoji: "Ícone (emoji):",
            iconEmojiHint: "Insira ícone emoji",
            imageUrl: "URL da imagem:",
            imageUrlHint: "Link para a imagem do logotipo",
            companyName: "Nome da empresa:",
            companyNameHint: "Será exibido ao lado do logotipo",
            companyUrl: "URL do site da empresa (opcional):",
            companyUrlHint: "Se especificado, o nome da empresa tornar-se-á um link clicável",
            poweredByText: "Texto \"Powered by\" (opcional):",
            poweredByTextHint: "Texto antes do nome da empresa. Deixe vazio para ocultar",
            sizesTitle: "Tamanhos",
            logoWidth: "Largura do logotipo (px):",
            logoHeight: "Altura do logotipo (px):",
            fontSize: "Tamanho da fonte (px):",
            previewTitle: "Pré-visualização",
            lightTheme: "Tema claro",
            darkTheme: "Tema escuro"
        }
    },
    zh: {
        title: "监控配置设置",
        subtitle: "聊天监控系统配置的可视化编辑器",
        tabs: {
            general: "🌍 常规",
            display: "👁️ 显示",
            configurations: "📋 配置",
            platforms: "📱 平台",
            languages: "🌐 分析语言",
            technical: "🔧 技术",
            crm: "📊 CRM集成",
            branding: "🏷️ 品牌"
        },
        general: {
            interfaceLanguage: "🌐 界面语言",
            theme: "🎨 主题",
            selectTheme: "选择主题：",
            lightTheme: "☀️ 浅色",
            darkTheme: "🌙 深色"
        },
        display: {
            filters: "🔍 筛选器",
            statsCards: "📊 统计卡片",
            charts: "📈 图表",
            tableColumns: "📋 表格列",
            actionButtons: "⚡ 表格中的操作按钮",
            emailMonitoring: "📧 邮件监控",
            enableEmailTable: "启用邮件用户表"
        },
        filterLabels: {
            period: "📅 时期",
            configuration: "📋 配置",
            platform: "📱 平台",
            search: "🔍 搜索",
            refreshButton: "🔄 刷新按钮",
            analysisButtons: "🤖 分析按钮"
        },
        statsLabels: {
            totalUsers: "👥 用户总数",
            activeSessions: "🟢 活动会话",
            avgSessionTime: "⏰ 平均会话时间",
            totalMessages: "📩 消息总数"
        },
        chartLabels: {
            activity: "📈 时间活动",
            geography: "🌍 用户地理",
            platforms: "📱 平台分布"
        },
        tableLabels: {
            leadScore: "⭐ 潜在客户评分",
            bantAnalysis: "💼 BANT分析",
            contactName: "👤 联系人姓名",
            contactPhone: "📞 电话",
            contactEmail: "📧 邮箱",
            contactMessengers: "💬 即时通讯",
            contactCompany: "🏢 公司",
            sessionId: "🆔 会话ID",
            ipAddress: "🌐 IP地址",
            country: "🏳️ 国家",
            city: "🏙️ 城市",
            platform: "📱 平台",
            configuration: "📋 配置",
            startTime: "🕐 开始时间",
            duration: "⏱️ 持续时间",
            messages: "💬 消息",
            satisfaction: "😊 满意度",
            crmStatus: "📊 CRM状态",
            status: "🔵 状态",
            actions: "⚡ 操作"
        },
        actionButtonLabels: {
            viewDialog: "👁️ \"对话\"按钮",
            analyze: "🔍 \"分析\"按钮",
            viewAnalysis: "📊 \"结果\"按钮",
            extractContacts: "📥 \"更新联系人\"按钮",
            deleteRecord: "🗑️ \"删除记录\"按钮"
        },
        highlights: {
            title: "⚡ 对话亮点",
            enabled: "启用亮点",
            pricing: "💰 价格讨论",
            objection: "❌ 客户异议",
            buyingSignal: "✅ 购买信号"
        },
        configurations: {
            available: "📋 可用配置"
        },
        platforms: {
            available: "📱 可用平台"
        },
        analysisLanguages: {
            title: "🌐 对话分析语言"
        },
        analysisLanguageSync: {
            title: "分析语言同步",
    autoSync: "自动同步分析语言与界面语言",
    autoSyncHint: "启用后，对话分析语言将在界面语言更改时自动更改"
},
        resultLanguages: {
    title: "🌍 分析结果语言选择"
},
        technical: {
            intervals: "⏱️ 间隔和限制",
            refreshInterval: "自动刷新间隔（毫秒）：",
            itemsPerPage: "每页项目数：",
            apiSettings: "🔑 API设置",
            webhookApiKey: "API密钥：",
            webhookApiKeyPlaceholder: "输入用于保护Webhook的API密钥",
            webhooks: "🔗 Webhook网址",
            monitoringData: "监控数据：",
            dialogs: "对话：",
            analyzeDialog: "分析对话：",
            autoAnalysisSettings: "自动分析设置：",
            cleanupSettings: "清理设置：",
            updateCleanupSettings: "更新清理设置：",
            getAnalysis: "获取分析：",
            getAllAnalysis: "所有分析：",
            serverTime: "服务器时间：",
            extractContacts: "提取联系人：",
            getContacts: "获取联系人：",
            getAnalysisLanguage: "获取分析语言:",
            setAnalysisLanguage: "设置分析语言:",
            deleteSession: "删除会话:",
            deleteEmail: "删除邮件记录:",
            sendToCRM: "发送到CRM：",
            crmStatus: "CRM状态：",
            crmSettings: "CRM设置：",
            updateCRMSettings: "更新CRM设置：",
            emailWebhooks: "📧 邮件监控Webhook网址",
            emailData: "邮件监控数据：",
            emailDialogs: "邮件对话：",
            analyzeEmail: "分析邮件对话：",
            getEmailAnalysis: "获取邮件分析：",
            getAllEmailAnalysis: "所有邮件分析：",
            extractEmailContacts: "提取邮件联系人：",
            getEmailContacts: "获取邮件联系人数据：",
            authLoginEndpoint: "系统登录（身份验证）:",
            authValidateEndpoint: "令牌验证:"
        },
        crm: {
            mainSettings: "📊 主要CRM设置",
            enableIntegration: "启用CRM系统集成",
            systemName: "CRM系统名称：",
            systemNamePlaceholder: "例如：Bitrix24、amoCRM等",
            apiKey: "API密钥：",
            apiKeyPlaceholder: "输入您的CRM API密钥",
            systemUrl: "CRM系统网址：",
            systemUrlPlaceholder: "https://您的crm.com",
            fieldMapping: "🔗 字段映射",
            fieldMappingDesc: "配置监控系统与您的CRM之间的字段映射",
            nameField: "CRM中的\"姓名\"字段：",
            nameFieldPlaceholder: "name、first_name、contact_name等",
            phoneField: "CRM中的\"电话\"字段：",
            phoneFieldPlaceholder: "phone、phone_number、mobile等",
            emailField: "CRM中的\"邮箱\"字段：",
            emailFieldPlaceholder: "email、email_address、mail等",
            companyField: "CRM中的\"公司\"字段：",
            companyFieldPlaceholder: "company、company_name、organization等"
        },
        buttons: {
            save: "💾 保存更改",
            reset: "↩️ 重置更改",
            export: "📤 导出配置",
            restore: "📥 从备份恢复",
            resetToDefaults: "🔄 重置为默认值"
        },
        messages: {
            success: "✅ 设置保存成功！",
            resetConfirm: "✅ 更改已重置",
            defaultsConfirm: "您确定要将所有设置重置为默认值吗？此操作无法撤销。",
            noBackups: "没有可用的备份",
            selectBackup: "📥 选择要恢复的备份",
            cancel: "❌ 取消",
            restoreConfirm: "您确定要恢复此备份吗？当前配置将被覆盖。",
            restoreSuccess: "✅ 配置恢复成功！",
            restoreError: "❌ 错误",
            saveError: "保存错误",
            unknownError: "未知错误",
            saveLocalPrompt: "无法保存到服务器。下载配置文件？",
            reloadPrompt: "配置已保存！重新加载监控页面以应用更改？"
        },
        branding: {
            title: "监控系统品牌",
            subtitle: "在监控系统中自定义您的公司徽标和名称",
            enabled: "启用品牌",
            enabledHint: "在用户表格右下角显示公司徽标和名称",
            mainSettings: "主要设置",
            logoType: "徽标类型：",
            logoTypes: {
                svg: "SVG代码",
                icon: "图标（表情符号）",
                image: "图片URL"
            },
            logoTypeHint: "选择如何显示徽标",
            svgCode: "SVG徽标代码：",
            svgCodeHint: "粘贴完整的SVG代码（包括<svg>...</svg>标签）",
            iconEmoji: "图标（表情符号）：",
            iconEmojiHint: "输入表情符号图标",
            imageUrl: "图片URL：",
            imageUrlHint: "徽标图片链接",
            companyName: "公司名称：",
            companyNameHint: "将显示在徽标旁边",
            companyUrl: "公司网站URL（可选）：",
            companyUrlHint: "如果指定，公司名称将成为可点击的链接",
            poweredByText: "\"Powered by\"文本（可选）：",
            poweredByTextHint: "公司名称前的文本。留空以隐藏",
            sizesTitle: "尺寸",
            logoWidth: "徽标宽度（px）：",
            logoHeight: "徽标高度（px）：",
            fontSize: "字体大小（px）：",
            previewTitle: "预览",
            lightTheme: "浅色主题",
            darkTheme: "深色主题"
        }
    },
    ja: {
        title: "モニタリング設定",
        subtitle: "チャット監視システム設定のビジュアルエディタ",
        tabs: {
            general: "🌍 一般",
            display: "👁️ 表示",
            configurations: "📋 設定",
            platforms: "📱 プラットフォーム",
            languages: "🌐 分析言語",
            technical: "🔧 技術",
            crm: "📊 CRM統合",
            branding: "🏷️ ブランディング"
        },
        general: {
            interfaceLanguage: "🌐 インターフェース言語",
            theme: "🎨 テーマ",
            selectTheme: "テーマを選択：",
            lightTheme: "☀️ ライト",
            darkTheme: "🌙 ダーク"
        },
        display: {
            filters: "🔍 フィルター",
            statsCards: "📊 統計カード",
            charts: "📈 チャート",
            tableColumns: "📋 テーブル列",
            actionButtons: "⚡ テーブルのアクションボタン",
            emailMonitoring: "📧 メール監視",
            enableEmailTable: "メールユーザーテーブルを有効にする"
        },
        filterLabels: {
            period: "📅 期間",
            configuration: "📋 設定",
            platform: "📱 プラットフォーム",
            search: "🔍 検索",
            refreshButton: "🔄 更新ボタン",
            analysisButtons: "🤖 分析ボタン"
        },
        statsLabels: {
            totalUsers: "👥 総ユーザー数",
            activeSessions: "🟢 アクティブセッション",
            avgSessionTime: "⏰ 平均セッション時間",
            totalMessages: "📩 総メッセージ数"
        },
        chartLabels: {
            activity: "📈 時間別アクティビティ",
            geography: "🌍 ユーザーの地理",
            platforms: "📱 プラットフォーム分布"
        },
        tableLabels: {
            leadScore: "⭐ リードスコア",
            bantAnalysis: "💼 BANT分析",
            contactName: "👤 連絡先名",
            contactPhone: "📞 電話",
            contactEmail: "📧 メール",
            contactMessengers: "💬 メッセンジャー",
            contactCompany: "🏢 会社",
            sessionId: "🆔 セッションID",
            ipAddress: "🌐 IPアドレス",
            country: "🏳️ 国",
            city: "🏙️ 市",
            platform: "📱 プラットフォーム",
            configuration: "📋 設定",
            startTime: "🕐 開始時間",
            duration: "⏱️ 期間",
            messages: "💬 メッセージ",
            satisfaction: "😊 満足度",
            crmStatus: "📊 CRMステータス",
            status: "🔵 ステータス",
            actions: "⚡ アクション"
        },
        actionButtonLabels: {
            viewDialog: "👁️ 「ダイアログ」ボタン",
            analyze: "🔍 「分析」ボタン",
            viewAnalysis: "📊 「結果」ボタン",
            extractContacts: "📥 「連絡先を更新」ボタン",
            deleteRecord: "🗑️ 「レコード削除」ボタン"
        },
        highlights: {
            title: "⚡ 会話のハイライト",
            enabled: "ハイライトを有効にする",
            pricing: "💰 価格の議論",
            objection: "❌ 顧客の異議",
            buyingSignal: "✅ 購入シグナル"
        },
        configurations: {
            available: "📋 利用可能な設定"
        },
        platforms: {
            available: "📱 利用可能なプラットフォーム"
        },
        analysisLanguages: {
            title: "🌐 ダイアログ分析の言語"
        },
        analysisLanguageSync: {
            title: "分析言語同期",
    autoSync: "分析言語をインターフェース言語と自動同期",
    autoSyncHint: "有効にすると、インターフェース言語が変更されたときにダイアログ分析言語が自動的に変更されます"
},
        resultLanguages: {
    title: "🌍 分析結果言語の選択"
},
        technical: {
            intervals: "⏱️ 間隔と制限",
            refreshInterval: "自動更新間隔（ミリ秒）：",
            itemsPerPage: "ページあたりのアイテム数：",
            apiSettings: "🔑 API設定",
            webhookApiKey: "APIキー：",
            webhookApiKeyPlaceholder: "Webhook保護用のAPIキーを入力",
            webhooks: "🔗 WebhookのURL",
            monitoringData: "監視データ：",
            dialogs: "ダイアログ：",
            analyzeDialog: "ダイアログ分析：",
            autoAnalysisSettings: "自動分析設定：",
            cleanupSettings: "クリーンアップ設定：",
            updateCleanupSettings: "クリーンアップ設定の更新：",
            getAnalysis: "分析の取得：",
            getAllAnalysis: "すべての分析：",
            serverTime: "サーバー時間：",
            extractContacts: "連絡先の抽出：",
            getContacts: "連絡先の取得：",
            getAnalysisLanguage: "分析言語の取得:",
            setAnalysisLanguage: "分析言語の設定:",
            deleteSession: "セッション削除:",
            deleteEmail: "メールレコード削除:",
            sendToCRM: "CRMに送信：",
            crmStatus: "CRMステータス：",
            crmSettings: "CRM設定：",
            updateCRMSettings: "CRM設定の更新：",
            emailWebhooks: "📧 メール監視のWebhook URL",
            emailData: "メール監視データ：",
            emailDialogs: "メールダイアログ：",
            analyzeEmail: "メールダイアログの分析：",
            getEmailAnalysis: "メール分析の取得：",
            getAllEmailAnalysis: "すべてのメール分析：",
            extractEmailContacts: "メール連絡先の抽出：",
            getEmailContacts: "メール連絡先データの取得：",
            authLoginEndpoint: "システムログイン（認証）:",
            authValidateEndpoint: "トークン検証:"
        },
        crm: {
            mainSettings: "📊 メインCRM設定",
            enableIntegration: "CRMシステム統合を有効にする",
            systemName: "CRMシステム名：",
            systemNamePlaceholder: "例：Bitrix24、amoCRMなど",
            apiKey: "APIキー：",
            apiKeyPlaceholder: "CRM APIキーを入力",
            systemUrl: "CRMシステムURL：",
            systemUrlPlaceholder: "https://あなたのcrm.com",
            fieldMapping: "🔗 フィールドマッピング",
            fieldMappingDesc: "監視システムとCRM間のフィールドマッピングを設定",
            nameField: "CRMの「名前」フィールド：",
            nameFieldPlaceholder: "name、first_name、contact_nameなど",
            phoneField: "CRMの「電話」フィールド：",
            phoneFieldPlaceholder: "phone、phone_number、mobileなど",
            emailField: "CRMの「メール」フィールド：",
            emailFieldPlaceholder: "email、email_address、mailなど",
            companyField: "CRMの「会社」フィールド：",
            companyFieldPlaceholder: "company、company_name、organizationなど"
        },
        buttons: {
            save: "💾 変更を保存",
            reset: "↩️ 変更をリセット",
            export: "📤 設定をエクスポート",
            restore: "📥 バックアップから復元",
            resetToDefaults: "🔄 デフォルトにリセット"
        },
        messages: {
            success: "✅ 設定が正常に保存されました！",
            resetConfirm: "✅ 変更がリセットされました",
            defaultsConfirm: "すべての設定をデフォルトにリセットしますか？この操作は元に戻せません。",
            noBackups: "利用可能なバックアップがありません",
            selectBackup: "📥 復元するバックアップを選択",
            cancel: "❌ キャンセル",
            restoreConfirm: "このバックアップを復元しますか？現在の設定は上書きされます。",
            restoreSuccess: "✅ 設定が正常に復元されました！",
            restoreError: "❌ エラー",
            saveError: "保存エラー",
            unknownError: "不明なエラー",
            saveLocalPrompt: "サーバーへの保存に失敗しました。設定ファイルをダウンロードしますか？",
            reloadPrompt: "設定が保存されました！変更を適用するために監視ページをリロードしますか？"
        },
        branding: {
            title: "モニタリングシステムブランディング",
            subtitle: "監視システムで会社のロゴと名前をカスタマイズ",
            enabled: "ブランディングを有効化",
            enabledHint: "ユーザーテーブルの右下に会社のロゴと名前を表示",
            mainSettings: "主な設定",
            logoType: "ロゴタイプ：",
            logoTypes: {
                svg: "SVGコード",
                icon: "アイコン（絵文字）",
                image: "画像URL"
            },
            logoTypeHint: "ロゴの表示方法を選択",
            svgCode: "SVGロゴコード：",
            svgCodeHint: "完全なSVGコードを貼り付け（<svg>...</svg>タグを含む）",
            iconEmoji: "アイコン（絵文字）：",
            iconEmojiHint: "絵文字アイコンを入力",
            imageUrl: "画像URL：",
            imageUrlHint: "ロゴ画像へのリンク",
            companyName: "会社名：",
            companyNameHint: "ロゴの横に表示されます",
            companyUrl: "会社ウェブサイトURL（オプション）：",
            companyUrlHint: "指定すると、会社名がクリック可能なリンクになります",
            poweredByText: "\"Powered by\"テキスト（オプション）：",
            poweredByTextHint: "会社名の前のテキスト。非表示にするには空白のままにします",
            sizesTitle: "サイズ",
            logoWidth: "ロゴ幅（px）：",
            logoHeight: "ロゴ高さ（px）：",
            fontSize: "フォントサイズ（px）：",
            previewTitle: "プレビュー",
            lightTheme: "ライトテーマ",
            darkTheme: "ダークテーマ"
        }
    },
    ko: {
        title: "모니터링 구성 설정",
        subtitle: "채팅 모니터링 시스템 구성을 위한 시각적 편집기",
        tabs: {
            general: "🌍 일반",
            display: "👁️ 표시",
            configurations: "📋 구성",
            platforms: "📱 플랫폼",
            languages: "🌐 분석 언어",
            technical: "🔧 기술",
            crm: "📊 CRM 통합",
            branding: "🏷️ 브랜딩"
        },
        general: {
            interfaceLanguage: "🌐 인터페이스 언어",
            theme: "🎨 테마",
            selectTheme: "테마 선택:",
            lightTheme: "☀️ 라이트",
            darkTheme: "🌙 다크"
        },
        display: {
            filters: "🔍 필터",
            statsCards: "📊 통계 카드",
            charts: "📈 차트",
            tableColumns: "📋 테이블 열",
            actionButtons: "⚡ 테이블의 작업 버튼",
            emailMonitoring: "📧 이메일 모니터링",
            enableEmailTable: "이메일 사용자 테이블 활성화"
        },
        filterLabels: {
            period: "📅 기간",
            configuration: "📋 구성",
            platform: "📱 플랫폼",
            search: "🔍 검색",
            refreshButton: "🔄 새로고침 버튼",
            analysisButtons: "🤖 분석 버튼"
        },
        statsLabels: {
            totalUsers: "👥 총 사용자",
            activeSessions: "🟢 활성 세션",
            avgSessionTime: "⏰ 평균 세션 시간",
            totalMessages: "📩 총 메시지"
        },
        chartLabels: {
            activity: "📈 시간별 활동",
            geography: "🌍 사용자 지리",
            platforms: "📱 플랫폼 분포"
        },
        tableLabels: {
            leadScore: "⭐ 리드 스코어",
            bantAnalysis: "💼 BANT 분석",
            contactName: "👤 연락처 이름",
            contactPhone: "📞 전화",
            contactEmail: "📧 이메일",
            contactMessengers: "💬 메신저",
            contactCompany: "🏢 회사",
            sessionId: "🆔 세션 ID",
            ipAddress: "🌐 IP 주소",
            country: "🏳️ 국가",
            city: "🏙️ 도시",
            platform: "📱 플랫폼",
            configuration: "📋 구성",
            startTime: "🕐 시작 시간",
            duration: "⏱️ 기간",
            messages: "💬 메시지",
            satisfaction: "😊 만족도",
            crmStatus: "📊 CRM 상태",
            status: "🔵 상태",
            actions: "⚡ 작업"
        },
        actionButtonLabels: {
            viewDialog: "👁️ \"대화\" 버튼",
            analyze: "🔍 \"분석\" 버튼",
            viewAnalysis: "📊 \"결과\" 버튼",
            extractContacts: "📥 \"연락처 업데이트\" 버튼",
            deleteRecord: "🗑️ \"레코드 삭제\" 버튼"
        },
        highlights: {
            title: "⚡ 대화 하이라이트",
            enabled: "하이라이트 활성화",
            pricing: "💰 가격 논의",
            objection: "❌ 고객 이의",
            buyingSignal: "✅ 구매 신호"
        },
        configurations: {
            available: "📋 사용 가능한 구성"
        },
        platforms: {
            available: "📱 사용 가능한 플랫폼"
        },
        analysisLanguages: {
            title: "🌐 대화 분석 언어"
        },
        analysisLanguageSync: {
            title: "분석 언어 동기화",
    autoSync: "분석 언어를 인터페이스 언어와 자동 동기화",
    autoSyncHint: "활성화하면 인터페이스 언어가 변경될 때 대화 분석 언어가 자동으로 변경됩니다"
},
        resultLanguages: {
    title: "🌍 분석 결과 언어 선택"
},
        technical: {
            intervals: "⏱️ 간격 및 제한",
            refreshInterval: "자동 새로고침 간격 (ms):",
            itemsPerPage: "페이지당 항목:",
            apiSettings: "🔑 API 설정",
            webhookApiKey: "API 키:",
            webhookApiKeyPlaceholder: "웹훅 보호를 위한 API 키 입력",
            webhooks: "🔗 웹훅 URL",
            monitoringData: "모니터링 데이터:",
            dialogs: "대화:",
            analyzeDialog: "대화 분석:",
            autoAnalysisSettings: "자동 분석 설정:",
            cleanupSettings: "정리 설정:",
            updateCleanupSettings: "정리 설정 업데이트:",
            getAnalysis: "분석 가져오기:",
            getAllAnalysis: "모든 분석:",
            serverTime: "서버 시간:",
            extractContacts: "연락처 추출:",
            getContacts: "연락처 가져오기:",
            getAnalysisLanguage: "분석 언어 가져오기:",
            setAnalysisLanguage: "분석 언어 설정:",
            deleteSession: "세션 삭제:",
            deleteEmail: "이메일 레코드 삭제:",
            sendToCRM: "CRM으로 보내기:",
            crmStatus: "CRM 상태:",
            crmSettings: "CRM 설정:",
            updateCRMSettings: "CRM 설정 업데이트:",
            emailWebhooks: "📧 이메일 모니터링 웹훅 URL",
            emailData: "이메일 모니터링 데이터:",
            emailDialogs: "이메일 대화:",
            analyzeEmail: "이메일 대화 분석:",
            getEmailAnalysis: "이메일 분석 가져오기:",
            getAllEmailAnalysis: "모든 이메일 분석:",
            extractEmailContacts: "이메일 연락처 추출:",
            getEmailContacts: "이메일 연락처 데이터 가져오기:",
            authLoginEndpoint: "시스템 로그인 (인증):",
            authValidateEndpoint: "토큰 검증:"
        },
        crm: {
            mainSettings: "📊 주요 CRM 설정",
            enableIntegration: "CRM 시스템 통합 활성화",
            systemName: "CRM 시스템 이름:",
            systemNamePlaceholder: "예: Bitrix24, amoCRM 등",
            apiKey: "API 키:",
            apiKeyPlaceholder: "CRM API 키 입력",
            systemUrl: "CRM 시스템 URL:",
            systemUrlPlaceholder: "https://귀하의-crm.com",
            fieldMapping: "🔗 필드 매핑",
            fieldMappingDesc: "모니터링 시스템과 CRM 간의 필드 매핑 구성",
            nameField: "CRM의 \"이름\" 필드:",
            nameFieldPlaceholder: "name, first_name, contact_name 등",
            phoneField: "CRM의 \"전화\" 필드:",
            phoneFieldPlaceholder: "phone, phone_number, mobile 등",
            emailField: "CRM의 \"이메일\" 필드:",
            emailFieldPlaceholder: "email, email_address, mail 등",
            companyField: "CRM의 \"회사\" 필드:",
            companyFieldPlaceholder: "company, company_name, organization 등"
        },
        buttons: {
            save: "💾 변경 사항 저장",
            reset: "↩️ 변경 사항 재설정",
            export: "📤 구성 내보내기",
            restore: "📥 백업에서 복원",
            resetToDefaults: "🔄 기본값으로 재설정"
        },
        messages: {
            success: "✅ 설정이 성공적으로 저장되었습니다!",
            resetConfirm: "✅ 변경 사항이 재설정되었습니다",
            defaultsConfirm: "모든 설정을 기본값으로 재설정하시겠습니까? 이 작업은 취소할 수 없습니다.",
            noBackups: "사용 가능한 백업이 없습니다",
            selectBackup: "📥 복원할 백업 선택",
            cancel: "❌ 취소",
            restoreConfirm: "이 백업을 복원하시겠습니까? 현재 구성이 덮어쓰여집니다.",
            restoreSuccess: "✅ 구성이 성공적으로 복원되었습니다!",
            restoreError: "❌ 오류",
            saveError: "저장 오류",
            unknownError: "알 수 없는 오류",
            saveLocalPrompt: "서버에 저장하지 못했습니다. 구성 파일을 다운로드하시겠습니까?",
            reloadPrompt: "구성이 저장되었습니다! 변경 사항을 적용하기 위해 모니터링 페이지를 다시 로드하시겠습니까?"
        },
        branding: {
            title: "모니터링 시스템 브랜딩",
            subtitle: "모니터링 시스템에서 회사 로고와 이름을 사용자 정의",
            enabled: "브랜딩 활성화",
            enabledHint: "사용자 테이블 오른쪽 하단에 회사 로고와 이름 표시",
            mainSettings: "주요 설정",
            logoType: "로고 유형：",
            logoTypes: {
                svg: "SVG 코드",
                icon: "아이콘（이모지）",
                image: "이미지 URL"
            },
            logoTypeHint: "로고 표시 방법 선택",
            svgCode: "SVG 로고 코드：",
            svgCodeHint: "완전한 SVG 코드 붙여넣기（<svg>...</svg> 태그 포함）",
            iconEmoji: "아이콘（이모지）：",
            iconEmojiHint: "이모지 아이콘 입력",
            imageUrl: "이미지 URL：",
            imageUrlHint: "로고 이미지 링크",
            companyName: "회사 이름：",
            companyNameHint: "로고 옆에 표시됩니다",
            companyUrl: "회사 웹사이트 URL（선택사항）：",
            companyUrlHint: "지정하면 회사 이름이 클릭 가능한 링크가 됩니다",
            poweredByText: "\"Powered by\" 텍스트（선택사항）：",
            poweredByTextHint: "회사 이름 앞의 텍스트. 숨기려면 비워 두세요",
            sizesTitle: "크기",
            logoWidth: "로고 너비（px）：",
            logoHeight: "로고 높이（px）：",
            fontSize: "글꼴 크기（px）：",
            previewTitle: "미리보기",
            lightTheme: "라이트 테마",
            darkTheme: "다크 테마"
        }
    },
    ua: {
        title: "Налаштування конфігурації моніторингу",
        subtitle: "Візуальний редактор для налаштування системи моніторингу чатів",
        tabs: {
            general: "🌍 Основні",
            display: "👁️ Відображення",
            configurations: "📋 Конфігурації",
            platforms: "📱 Платформи",
            languages: "🌐 Мови аналізу",
            technical: "🔧 Технічні",
            crm: "📊 CRM Інтеграція",
            branding: "🏷️ Брендування"
        },
        general: {
            interfaceLanguage: "🌐 Мова інтерфейсу",
            theme: "🎨 Тема оформлення",
            selectTheme: "Виберіть тему:",
            lightTheme: "☀️ Світла",
            darkTheme: "🌙 Темна"
        },
        display: {
            filters: "🔍 Фільтри",
            statsCards: "📊 Картки статистики",
            charts: "📈 Графіки",
            tableColumns: "📋 Колонки таблиці",
            actionButtons: "⚡ Кнопки дій у таблиці",
            emailMonitoring: "📧 Email моніторинг",
            enableEmailTable: "Увімкнути таблицю Email користувачів"
        },
        filterLabels: {
            period: "📅 Період",
            configuration: "📋 Конфігурація",
            platform: "📱 Платформа",
            search: "🔍 Пошук",
            refreshButton: "🔄 Кнопка оновлення",
            analysisButtons: "🤖 Кнопки аналізу"
        },
        statsLabels: {
            totalUsers: "👥 Всього користувачів",
            activeSessions: "🟢 Активні сесії",
            avgSessionTime: "⏰ Середній час сесії",
            totalMessages: "📩 Всього повідомлень"
        },
        chartLabels: {
            activity: "📈 Активність за часом",
            geography: "🌍 Географія користувачів",
            platforms: "📱 Розподіл за платформами"
        },
        tableLabels: {
            leadScore: "⭐ Lead Score",
            bantAnalysis: "💼 BANT Аналіз",
            contactName: "👤 Ім'я контакту",
            contactPhone: "📞 Телефон",
            contactEmail: "📧 Email",
            contactMessengers: "💬 Месенджери",
            contactCompany: "🏢 Компанія",
            sessionId: "🆔 Session ID",
            ipAddress: "🌐 IP адреса",
            country: "🏳️ Країна",
            city: "🏙️ Місто",
            platform: "📱 Платформа",
            configuration: "📋 Конфігурація",
            startTime: "🕐 Час початку",
            duration: "⏱️ Тривалість",
            messages: "💬 Повідомлень",
            satisfaction: "😊 Задоволеність",
            crmStatus: "📊 CRM статус",
            status: "🔵 Статус",
            actions: "⚡ Дії"
        },
        actionButtonLabels: {
            viewDialog: "👁️ Кнопка \"Діалог\"",
            analyze: "🔍 Кнопка \"Аналіз\"",
            viewAnalysis: "📊 Кнопка \"Результат\"",
            extractContacts: "📥 Кнопка \"Оновити контакти\"",
            deleteRecord: "🗑️ Кнопка \"Видалити запис\""
        },
        highlights: {
            title: "⚡ Хайлайти розмов",
            enabled: "Увімкнути хайлайти",
            pricing: "💰 Обговорення ціни",
            objection: "❌ Заперечення клієнта",
            buyingSignal: "✅ Сигнал купівлі"
        },
        configurations: {
            available: "📋 Доступні конфігурації"
        },
        platforms: {
            available: "📱 Доступні платформи"
        },
        analysisLanguages: {
            title: "🌐 Мови для аналізу діалогів"
        },
        analysisLanguageSync: {
            title: "Синхронізація мови аналізу",
    autoSync: "Автоматично синхронізувати мову аналізу з мовою інтерфейсу",
    autoSyncHint: "При увімкненні мова аналізу діалогів буде автоматично змінюватися при зміні мови інтерфейсу"
},
        resultLanguages: {
    title: "🌍 Вибір мови результату аналізу діалогу"
},
        technical: {
            intervals: "⏱️ Інтервали та ліміти",
            refreshInterval: "Інтервал автооновлення (мс):",
            itemsPerPage: "Елементів на сторінці:",
            apiSettings: "🔑 API налаштування",
            webhookApiKey: "API ключ:",
            webhookApiKeyPlaceholder: "Введіть API ключ для захисту вебхуків",
            webhooks: "🔗 Адреси вебхуків",
            monitoringData: "Дані моніторингу:",
            dialogs: "Діалоги:",
            analyzeDialog: "Аналіз діалогів:",
            autoAnalysisSettings: "Налаштування автоаналізу:",
            cleanupSettings: "Налаштування очищення:",
            updateCleanupSettings: "Оновлення налаштувань очищення:",
            getAnalysis: "Отримання аналізу:",
            getAllAnalysis: "Всі аналізи:",
            serverTime: "Час сервера:",
            extractContacts: "Витяг контактів:",
            getContacts: "Отримання контактів:",
            getAnalysisLanguage: "Отримання мови аналізу:",
            setAnalysisLanguage: "Встановлення мови аналізу:",
            deleteSession: "Видалення сесії:",
            deleteEmail: "Видалення email запису:",
            sendToCRM: "Відправка в CRM:",
            crmStatus: "Статус CRM:",
            crmSettings: "Налаштування CRM:",
            updateCRMSettings: "Оновлення налаштувань CRM:",
            emailWebhooks: "📧 Адреси вебхуків для Email моніторингу",
            emailData: "Дані Email моніторингу:",
            emailDialogs: "Email діалоги:",
            analyzeEmail: "Аналіз Email діалогу:",
            getEmailAnalysis: "Отримання Email аналізу:",
            getAllEmailAnalysis: "Всі Email аналізи:",
            extractEmailContacts: "Витяг Email контактів:",
            getEmailContacts: "Отримання даних Email контактів:",
            authLoginEndpoint: "Вхід у систему (автентифікація):",
            authValidateEndpoint: "Перевірка токена (валідація):"
        },
        crm: {
            mainSettings: "📊 Основні налаштування CRM",
            enableIntegration: "Увімкнути інтеграцію з CRM системою",
            systemName: "Назва CRM системи:",
            systemNamePlaceholder: "Наприклад: Bitrix24, amoCRM тощо",
            apiKey: "API ключ:",
            apiKeyPlaceholder: "Введіть API ключ вашої CRM",
            systemUrl: "URL CRM системи:",
            systemUrlPlaceholder: "https://ваша-crm.com",
            fieldMapping: "🔗 Відповідність полів",
            fieldMappingDesc: "Налаштуйте відповідність полів між системою моніторингу та вашою CRM",
            nameField: "Поле \"Ім'я\" в CRM:",
            nameFieldPlaceholder: "name, first_name, contact_name тощо",
            phoneField: "Поле \"Телефон\" в CRM:",
            phoneFieldPlaceholder: "phone, phone_number, mobile тощо",
            emailField: "Поле \"Email\" в CRM:",
            emailFieldPlaceholder: "email, email_address, mail тощо",
            companyField: "Поле \"Компанія\" в CRM:",
            companyFieldPlaceholder: "company, company_name, organization тощо"
        },
        buttons: {
            save: "💾 Зберегти зміни",
            reset: "↩️ Скинути зміни",
            export: "📤 Експортувати конфігурацію",
            restore: "📥 Відновити з резерву",
            resetToDefaults: "🔄 Скинути на заводські"
        },
        messages: {
            success: "✅ Налаштування успішно збережені!",
            resetConfirm: "✅ Зміни скинуті",
            defaultsConfirm: "Ви впевнені, що хочете скинути всі налаштування на заводські? Цю дію не можна відмінити.",
            noBackups: "Немає доступних резервних копій",
            selectBackup: "📥 Виберіть резервну копію для відновлення",
            cancel: "❌ Скасувати",
            restoreConfirm: "Ви впевнені, що хочете відновити цю резервну копію? Поточна конфігурація буде перезаписана.",
            restoreSuccess: "✅ Конфігурацію успішно відновлено!",
            restoreError: "❌ Помилка",
            saveError: "Помилка збереження",
            unknownError: "Невідома помилка",
            saveLocalPrompt: "Не вдалося зберегти на сервер. Завантажити файл конфігурації?",
            reloadPrompt: "Конфігурацію збережено! Перезавантажити сторінку моніторингу для застосування змін?"
        },
        branding: {
            title: "Брендування системи моніторингу",
            subtitle: "Налаштуйте логотип та назву вашої компанії в системі моніторингу",
            enabled: "Увімкнути брендування",
            enabledHint: "Показувати логотип та назву компанії в правому нижньому куті таблиці користувачів",
            mainSettings: "Основні налаштування",
            logoType: "Тип логотипу:",
            logoTypes: {
                svg: "SVG код",
                icon: "Іконка (emoji)",
                image: "URL зображення"
            },
            logoTypeHint: "Виберіть як відображати логотип",
            svgCode: "SVG код логотипу:",
            svgCodeHint: "Вставте повний SVG код (включаючи теги <svg>...</svg>)",
            iconEmoji: "Іконка (emoji):",
            iconEmojiHint: "Введіть emoji іконку",
            imageUrl: "URL зображення:",
            imageUrlHint: "Посилання на зображення логотипу",
            companyName: "Назва компанії:",
            companyNameHint: "Буде відображатися поруч з логотипом",
            companyUrl: "Посилання на сайт компанії (опціонально):",
            companyUrlHint: "Якщо вказано, назва компанії стане клікабельним посиланням",
            poweredByText: "Текст \"Powered by\" (опціонально):",
            poweredByTextHint: "Текст перед назвою компанії. Залиште порожнім, щоб не відображати",
            sizesTitle: "Розміри",
            logoWidth: "Ширина логотипу (px):",
            logoHeight: "Висота логотипу (px):",
            fontSize: "Розмір шрифту (px):",
            previewTitle: "Попередній перегляд",
            lightTheme: "Світла тема",
            darkTheme: "Темна тема"
        }
    }
};

// Текущий язык страницы
let currentPageLanguage = localStorage.getItem('configEditorLanguage') || 'ru';

// Функция получения перевода
function t(path) {
    const lang = currentPageLanguage;
    const translations = ConfigEditorTranslations[lang] || ConfigEditorTranslations.ru;
    const keys = path.split('.');
    let result = translations;
    for (const key of keys) {
        result = result?.[key];
        if (!result) return ConfigEditorTranslations.ru[keys[0]]?.[keys[1]] || path;
    }
    return result;
}

// Функция обновления всех текстов на странице
function updatePageLanguage() {
    // Обновляем заголовок страницы
    document.title = t('title');
    
    // Обновляем заголовок и подзаголовок
    const header = document.querySelector('.header h1');
    if (header) header.textContent = '⚙️ ' + t('title');
    
    const subtitle = document.querySelector('.header p');
    if (subtitle) subtitle.textContent = t('subtitle');
    
    // Обновляем вкладки
    const tabs = document.querySelectorAll('.tab');
    const tabNames = ['general', 'display', 'configurations', 'platforms', 'languages', 'technical', 'crm', 'branding'];
    tabs.forEach((tab, index) => {
        if (tabNames[index]) {
            tab.textContent = t(`tabs.${tabNames[index]}`);
        }
    });
    
    // Обновляем ВСЕ заголовки секций h2
    document.querySelectorAll('.section h2, .collapsible-header h2').forEach(header => {
        const parent = header.closest('.section') || header.closest('.collapsible-section');
        if (!parent) return;
        
        // Определяем секцию по ID или классу
        if (parent.querySelector('#languageSelect')) {
            header.innerHTML = t('general.interfaceLanguage');
        } else if (parent.querySelector('#themeMode')) {
            header.innerHTML = t('general.theme');
        } else if (parent.querySelector('#filterToggles')) {
            header.innerHTML = t('display.filters');
        } else if (parent.querySelector('#statsToggles')) {
            header.innerHTML = t('display.statsCards');
        } else if (parent.querySelector('#chartsToggles')) {
            header.innerHTML = t('display.charts');
        } else if (parent.querySelector('#tableToggles')) {
            header.innerHTML = t('display.tableColumns');
        } else if (parent.querySelector('#actionButtonsToggles')) {
            header.innerHTML = t('display.actionButtons');
        } else if (parent.querySelector('#highlightsToggles')) {
            header.innerHTML = t('highlights.title');
        } else if (parent.querySelector('#emailMonitoringToggle')) {
            header.innerHTML = t('display.emailMonitoring');
        } else if (parent.querySelector('#configurationToggles')) {
            header.innerHTML = t('configurations.available');
        } else if (parent.querySelector('#platformToggles')) {
            header.innerHTML = t('platforms.available');
        } else if (parent.querySelector('#analysisLanguageToggles')) {
            header.innerHTML = t('analysisLanguages.title');
        } else if (parent.querySelector('#resultLanguageToggles')) {
            header.innerHTML = t('resultLanguages.title');
        } else if (parent.querySelector('#refreshInterval')) {
            header.innerHTML = t('technical.intervals');
        } else if (parent.querySelector('#webhookApiKey')) {
            header.innerHTML = t('technical.apiSettings');
        } else if (parent.querySelector('#dataEndpoint')) {
            header.innerHTML = t('technical.webhooks');
        } else if (parent.querySelector('#emailDataEndpoint')) {
            header.innerHTML = t('technical.emailWebhooks');
        } else if (parent.querySelector('#crmEnabled')) {
            header.innerHTML = t('crm.mainSettings');
        } else if (parent.querySelector('#crmFieldName')) {
            header.innerHTML = t('crm.fieldMapping');
        }
    });
    
    // Обновляем ВСЕ лейблы форм
    document.querySelectorAll('.form-group label').forEach(label => {
        // Пропускаем чекбоксы, они обрабатываются отдельно
        if (label.querySelector('input[type="checkbox"]')) return;
        
        const input = label.parentElement.querySelector('input, select');
        if (!input) return;
        
        // Определяем по ID элемента
        if (input.id === 'themeMode') {
            label.textContent = t('general.selectTheme');
        } else if (input.id === 'refreshInterval') {
            label.textContent = t('technical.refreshInterval');
        } else if (input.id === 'itemsPerPage') {
            label.textContent = t('technical.itemsPerPage');
        } else if (input.id === 'webhookApiKey') {
            label.textContent = t('technical.webhookApiKey');
            input.placeholder = t('technical.webhookApiKeyPlaceholder');
        } else if (input.id === 'dataEndpoint') {
            label.textContent = t('technical.monitoringData');
        } else if (input.id === 'dialogsEndpoint') {
            label.textContent = t('technical.dialogs');
        } else if (input.id === 'analyzeEndpoint') {
            label.textContent = t('technical.analyzeDialog');
        } else if (input.id === 'autoAnalysisSettingsEndpoint') {
            label.textContent = t('technical.autoAnalysisSettings');
        } else if (input.id === 'cleanupSettingsEndpoint') {
            label.textContent = t('technical.cleanupSettings');
        } else if (input.id === 'updateCleanupSettingsEndpoint') {
            label.textContent = t('technical.updateCleanupSettings');
        } else if (input.id === 'getAnalysisEndpoint') {
            label.textContent = t('technical.getAnalysis');
        } else if (input.id === 'getAllAnalysisEndpoint') {
            label.textContent = t('technical.getAllAnalysis');
        } else if (input.id === 'serverTimeEndpoint') {
            label.textContent = t('technical.serverTime');
        } else if (input.id === 'extractContactsEndpoint') {
            label.textContent = t('technical.extractContacts');
        } else if (input.id === 'getContactsEndpoint') {
            label.textContent = t('technical.getContacts');
        } else if (input.id === 'getAnalysisLanguageEndpoint') {
            label.textContent = t('technical.getAnalysisLanguage');
        } else if (input.id === 'setAnalysisLanguageEndpoint') {
            label.textContent = t('technical.setAnalysisLanguage');
        } else if (input.id === 'deleteSessionEndpoint') {
            label.textContent = t('technical.deleteSession');
        } else if (input.id === 'deleteEmailEndpoint') {
            label.textContent = t('technical.deleteEmail');
        } else if (input.id === 'authLoginEndpoint') {
    label.textContent = t('technical.authLoginEndpoint');
} else if (input.id === 'authValidateEndpoint') {
    label.textContent = t('technical.authValidateEndpoint');
        } else if (input.id === 'sendToCRMEndpoint') {
            label.textContent = t('technical.sendToCRM');
        } else if (input.id === 'crmStatusEndpoint') {
            label.textContent = t('technical.crmStatus');
        } else if (input.id === 'crmSettingsEndpoint') {
            label.textContent = t('technical.crmSettings');
        } else if (input.id === 'updateCRMSettingsEndpoint') {
            label.textContent = t('technical.updateCRMSettings');
        } else if (input.id === 'emailDataEndpoint') {
            label.textContent = t('technical.emailData');
        } else if (input.id === 'emailDialogsEndpoint') {
            label.textContent = t('technical.emailDialogs');
        } else if (input.id === 'analyzeEmailEndpoint') {
            label.textContent = t('technical.analyzeEmail');
        } else if (input.id === 'getEmailAnalysisEndpoint') {
            label.textContent = t('technical.getEmailAnalysis');
        } else if (input.id === 'getAllEmailAnalysisEndpoint') {
            label.textContent = t('technical.getAllEmailAnalysis');
        } else if (input.id === 'extractEmailContactsEndpoint') {
            label.textContent = t('technical.extractEmailContacts');
        } else if (input.id === 'getEmailContactsEndpoint') {
            label.textContent = t('technical.getEmailContacts');
        } else if (input.id === 'crmSystemName') {
            label.textContent = t('crm.systemName');
        } else if (input.id === 'crmApiKey') {
            label.textContent = t('crm.apiKey');
        } else if (input.id === 'crmSystemUrl') {
            label.textContent = t('crm.systemUrl');
        } else if (input.id === 'crmFieldName') {
            label.textContent = t('crm.nameField');
        } else if (input.id === 'crmFieldPhone') {
            label.textContent = t('crm.phoneField');
        } else if (input.id === 'crmFieldEmail') {
            label.textContent = t('crm.emailField');
        } else if (input.id === 'crmFieldCompany') {
            label.textContent = t('crm.companyField');
        }
    });
    
    // Обновляем опции выбора темы
    const themeSelect = document.getElementById('themeMode');
    if (themeSelect) {
        themeSelect.options[0].text = t('general.lightTheme');
        themeSelect.options[1].text = t('general.darkTheme');
    }
    
    // Обновляем placeholder'ы
    document.querySelectorAll('input[placeholder]').forEach(input => {
        if (input.id === 'crmSystemName') {
            input.placeholder = t('crm.systemNamePlaceholder');
        } else if (input.id === 'crmApiKey') {
            input.placeholder = t('crm.apiKeyPlaceholder');
        } else if (input.id === 'crmSystemUrl') {
            input.placeholder = t('crm.systemUrlPlaceholder');
        } else if (input.id === 'crmFieldName') {
            input.placeholder = t('crm.nameFieldPlaceholder');
        } else if (input.id === 'crmFieldPhone') {
            input.placeholder = t('crm.phoneFieldPlaceholder');
        } else if (input.id === 'crmFieldEmail') {
            input.placeholder = t('crm.emailFieldPlaceholder');
        } else if (input.id === 'crmFieldCompany') {
            input.placeholder = t('crm.companyFieldPlaceholder');
        }
    });
    
    // Обновляем кнопки
    const saveBtn = document.querySelector('.btn-primary');
    if (saveBtn) saveBtn.innerHTML = t('buttons.save');
    
    const buttons = document.querySelectorAll('.btn-secondary');
    if (buttons[0]) buttons[0].innerHTML = t('buttons.reset');
    if (buttons[1]) buttons[1].innerHTML = t('buttons.export');
    if (buttons[2]) buttons[2].innerHTML = t('buttons.restore');
    
    const resetBtn = document.querySelector('.btn-danger');
    if (resetBtn) resetBtn.innerHTML = t('buttons.resetToDefaults');
    
    // Обновляем сообщение об успехе
    const successMsg = document.getElementById('successMessage');
    if (successMsg) successMsg.textContent = t('messages.success');
    
    // Обновляем текст переключателя Email
    const emailToggleLabel = document.querySelector('#emailMonitoringToggle')?.closest('.toggle-item')?.querySelector('.toggle-label');
    if (emailToggleLabel) {
        emailToggleLabel.textContent = t('display.enableEmailTable');
    }
    
    // Обновляем секцию синхронизации языка анализа
const syncSection = document.querySelector('#analysisLanguageSyncToggle')?.closest('.collapsible-section');
if (syncSection) {
    const syncHeader = syncSection.querySelector('.collapsible-header h2');
    if (syncHeader && typeof t !== 'undefined') {
        syncHeader.innerHTML = '🔄 ' + (t('analysisLanguageSync.title') || 'Синхронизация языка анализа');
    }
    
    const syncLabel = syncSection.querySelector('.toggle-label');
    if (syncLabel && typeof t !== 'undefined') {
        syncLabel.textContent = t('analysisLanguageSync.autoSync');
    }
    
    const syncHint = document.getElementById('analysisLanguageSyncHint');
    if (syncHint && typeof t !== 'undefined') {
        syncHint.textContent = t('analysisLanguageSync.autoSyncHint');
    }
}
    
    // Обновляем описание CRM
    const crmDesc = document.querySelector('#crmMappingSection p');
    if (crmDesc) {
        crmDesc.textContent = t('crm.fieldMappingDesc');
    }

    // Обновляем чекбоксы
    const crmEnableLabel = document.querySelector('#crmEnabled')?.parentElement?.querySelector('span');
    if (crmEnableLabel) {
        crmEnableLabel.textContent = t('crm.enableIntegration');
    }

    // Обновляем чекбокс и надписи для Highlights
    const highlightsEnabledLabel = document.querySelector('#highlightsEnabled')?.parentElement?.querySelector('span');
    if (highlightsEnabledLabel) {
        highlightsEnabledLabel.textContent = t('highlights.enabled');
    }

    // Обновляем секцию брендинга
    const brandingTab = document.querySelector('#branding-tab');
    if (brandingTab) {
        // Заголовок секции
        const brandingTitle = brandingTab.querySelector('.section h2');
        if (brandingTitle) {
            brandingTitle.innerHTML = '🏷️ ' + t('branding.title');
        }

        // Описание секции
        const brandingSubtitle = brandingTab.querySelector('.section > p');
        if (brandingSubtitle) {
            brandingSubtitle.textContent = t('branding.subtitle');
        }

        // Чекбокс "Включить брендирование"
        const brandingEnabledLabel = document.querySelector('#brandingEnabled')?.parentElement?.querySelector('span');
        if (brandingEnabledLabel) {
            brandingEnabledLabel.textContent = t('branding.enabled');
        }

        // Подсказка для чекбокса
        const brandingEnabledHint = document.querySelector('#brandingEnabled')?.parentElement?.parentElement?.querySelector('small');
        if (brandingEnabledHint) {
            brandingEnabledHint.textContent = t('branding.enabledHint');
        }

        // Заголовок "Основные настройки"
        const mainSettingsTitle = brandingTab.querySelector('#brandingSettingsContent h3');
        if (mainSettingsTitle) {
            mainSettingsTitle.innerHTML = '🎨 ' + t('branding.mainSettings');
        }

        // Лейблы полей
        const brandingLogoTypeLabel = document.querySelector('#brandingLogoType')?.parentElement?.querySelector('label');
        if (brandingLogoTypeLabel) {
            brandingLogoTypeLabel.textContent = t('branding.logoType');
        }

        // Опции выбора типа логотипа
        const logoTypeSelect = document.getElementById('brandingLogoType');
        if (logoTypeSelect) {
            logoTypeSelect.options[0].text = t('branding.logoTypes.svg');
            logoTypeSelect.options[1].text = t('branding.logoTypes.icon');
            logoTypeSelect.options[2].text = t('branding.logoTypes.image');
        }

        // Подсказка для типа логотипа
        const logoTypeHint = document.querySelector('#brandingLogoType')?.parentElement?.querySelector('small');
        if (logoTypeHint) {
            logoTypeHint.textContent = t('branding.logoTypeHint');
        }

        // SVG код
        const svgCodeLabel = document.querySelector('#brandingLogoSvg')?.parentElement?.querySelector('label');
        if (svgCodeLabel) {
            svgCodeLabel.textContent = t('branding.svgCode');
        }
        const svgCodeHint = document.querySelector('#brandingLogoSvg')?.parentElement?.querySelector('small');
        if (svgCodeHint) {
            svgCodeHint.textContent = t('branding.svgCodeHint');
        }

        // Иконка
        const iconLabel = document.querySelector('#brandingIcon')?.parentElement?.querySelector('label');
        if (iconLabel) {
            iconLabel.textContent = t('branding.iconEmoji');
        }
        const iconHint = document.querySelector('#brandingIcon')?.parentElement?.querySelector('small');
        if (iconHint) {
            iconHint.textContent = t('branding.iconEmojiHint');
        }

        // URL изображения
        const imageUrlLabel = document.querySelector('#brandingImageUrl')?.parentElement?.querySelector('label');
        if (imageUrlLabel) {
            imageUrlLabel.textContent = t('branding.imageUrl');
        }
        const imageUrlHint = document.querySelector('#brandingImageUrl')?.parentElement?.querySelector('small');
        if (imageUrlHint) {
            imageUrlHint.textContent = t('branding.imageUrlHint');
        }

        // Название компании
        const companyNameLabel = document.querySelector('#brandingCompanyName')?.parentElement?.querySelector('label');
        if (companyNameLabel) {
            companyNameLabel.textContent = t('branding.companyName');
        }
        const companyNameHint = document.querySelector('#brandingCompanyName')?.parentElement?.querySelector('small');
        if (companyNameHint) {
            companyNameHint.textContent = t('branding.companyNameHint');
        }

        // Ссылка на сайт компании
        const companyUrlLabel = document.querySelector('#brandingCompanyUrl')?.parentElement?.querySelector('label');
        if (companyUrlLabel) {
            companyUrlLabel.textContent = t('branding.companyUrl');
        }
        const companyUrlHint = document.querySelector('#brandingCompanyUrl')?.parentElement?.querySelector('small');
        if (companyUrlHint) {
            companyUrlHint.textContent = t('branding.companyUrlHint');
        }

        // Текст "Powered by"
        const poweredByLabel = document.querySelector('#brandingPoweredByText')?.parentElement?.querySelector('label');
        if (poweredByLabel) {
            poweredByLabel.textContent = t('branding.poweredByText');
        }
        const poweredByHint = document.querySelector('#brandingPoweredByText')?.parentElement?.querySelector('small');
        if (poweredByHint) {
            poweredByHint.textContent = t('branding.poweredByTextHint');
        }

        // Заголовок "Размеры"
        const sizesTitle = brandingTab.querySelectorAll('#brandingSettingsContent h3')[1];
        if (sizesTitle) {
            sizesTitle.innerHTML = '📐 ' + t('branding.sizesTitle');
        }

        // Ширина логотипа
        const logoWidthLabel = document.querySelector('#brandingLogoWidth')?.parentElement?.querySelector('label');
        if (logoWidthLabel) {
            logoWidthLabel.textContent = t('branding.logoWidth');
        }

        // Высота логотипа
        const logoHeightLabel = document.querySelector('#brandingLogoHeight')?.parentElement?.querySelector('label');
        if (logoHeightLabel) {
            logoHeightLabel.textContent = t('branding.logoHeight');
        }

        // Размер шрифта
        const fontSizeLabel = document.querySelector('#brandingFontSize')?.parentElement?.querySelector('label');
        if (fontSizeLabel) {
            fontSizeLabel.textContent = t('branding.fontSize');
        }

        // Заголовок "Превью"
        const previewTitle = brandingTab.querySelectorAll('#brandingSettingsContent h3')[2];
        if (previewTitle) {
            previewTitle.innerHTML = '👁️ ' + t('branding.previewTitle');
        }

        // Текст "Светлая тема"
        const lightThemeText = document.querySelector('#brandingPreviewLight')?.previousElementSibling;
        if (lightThemeText && lightThemeText.textContent.includes('Светлая') || lightThemeText && lightThemeText.textContent.includes('Light')) {
            lightThemeText.textContent = t('branding.lightTheme');
        }

        // Текст "Темная тема"
        const darkThemeText = document.querySelector('#brandingPreviewDark')?.previousElementSibling;
        if (darkThemeText && darkThemeText.textContent.includes('Темная') || darkThemeText && darkThemeText.textContent.includes('Dark')) {
            darkThemeText.textContent = t('branding.darkTheme');
        }
    }

    // Перезагружаем все toggle списки с новыми переводами
    if (currentConfig && currentConfig.display) {
        // Вызываем loadCurrentConfiguration для обновления всех toggles
        loadCurrentConfiguration();
    }
}
            
// Проверяем загрузку конфигурации
if (typeof MonitoringConfig === 'undefined') {
    // Создаем минимальную конфигурацию для работы
    window.MonitoringConfig = {
        language: 'ru',
        theme: { mode: 'light' },
        display: {
            filters: {
                period: true,
                configuration: true,
                platform: true,
                search: true,
                refreshButton: true,
                analysisButtons: true
            },
            statsCards: {
                totalUsers: true,
                activeSessions: true,
                avgSessionTime: true,
                totalMessages: true
            },
            charts: {
                activity: true,
                geography: true,
                platforms: true
            },
            tableColumns: {
                leadScore: true,
                contactName: true,
                contactPhone: true,
                contactEmail: true,
                contactMessengers: true,
                contactCompany: false,
                sessionId: true,
                ipAddress: true,
                country: true,
                city: true,
                platform: true,
                configuration: true,
                startTime: true,
                duration: true,
                messages: true,
                satisfaction: true,
                crmStatus: false,
                status: true,
                actions: true,
                actionButtons: {
                    viewDialog: true,
                    analyze: false,
                    viewAnalysis: true,
                    extractContacts: true
                }
            }
        },
        crmIntegration: {
            enabled: false
        },
        "emailMonitoring": {
        "enabled": true
    },
        availableConfigurations: {
            financeConfig: { enabled: true, order: 1, icon: '💰', labels: { ru: 'Финансы' } },
            ecommerceConfig: { enabled: true, order: 2, icon: '🛒', labels: { ru: 'Магазин' } },
            techConfig: { enabled: true, order: 3, icon: '🤖', labels: { ru: 'Поддержка' } }
        },
        availablePlatforms: {
            webchat: { enabled: true, order: 1, icon: '💬', labels: { ru: 'WebChat' } },
            telegram: { enabled: true, order: 2, icon: '✈️', labels: { ru: 'Telegram' } }
        },
        availableAnalysisLanguages: {
            ru: { enabled: true, order: 1, flag: '🇷🇺', labels: { ru: 'Русский' } },
            en: { enabled: true, order: 2, flag: '🇬🇧', labels: { ru: 'Английский' } }
        },
        technical: {
            refreshInterval: 30000,
            itemsPerPage: 20,
            dataEndpoint: 'https://n8n.cryptomator.pro/webhook/chat-monitoring-data',
            dialogsEndpoint: 'https://n8n.cryptomator.pro/webhook/chat-dialogs',
            analyzeEndpoint: 'https://n8n.cryptomator.pro/webhook/analyze-dialog',
            autoAnalysisSettingsEndpoint: 'https://n8n.cryptomator.pro/webhook/auto-analysis-settings',
            cleanupSettingsEndpoint: 'https://n8n.cryptomator.pro/webhook/cleanup-settings',
            updateCleanupSettingsEndpoint: 'https://n8n.cryptomator.pro/webhook/update-cleanup-settings',
            getAnalysisEndpoint: 'https://n8n.cryptomator.pro/webhook/get-analysis',
            getAllAnalysisEndpoint: 'https://n8n.cryptomator.pro/webhook/get-all-analysis',
            serverTimeEndpoint: 'https://n8n.cryptomator.pro/webhook/server-time',
            extractContactsEndpoint: 'https://n8n.cryptomator.pro/webhook/extract-contact-data',
            getContactsEndpoint: 'https://n8n.cryptomator.pro/webhook/get-contact-data',
            sendToCRMEndpoint: 'https://n8n.cryptomator.pro/webhook/send-to-crm',
            getCRMStatusEndpoint: 'https://n8n.cryptomator.pro/webhook/crm-status',
            crmSettingsEndpoint: 'https://n8n.cryptomator.pro/webhook/crm-settings',
            updateCRMSettingsEndpoint: 'https://n8n.cryptomator.pro/webhook/update-crm-settings'
        }
    };
}

// Функции брендирования (определены до использования)
window.updateBrandingTypeFields = function() {
    const logoType = document.getElementById('brandingLogoType').value;
    const svgField = document.getElementById('brandingSvgField');
    const iconField = document.getElementById('brandingIconField');
    const imageField = document.getElementById('brandingImageField');

    // Скрываем все поля
    svgField.style.display = 'none';
    iconField.style.display = 'none';
    imageField.style.display = 'none';

    // Показываем нужное поле
    if (logoType === 'svg') {
        svgField.style.display = 'block';
    } else if (logoType === 'icon') {
        iconField.style.display = 'block';
    } else if (logoType === 'image') {
        imageField.style.display = 'block';
    }
}

window.updateBrandingPreview = function() {
    const enabled = document.getElementById('brandingEnabled')?.checked || false;
    const logoType = document.getElementById('brandingLogoType')?.value || 'svg';
    const logoSvg = document.getElementById('brandingLogoSvg')?.value || '';
    const icon = document.getElementById('brandingIcon')?.value || '🤖';
    const imageUrl = document.getElementById('brandingImageUrl')?.value || '';
    const companyName = document.getElementById('brandingCompanyName')?.value || 'NexusMindAI';
    const companyUrl = (document.getElementById('brandingCompanyUrl')?.value || '').trim();
    const poweredByText = (document.getElementById('brandingPoweredByText')?.value || '').trim();
    const logoWidth = document.getElementById('brandingLogoWidth')?.value || 32;
    const logoHeight = document.getElementById('brandingLogoHeight')?.value || 32;
    const fontSize = document.getElementById('brandingFontSize')?.value || 12;

    const previewLight = document.getElementById('brandingPreviewLight');
    const previewDark = document.getElementById('brandingPreviewDark');

    if (!enabled || !previewLight || !previewDark) {
        if (previewLight) previewLight.innerHTML = '<div style="text-align: center; color: #9ca3af;">Брендирование отключено</div>';
        if (previewDark) previewDark.innerHTML = '<div style="text-align: center; color: #6b7280;">Брендирование отключено</div>';
        return;
    }

    // Создаем HTML для логотипа
    let logoHtml = '';
    if (logoType === 'svg' && logoSvg) {
        // Обернем SVG в контейнер с overflow: hidden для предотвращения наложения
        logoHtml = `<div style="width: ${logoWidth}px; height: ${logoHeight}px; flex-shrink: 0; overflow: hidden; display: flex; align-items: center; justify-content: center;"><div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">${logoSvg}</div></div>`;
    } else if (logoType === 'icon' && icon) {
        logoHtml = `<div style="font-size: ${logoHeight}px; line-height: 1; flex-shrink: 0;">${icon}</div>`;
    } else if (logoType === 'image' && imageUrl) {
        logoHtml = `<img src="${imageUrl}" style="width: ${logoWidth}px; height: ${logoHeight}px; object-fit: contain; flex-shrink: 0;" />`;
    }

    // Генерируем HTML для названия компании (с ссылкой или без)
    const companyNameLightHTML = companyUrl ?
        `<a href="${companyUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #1f2937; font-weight: 600;">${companyName}</a>` :
        `<div style="color: #1f2937; font-weight: 600;">${companyName}</div>`;

    const companyNameDarkHTML = companyUrl ?
        `<a href="${companyUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #f3f4f6; font-weight: 600;">${companyName}</a>` :
        `<div style="color: #f3f4f6; font-weight: 600;">${companyName}</div>`;

    // Светлая тема
    const lightHtml = `
        <div style="display: flex; align-items: center; gap: 8px; font-size: ${fontSize}px;">
            ${logoHtml}
            <div style="display: flex; flex-direction: column; gap: 2px;">
                ${poweredByText ? `<div style="color: #6b7280; font-size: ${fontSize - 2}px;">${poweredByText}</div>` : ''}
                ${companyNameLightHTML}
            </div>
        </div>
    `;

    // Темная тема
    const darkHtml = `
        <div style="display: flex; align-items: center; gap: 8px; font-size: ${fontSize}px;">
            ${logoHtml}
            <div style="display: flex; flex-direction: column; gap: 2px;">
                ${poweredByText ? `<div style="color: #9ca3af; font-size: ${fontSize - 2}px;">${poweredByText}</div>` : ''}
                ${companyNameDarkHTML}
            </div>
        </div>
    `;

    previewLight.innerHTML = lightHtml;
    previewDark.innerHTML = darkHtml;
}

window.loadBrandingSettings = function() {
    if (!currentConfig.branding) {
        currentConfig.branding = {
            enabled: true,
            logoType: 'svg',
            logoSvg: '',
            icon: '🤖',
            imageUrl: '',
            companyName: 'NexusMindAI',
            companyUrl: '',
            poweredByText: '',
            size: {
                logoWidth: 32,
                logoHeight: 32,
                fontSize: 12
            }
        };
    }

    const branding = currentConfig.branding;

    // Загружаем значения в поля
    const brandingEnabled = document.getElementById('brandingEnabled');
    if (brandingEnabled) brandingEnabled.checked = branding.enabled || false;

    const brandingLogoType = document.getElementById('brandingLogoType');
    if (brandingLogoType) brandingLogoType.value = branding.logoType || 'svg';

    const brandingLogoSvg = document.getElementById('brandingLogoSvg');
    if (brandingLogoSvg) brandingLogoSvg.value = branding.logoSvg || '';

    const brandingIcon = document.getElementById('brandingIcon');
    if (brandingIcon) brandingIcon.value = branding.icon || '🤖';

    const brandingImageUrl = document.getElementById('brandingImageUrl');
    if (brandingImageUrl) brandingImageUrl.value = branding.imageUrl || '';

    const brandingCompanyName = document.getElementById('brandingCompanyName');
    if (brandingCompanyName) brandingCompanyName.value = branding.companyName || 'NexusMindAI';

    const brandingCompanyUrl = document.getElementById('brandingCompanyUrl');
    if (brandingCompanyUrl) brandingCompanyUrl.value = branding.companyUrl || '';

    const brandingPoweredByText = document.getElementById('brandingPoweredByText');
    if (brandingPoweredByText) brandingPoweredByText.value = branding.poweredByText || '';

    if (branding.size) {
        const brandingLogoWidth = document.getElementById('brandingLogoWidth');
        if (brandingLogoWidth) brandingLogoWidth.value = branding.size.logoWidth || 32;

        const brandingLogoHeight = document.getElementById('brandingLogoHeight');
        if (brandingLogoHeight) brandingLogoHeight.value = branding.size.logoHeight || 32;

        const brandingFontSize = document.getElementById('brandingFontSize');
        if (brandingFontSize) brandingFontSize.value = branding.size.fontSize || 12;
    }

    // Обновляем отображение полей и превью
    updateBrandingTypeFields();
    updateBrandingPreview();
}

window.saveBrandingSettings = function() {
    if (!currentConfig.branding) {
        currentConfig.branding = {};
    }

    const brandingEnabled = document.getElementById('brandingEnabled');
    if (brandingEnabled) currentConfig.branding.enabled = brandingEnabled.checked;

    const brandingLogoType = document.getElementById('brandingLogoType');
    if (brandingLogoType) currentConfig.branding.logoType = brandingLogoType.value;

    const brandingLogoSvg = document.getElementById('brandingLogoSvg');
    if (brandingLogoSvg) currentConfig.branding.logoSvg = brandingLogoSvg.value;

    const brandingIcon = document.getElementById('brandingIcon');
    if (brandingIcon) currentConfig.branding.icon = brandingIcon.value;

    const brandingImageUrl = document.getElementById('brandingImageUrl');
    if (brandingImageUrl) currentConfig.branding.imageUrl = brandingImageUrl.value;

    const brandingCompanyName = document.getElementById('brandingCompanyName');
    if (brandingCompanyName) currentConfig.branding.companyName = brandingCompanyName.value;

    const brandingCompanyUrl = document.getElementById('brandingCompanyUrl');
    if (brandingCompanyUrl) currentConfig.branding.companyUrl = brandingCompanyUrl.value;

    const brandingPoweredByText = document.getElementById('brandingPoweredByText');
    if (brandingPoweredByText) currentConfig.branding.poweredByText = brandingPoweredByText.value;

    if (!currentConfig.branding.size) {
        currentConfig.branding.size = {};
    }

    const brandingLogoWidth = document.getElementById('brandingLogoWidth');
    if (brandingLogoWidth) currentConfig.branding.size.logoWidth = parseInt(brandingLogoWidth.value) || 32;

    const brandingLogoHeight = document.getElementById('brandingLogoHeight');
    if (brandingLogoHeight) currentConfig.branding.size.logoHeight = parseInt(brandingLogoHeight.value) || 32;

    const brandingFontSize = document.getElementById('brandingFontSize');
    if (brandingFontSize) currentConfig.branding.size.fontSize = parseInt(brandingFontSize.value) || 12;
}

// Текущая конфигурация
let currentConfig = JSON.parse(JSON.stringify(MonitoringConfig));

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    
    // Устанавливаем язык страницы из конфигурации
    if (typeof MonitoringConfig !== 'undefined' && MonitoringConfig.language) {
        currentPageLanguage = MonitoringConfig.language;
        localStorage.setItem('configEditorLanguage', MonitoringConfig.language);
    }
    
    loadCurrentConfiguration();
    
    // Обновляем язык интерфейса
    updatePageLanguage();
});

// Загрузка текущей конфигурации
function loadCurrentConfiguration() {
    
    // Язык интерфейса
    createLanguageOptions();
    
    // Тема
    const themeSelect = document.getElementById('themeMode');
    if (themeSelect && currentConfig.theme) {
        themeSelect.value = currentConfig.theme.mode || 'light';
    }
    
    // Фильтры
    createToggleList('filterToggles', currentConfig.display.filters, {
        period: '📅 Период',
        configuration: '📋 Конфигурация',
        platform: '📱 Платформа',
        search: '🔍 Поиск',
        refreshButton: '🔄 Кнопка обновления',
        analysisButtons: '🤖 Кнопки анализа'
    });
    
    // Карточки статистики
    createToggleList('statsToggles', currentConfig.display.statsCards, {
        totalUsers: '👥 Всего пользователей',
        activeSessions: '🟢 Активные сессии',
        avgSessionTime: '⏰ Среднее время сессии',
        totalMessages: '📩 Всего сообщений'
    });
    
    // Графики
    createToggleList('chartsToggles', currentConfig.display.charts, {
        activity: '📈 Активность по времени',
        geography: '🌍 География пользователей',
        platforms: '📱 Распределение по платформам'
    });
    
    // Колонки таблицы
    createToggleList('tableToggles', currentConfig.display.tableColumns, {
    leadScore: '⭐ Lead Score',
    contactName: '👤 Имя контакта',
    contactPhone: '📞 Телефон',
    contactEmail: '📧 Email',
    contactMessengers: '💬 Мессенджеры',
    contactCompany: '🏢 Компания',
    sessionId: '🆔 Session ID',
    ipAddress: '🌐 IP адрес',
    country: '🏳️ Страна',
    city: '🏙️ Город',
    platform: '📱 Платформа',
    configuration: '📋 Конфигурация',
    startTime: '🕐 Время начала',
    duration: '⏱️ Длительность',
    messages: '💬 Сообщений',
    satisfaction: '😊 Удовлетворенность',
    crmStatus: '📊 CRM статус',
    status: '🔵 Статус',
    actions: '⚡ Действия'
});
    
    // Кнопки действий в таблице
if (currentConfig.display.tableColumns.actionButtons) {
    // Проверяем, не существует ли уже эта секция
    const existingSection = document.querySelector('#actionButtonsToggles')?.closest('.section');
    
    if (!existingSection) {
        // Создаем секцию только если её еще нет
        const actionButtonsHTML = `
            <div class="section">
                <h2>${typeof t !== 'undefined' ? t('display.actionButtons') : '⚡ Кнопки действий в таблице'}</h2>
                <div class="toggle-list" id="actionButtonsToggles">
                    <!-- Переключатели кнопок действий -->
                </div>
            </div>
        `;
        
        // Добавляем HTML в конец вкладки display
        const displayTab = document.getElementById('display-tab');
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = actionButtonsHTML;
        displayTab.appendChild(tempDiv.firstElementChild);
        // Восстанавливаем состояние сворачивания секций
        setTimeout(restoreCollapsibleStates, 100);
    } else {
        // Если секция существует, обновляем только заголовок
        const header = existingSection.querySelector('h2');
        if (header && typeof t !== 'undefined') {
            header.innerHTML = t('display.actionButtons');
        }
    }
    
    // Создаем переключатели для кнопок
    const actionLabels = typeof t !== 'undefined' ? {
        viewDialog: t('actionButtonLabels.viewDialog'),
        analyze: t('actionButtonLabels.analyze'),
        viewAnalysis: t('actionButtonLabels.viewAnalysis'),
        extractContacts: t('actionButtonLabels.extractContacts'),
        deleteRecord: t('actionButtonLabels.deleteRecord')
    } : {
        viewDialog: '👁️ Кнопка "Диалог"',
        analyze: '🔍 Кнопка "Анализ"',
        viewAnalysis: '📊 Кнопка "Результат"',
        extractContacts: '📥 Кнопка "Обновить контакты"',
        deleteRecord: '🗑️ Кнопка "Удалить запись"'
    };
    createToggleList('actionButtonsToggles', currentConfig.display.tableColumns.actionButtons, actionLabels);
}
    // Блок Highlights
    if (currentConfig.highlights) {
        // Проверяем, не существует ли уже эта секция
        const existingHighlightsSection = document.querySelector('#highlightsToggles')?.closest('.section');
        
        if (!existingHighlightsSection) {
            // Создаем секцию только если её еще нет
            const highlightsHTML = `
                <div class="section">
                    <h2>${typeof t !== 'undefined' ? t('highlights.title') : '⚡ Хайлайты разговоров'}</h2>
                    
                    <div class="form-group">
                        <label style="display: flex; align-items: center; gap: 10px;">
                            <input type="checkbox" id="highlightsEnabled" style="width: auto;">
                            <span>${typeof t !== 'undefined' ? t('highlights.enabled') : 'Включить хайлайты'}</span>
                        </label>
                    </div>
                    
                    <div id="highlightsSettings" style="margin-top: 20px; display: none;">
                        <div class="toggle-list" id="highlightsToggles">
                            <!-- Переключатели хайлайтов -->
                        </div>
                    </div>
                </div>
            `;
            
            // Добавляем HTML в конец вкладки display
            const displayTab = document.getElementById('display-tab');
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = highlightsHTML;
            displayTab.appendChild(tempDiv.firstElementChild);
        } else {
            // Если секция существует, обновляем только заголовок
            const header = existingHighlightsSection.querySelector('h2');
            if (header && typeof t !== 'undefined') {
                header.innerHTML = t('highlights.title');
            }
        }
        
        // Настраиваем чекбокс
        const highlightsEnabled = document.getElementById('highlightsEnabled');
        if (highlightsEnabled) {
            highlightsEnabled.checked = currentConfig.highlights.enabled || false;
            
            // Обработчик изменения
            highlightsEnabled.addEventListener('change', function() {
                const settings = document.getElementById('highlightsSettings');
                if (settings) {
                    settings.style.display = this.checked ? 'block' : 'none';
                }
                currentConfig.highlights.enabled = this.checked;
            });
            
            // Показываем настройки если включено
            const highlightsSettings = document.getElementById('highlightsSettings');
            if (highlightsSettings && highlightsEnabled.checked) {
                highlightsSettings.style.display = 'block';
            }
        }
        
        // Создаем переключатели для типов хайлайтов
        if (currentConfig.highlights.types) {
            const highlightLabels = typeof t !== 'undefined' ? {
                pricing: t('highlights.pricing'),
                objection: t('highlights.objection'),
                buying_signal: t('highlights.buyingSignal')
            } : {
                pricing: '💰 Обсуждение цены',
                objection: '❌ Возражение клиента',
                buying_signal: '✅ Сигнал покупки'
            };
            
            const highlightConfig = {
                pricing: currentConfig.highlights.types.pricing?.enabled || false,
                objection: currentConfig.highlights.types.objection?.enabled || false,
                buying_signal: currentConfig.highlights.types.buying_signal?.enabled || false
            };
            
            createToggleList('highlightsToggles', highlightConfig, highlightLabels);
        }
    }
    
    // Конфигурации
    createConfigurationToggles();
    
    // Платформы
    createPlatformToggles();
    
    // Языки анализа
    createAnalysisLanguageToggles();
    // Языки результата анализа
createResultLanguageToggles();

// Синхронизация языка анализа
const analysisLangSyncToggle = document.getElementById('analysisLanguageSyncToggle');
if (analysisLangSyncToggle && currentConfig.analysisLanguageSync) {
    if (currentConfig.analysisLanguageSync.autoSync) {
        analysisLangSyncToggle.classList.add('active');
    }
    
    // Добавляем обработчик клика
    analysisLangSyncToggle.onclick = function() {
        this.classList.toggle('active');
        const isEnabled = this.classList.contains('active');
        
        // Обновляем конфигурацию
        if (!currentConfig.analysisLanguageSync) {
            currentConfig.analysisLanguageSync = {};
        }
        currentConfig.analysisLanguageSync.autoSync = isEnabled;
    };
}
    
    // Технические настройки
    const refreshInterval = document.getElementById('refreshInterval');
    if (refreshInterval && currentConfig.technical) {
        refreshInterval.value = currentConfig.technical.refreshInterval || 30000;
    }
    
    const itemsPerPage = document.getElementById('itemsPerPage');
    if (itemsPerPage && currentConfig.technical) {
        itemsPerPage.value = currentConfig.technical.itemsPerPage || 20;
    }

    // API Key
    const webhookApiKey = document.getElementById('webhookApiKey');
    if (webhookApiKey && currentConfig.technical) {
        webhookApiKey.value = currentConfig.technical.apiKey || '';
    }

    // Webhook URLs
    if (currentConfig.technical) {
        Object.keys(currentConfig.technical).forEach(key => {
            if (key.includes('Endpoint')) {
                const input = document.getElementById(key);
                if (input) {
                    input.value = currentConfig.technical[key];
                }
            }
        });
    }
    
    // CRM интеграция
    const crmEnabled = document.getElementById('crmEnabled');
    if (crmEnabled && currentConfig.crmIntegration) {
        crmEnabled.checked = currentConfig.crmIntegration.enabled || false;
         // Добавляем обработчик изменения
        crmEnabled.addEventListener('change', toggleCRMSections);

        // Вызываем функцию для правильного отображения
        toggleCRMSections();
    }

    // Email мониторинг
    const emailToggle = document.getElementById('emailMonitoringToggle');
    if (emailToggle && currentConfig.emailMonitoring) {
        if (currentConfig.emailMonitoring.enabled) {
            emailToggle.classList.add('active');
        }
        
        // Добавляем обработчик клика
        emailToggle.onclick = function() {
            this.classList.toggle('active');
            const isEnabled = this.classList.contains('active');
            
            // Обновляем конфигурацию
            if (!currentConfig.emailMonitoring) {
                currentConfig.emailMonitoring = {};
            }
            currentConfig.emailMonitoring.enabled = isEnabled;
            
            // Показываем/скрываем секцию с вебхуками
            const emailEndpointsSection = document.getElementById('emailEndpointsSection');
            if (emailEndpointsSection) {
                emailEndpointsSection.style.display = isEnabled ? 'block' : 'none';
            }
        };
        
        // Проверяем начальное состояние для отображения вебхуков
        const emailEndpointsSection = document.getElementById('emailEndpointsSection');
        if (emailEndpointsSection && currentConfig.emailMonitoring.enabled) {
            emailEndpointsSection.style.display = 'block';
        }
    }

    // Загружаем значения Email endpoints если они есть
    if (currentConfig.technical) {
        const emailEndpoints = [
            'emailDataEndpoint',
            'emailDialogsEndpoint', 
            'analyzeEmailEndpoint',
            'getEmailAnalysisEndpoint',
            'getAllEmailAnalysisEndpoint',
            'extractEmailContactsEndpoint',
            'getEmailContactsEndpoint'
        ];
        
        emailEndpoints.forEach(key => {
            const input = document.getElementById(key);
            if (input && currentConfig.technical[key]) {
                input.value = currentConfig.technical[key];
            }
        });
    }

// Загружаем значения CRM endpoints если они есть
    if (currentConfig.technical && currentConfig.crmIntegration && currentConfig.crmIntegration.enabled) {
        const crmEndpoints = [
            'sendToCRMEndpoint',
            'crmStatusEndpoint',
            'crmSettingsEndpoint',
            'updateCRMSettingsEndpoint'
        ];
        
        crmEndpoints.forEach(key => {
            const input = document.getElementById(key);
            if (input && currentConfig.technical[key]) {
                input.value = currentConfig.technical[key];
            }
        });
    }

    // Загружаем настройки брендирования
    loadBrandingSettings();
}

// Создание списка языков
function createLanguageOptions() {
    const container = document.getElementById('languageSelect');
    if (!container) return;
    
    const languages = [
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'ua', name: 'Українська', flag: '🇺🇦' }
    ];
    
    container.innerHTML = '';
    languages.forEach(lang => {
        const option = document.createElement('div');
        option.className = 'language-option';
        option.dataset.lang = lang.code;
        option.innerHTML = `${lang.flag} ${lang.name}`;
        option.onclick = () => selectLanguage(lang.code);
        
        if (lang.code === currentConfig.language) {
            option.classList.add('selected');
        }
        
        container.appendChild(option);
    });
}

// Выбор языка
function selectLanguage(langCode) {
    document.querySelectorAll('.language-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    const selected = document.querySelector(`[data-lang="${langCode}"]`);
    if (selected) {
        selected.classList.add('selected');
    }
    currentConfig.language = langCode;
    
    // Обновляем язык страницы настроек
    currentPageLanguage = langCode;
    localStorage.setItem('configEditorLanguage', langCode);
    updatePageLanguage();
}

// Создание списка переключателей
function createToggleList(containerId, configObject, labels) {
    const container = document.getElementById(containerId);
    if (!container || !configObject) return;
    
    container.innerHTML = '';
    
    // Определяем правильные лейблы в зависимости от контейнера и текущего языка
    let currentLabels = labels;
    if (typeof ConfigEditorTranslations !== 'undefined' && currentPageLanguage) {
        // Если переводы доступны, используем их
        if (containerId === 'filterToggles' && ConfigEditorTranslations[currentPageLanguage]?.filterLabels) {
            currentLabels = ConfigEditorTranslations[currentPageLanguage].filterLabels;
        } else if (containerId === 'statsToggles' && ConfigEditorTranslations[currentPageLanguage]?.statsLabels) {
            currentLabels = ConfigEditorTranslations[currentPageLanguage].statsLabels;
        } else if (containerId === 'chartsToggles' && ConfigEditorTranslations[currentPageLanguage]?.chartLabels) {
            currentLabels = ConfigEditorTranslations[currentPageLanguage].chartLabels;
        } else if (containerId === 'tableToggles' && ConfigEditorTranslations[currentPageLanguage]?.tableLabels) {
            currentLabels = ConfigEditorTranslations[currentPageLanguage].tableLabels;
        } else if (containerId === 'actionButtonsToggles' && ConfigEditorTranslations[currentPageLanguage]?.actionButtonLabels) {
            currentLabels = ConfigEditorTranslations[currentPageLanguage].actionButtonLabels;
        }
    }
    
    Object.keys(configObject).forEach(key => {
        // Пропускаем actionButtons если это объект или если мы в tableToggles
        if (key === 'actionButtons' && (typeof configObject[key] === 'object' || containerId === 'tableToggles')) {
            return;
        }
        
        const item = document.createElement('div');
        item.className = 'toggle-item';
        item.innerHTML = `
            <div class="toggle-info">
                <span class="toggle-label">${currentLabels[key] || labels[key] || key}</span>
            </div>
            <div class="toggle-switch ${configObject[key] ? 'active' : ''}" 
                 data-container="${containerId}" data-key="${key}">
                <div class="toggle-slider"></div>
            </div>
        `;
        
        // Добавляем обработчик клика
        const toggle = item.querySelector('.toggle-switch');
        toggle.onclick = function() {
            toggleItem(containerId, key, this);
        };
        
        container.appendChild(item);
    });

    // Специальная обработка для actionButtons
    if (containerId === 'tableToggles' && configObject.actionButtons) {
        const item = document.createElement('div');
        item.className = 'toggle-item';
        item.innerHTML = `
            <div class="toggle-info">
                <span class="toggle-label">${typeof t !== 'undefined' ? t('display.actionButtons') : (labels.actionButtons || 'Кнопки действий в таблице')}</span>
            </div>
            <div class="toggle-switch active" data-container="${containerId}" data-key="actionButtons">
                <div class="toggle-slider"></div>
            </div>
        `;
        
        const toggle = item.querySelector('.toggle-switch');
        toggle.onclick = function() {
            toggleItem(containerId, 'actionButtons', this);
        };
        
        container.appendChild(item);
    }
}

// Переключение элемента
function toggleItem(containerId, key, toggleElement) {
    toggleElement.classList.toggle('active');
    
    // Специальная обработка для actionButtons
    if (key === 'actionButtons') {
        // Не меняем сам объект, только показываем/скрываем секцию
        const actionButtonsSection = document.querySelector('#actionButtonsToggles')?.closest('.section');
        if (actionButtonsSection) {
            actionButtonsSection.style.display = toggleElement.classList.contains('active') ? 'block' : 'none';
        }
        return; // Важно! Выходим из функции, не меняя значение
    }
    
    // Обновляем конфигурацию для остальных элементов
    const configPath = getConfigPath(containerId);
    setNestedProperty(currentConfig, `${configPath}.${key}`, toggleElement.classList.contains('active'));
}

// Показ/скрытие секций CRM
function toggleCRMSections() {
    const crmEnabled = document.getElementById('crmEnabled');
    const settingsContent = document.getElementById('crmSettingsContent');

    if (crmEnabled && settingsContent) {
        const isEnabled = crmEnabled.checked;
        settingsContent.style.display = isEnabled ? 'block' : 'none';
    }
}

// Получить путь к конфигурации
function getConfigPath(containerId) {
    const paths = {
        'filterToggles': 'display.filters',
        'statsToggles': 'display.statsCards',
        'chartsToggles': 'display.charts',
        'tableToggles': 'display.tableColumns',
        'actionButtonsToggles': 'display.tableColumns.actionButtons',
        'highlightsToggles': 'highlights.types'
    };
    return paths[containerId];
}

// Установить вложенное свойство
function setNestedProperty(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
            current[keys[i]] = {};
        }
        current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
}

// Создание переключателей конфигураций
function createConfigurationToggles() {
    const container = document.getElementById('configurationToggles');
    if (!container || !currentConfig.availableConfigurations) return;
    
    container.innerHTML = '';
    
    Object.entries(currentConfig.availableConfigurations).forEach(([key, config]) => {
        const item = document.createElement('div');
        item.className = 'toggle-item';
        item.innerHTML = `
            <div class="toggle-info" style="flex: 1;">
                <span class="toggle-icon">${config.icon}</span>
                <input type="text" class="config-name-input" 
                       value="${config.labels[currentConfig.language] || config.labels.ru}" 
                       data-config-key="${key}"
                       style="border: 1px solid #e5e7eb; border-radius: 4px; padding: 4px 8px; margin-left: 10px; width: 200px;">
            </div>
            <div class="toggle-switch ${config.enabled ? 'active' : ''}" data-config-key="${key}">
                <div class="toggle-slider"></div>
            </div>
        `;
        
        // Добавляем обработчик для переключателя
        const toggle = item.querySelector('.toggle-switch');
        toggle.onclick = function() {
            toggleConfiguration(key, this);
        };
        
        // Добавляем обработчик для изменения названия
        const nameInput = item.querySelector('.config-name-input');
        nameInput.onchange = function() {
            updateConfigurationName(key, this.value);
        };
        
        container.appendChild(item);
    });
}

// Функция обновления названия конфигурации
function updateConfigurationName(key, newName) {
    if (currentConfig.availableConfigurations[key]) {
        if (!currentConfig.availableConfigurations[key].labels) {
            currentConfig.availableConfigurations[key].labels = {};
        }
        currentConfig.availableConfigurations[key].labels[currentConfig.language] = newName;
    }
}

// Переключение конфигурации
function toggleConfiguration(key, toggleElement) {
    toggleElement.classList.toggle('active');
    currentConfig.availableConfigurations[key].enabled = toggleElement.classList.contains('active');
}

// Создание переключателей платформ
function createPlatformToggles() {
    const container = document.getElementById('platformToggles');
    if (!container || !currentConfig.availablePlatforms) return;
    
    container.innerHTML = '';
    
    Object.entries(currentConfig.availablePlatforms).forEach(([key, platform]) => {
        const item = document.createElement('div');
        item.className = 'toggle-item';
        item.innerHTML = `
            <div class="toggle-info">
                <span class="toggle-icon">${platform.icon}</span>
                <span class="toggle-label">${platform.labels[currentConfig.language] || platform.labels.ru}</span>
            </div>
            <div class="toggle-switch ${platform.enabled ? 'active' : ''}" data-platform-key="${key}">
                <div class="toggle-slider"></div>
            </div>
        `;
        
        // Добавляем обработчик
        const toggle = item.querySelector('.toggle-switch');
        toggle.onclick = function() {
            togglePlatform(key, this);
        };
        
        container.appendChild(item);
    });
}

// Переключение платформы
function togglePlatform(key, toggleElement) {
    toggleElement.classList.toggle('active');
    currentConfig.availablePlatforms[key].enabled = toggleElement.classList.contains('active');
}

// Создание переключателей языков анализа
function createAnalysisLanguageToggles() {
    const container = document.getElementById('analysisLanguageToggles');
    if (!container || !currentConfig.availableAnalysisLanguages) return;
    
    container.innerHTML = '';
    
    Object.entries(currentConfig.availableAnalysisLanguages).forEach(([key, lang]) => {
        const item = document.createElement('div');
        item.className = 'toggle-item';
        item.innerHTML = `
            <div class="toggle-info">
                <span class="toggle-icon">${lang.flag}</span>
                <span class="toggle-label">${lang.labels[currentConfig.language] || lang.labels.ru}</span>
            </div>
            <div class="toggle-switch ${lang.enabled ? 'active' : ''}" data-lang-key="${key}">
                <div class="toggle-slider"></div>
            </div>
        `;
        
        // Добавляем обработчик
        const toggle = item.querySelector('.toggle-switch');
        toggle.onclick = function() {
            toggleAnalysisLanguage(key, this);
        };
        
        container.appendChild(item);
    });
}

// Создание переключателей языков результата анализа
function createResultLanguageToggles() {
    const container = document.getElementById('resultLanguageToggles');
    if (!container || !currentConfig.availableResultLanguages) return;
    
    container.innerHTML = '';
    
    Object.entries(currentConfig.availableResultLanguages).forEach(([key, lang]) => {
        const item = document.createElement('div');
        item.className = 'toggle-item';
        item.innerHTML = `
            <div class="toggle-info">
                <span class="toggle-icon">${lang.flag}</span>
                <span class="toggle-label">${lang.labels[currentConfig.language] || lang.labels.ru}</span>
            </div>
            <div class="toggle-switch ${lang.enabled ? 'active' : ''}" data-result-lang-key="${key}">
                <div class="toggle-slider"></div>
            </div>
        `;
        
        // Добавляем обработчик
        const toggle = item.querySelector('.toggle-switch');
        toggle.onclick = function() {
            toggleResultLanguage(key, this);
        };
        
        container.appendChild(item);
    });
}

// Переключение языка результата
function toggleResultLanguage(key, toggleElement) {
    toggleElement.classList.toggle('active');
    currentConfig.availableResultLanguages[key].enabled = toggleElement.classList.contains('active');
}

// Управление видимостью секций CRM
function toggleCRMSections() {
    const crmEnabled = document.getElementById('crmEnabled');
    const crmSettingsContent = document.getElementById('crmSettingsContent');
    const crmMappingSection = document.getElementById('crmMappingSection');

    if (crmEnabled && crmEnabled.checked) {
        if (crmSettingsContent) crmSettingsContent.style.display = 'block';
        if (crmMappingSection) crmMappingSection.style.display = 'block';
    } else {
        if (crmSettingsContent) crmSettingsContent.style.display = 'none';
        if (crmMappingSection) crmMappingSection.style.display = 'none';
    }
}

// Функция для сворачивания/разворачивания секций
function toggleCollapsible(header) {
    header.classList.toggle('collapsed');
    const content = header.nextElementSibling;
    content.classList.toggle('collapsed');
    
    // Сохраняем состояние в localStorage
    const sectionId = header.querySelector('h2').textContent;
    const isCollapsed = header.classList.contains('collapsed');
    localStorage.setItem(`collapsed_${sectionId}`, isCollapsed);
}

// Восстановление состояния секций при загрузке
function restoreCollapsibleStates() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        const sectionId = header.querySelector('h2').textContent;
        const savedState = localStorage.getItem(`collapsed_${sectionId}`);
        
        // Если нет сохраненного состояния, делаем свернутым по умолчанию
        const isCollapsed = savedState === null ? true : savedState === 'true';
        
        if (isCollapsed) {
            header.classList.add('collapsed');
            header.nextElementSibling.classList.add('collapsed');
        } else {
            header.classList.remove('collapsed');
            header.nextElementSibling.classList.remove('collapsed');
        }
    });
}
// Переключение языка анализа
function toggleAnalysisLanguage(key, toggleElement) {
    toggleElement.classList.toggle('active');
    currentConfig.availableAnalysisLanguages[key].enabled = toggleElement.classList.contains('active');
}

// ГЛОБАЛЬНЫЕ ФУНКЦИИ ДЛЯ КНОПОК

// Функция показа красивого модального окна подтверждения
function showConfirmModal(message, onConfirm, onCancel) {
    const lang = currentPageLanguage || 'ru';
    
    // Полные переводы для всех элементов
    const translations = {
        ru: { 
            title: 'Подтвердите действие на',
            ok: 'OK', 
            cancel: 'Отмена'
        },
        en: { 
            title: 'Confirm action on',
            ok: 'OK', 
            cancel: 'Cancel'
        },
        es: { 
            title: 'Confirmar acción en',
            ok: 'OK', 
            cancel: 'Cancelar'
        },
        fr: { 
            title: 'Confirmer l\'action sur',
            ok: 'OK', 
            cancel: 'Annuler'
        },
        de: { 
            title: 'Aktion bestätigen auf',
            ok: 'OK', 
            cancel: 'Abbrechen'
        },
        it: { 
            title: 'Conferma azione su',
            ok: 'OK', 
            cancel: 'Annulla'
        },
        pt: { 
            title: 'Confirmar ação em',
            ok: 'OK', 
            cancel: 'Cancelar'
        },
        zh: { 
            title: '确认操作',
            ok: '确定', 
            cancel: '取消'
        },
        ja: { 
            title: 'アクションの確認',
            ok: 'OK', 
            cancel: 'キャンセル'
        },
        ko: { 
            title: '작업 확인',
            ok: '확인', 
            cancel: '취소'
        },
        ua: { 
            title: 'Підтвердіть дію на',
            ok: 'OK', 
            cancel: 'Скасувати'
        }
    };
    
    const t = translations[lang] || translations.ru;
    
    const modalHTML = `
        <div class="confirm-modal-overlay" id="confirmModal">
            <div class="confirm-modal">
                <div class="confirm-modal-header">
                    <h3 class="confirm-modal-title">
                        <span style="color: #3b82f6;">⚙️</span>
                        ${t.title} cryptomator.pro
                    </h3>
                    <button class="confirm-modal-close" onclick="closeConfirmModal(false)">✕</button>
                </div>
                <div class="confirm-modal-body">
                    ${message}
                </div>
                <div class="confirm-modal-buttons">
                    <button class="confirm-modal-btn confirm-modal-btn-primary" onclick="closeConfirmModal(true)">
                        ${t.ok}
                    </button>
                    <button class="confirm-modal-btn confirm-modal-btn-secondary" onclick="closeConfirmModal(false)">
                        ${t.cancel}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Сохраняем callbacks
    window.confirmModalCallbacks = { onConfirm, onCancel };
    
    // Добавляем модальное окно
    const div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div.firstElementChild);
}

// Функция закрытия модального окна
window.closeConfirmModal = function(confirmed) {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.remove();
        
        if (window.confirmModalCallbacks) {
            if (confirmed && window.confirmModalCallbacks.onConfirm) {
                window.confirmModalCallbacks.onConfirm();
            } else if (!confirmed && window.confirmModalCallbacks.onCancel) {
                window.confirmModalCallbacks.onCancel();
            }
            delete window.confirmModalCallbacks;
        }
    }
}

// Сохранение конфигурации
window.saveConfiguration = async function() {
    // Обновляем тему
    currentConfig.theme.mode = document.getElementById('themeMode').value;
    // Обновляем CRM интеграцию
const crmEnabled = document.getElementById('crmEnabled');
if (crmEnabled) {
    if (!currentConfig.crmIntegration) {
        currentConfig.crmIntegration = {};
    }
    currentConfig.crmIntegration.enabled = crmEnabled.checked;
}
    // Обновляем Email мониторинг
    const emailToggle = document.getElementById('emailMonitoringToggle');
    if (emailToggle) {
        if (!currentConfig.emailMonitoring) {
            currentConfig.emailMonitoring = {};
        }
        currentConfig.emailMonitoring.enabled = emailToggle.classList.contains('active');
    }

    // Сохраняем Email endpoints
    const emailEndpoints = [
        'emailDataEndpoint',
        'emailDialogsEndpoint',
        'analyzeEmailEndpoint',
        'getEmailAnalysisEndpoint',
        'getAllEmailAnalysisEndpoint',
        'extractEmailContactsEndpoint',
        'getEmailContactsEndpoint'
    ];

    emailEndpoints.forEach(key => {
        const input = document.getElementById(key);
        if (input && input.value) {
            currentConfig.technical[key] = input.value;
        }
    });
    // Сохраняем CRM endpoints
    if (currentConfig.crmIntegration && currentConfig.crmIntegration.enabled) {
        const crmEndpoints = [
            'sendToCRMEndpoint',
            'crmStatusEndpoint',
            'crmSettingsEndpoint',
            'updateCRMSettingsEndpoint'
        ];
        
        crmEndpoints.forEach(key => {
            const input = document.getElementById(key);
            if (input && input.value) {
                currentConfig.technical[key] = input.value;
            }
        });
    }
    
    // Сохраняем настройки highlights
    const highlightsEnabled = document.getElementById('highlightsEnabled');
    if (highlightsEnabled) {
        if (!currentConfig.highlights) {
            currentConfig.highlights = {
                enabled: false,
                types: {
                    pricing: { enabled: true, color: "#FFD700", icon: "💰" },
                    objection: { enabled: true, color: "#FF6B6B", icon: "❌" },
                    buying_signal: { enabled: true, color: "#51CF66", icon: "✅" }
                }
            };
        }
        
        // Обновляем только флаг enabled для главного переключателя
        currentConfig.highlights.enabled = highlightsEnabled.checked;
        
        // Сохраняем состояния типов хайлайтов с полной структурой
        if (currentConfig.highlights.types) {
            // Для каждого типа сохраняем полную структуру объекта
            const defaultColors = {
                pricing: "#FFD700",
                objection: "#FF6B6B",
                buying_signal: "#51CF66"
            };
            const defaultIcons = {
                pricing: "💰",
                objection: "❌",
                buying_signal: "✅"
            };
            
            ['pricing', 'objection', 'buying_signal'].forEach(type => {
                const currentValue = currentConfig.highlights.types[type];
                
                // Если это простое boolean значение, преобразуем в объект
                if (typeof currentValue === 'boolean') {
                    currentConfig.highlights.types[type] = {
                        enabled: currentValue,
                        color: defaultColors[type],
                        icon: defaultIcons[type]
                    };
                } 
                // Если это объект без нужных полей, дополняем
                else if (typeof currentValue === 'object') {
                    if (!currentValue.color) currentValue.color = defaultColors[type];
                    if (!currentValue.icon) currentValue.icon = defaultIcons[type];
                    if (typeof currentValue.enabled === 'undefined') currentValue.enabled = true;
                }
                // Если вообще не существует, создаём
                else if (!currentValue) {
                    currentConfig.highlights.types[type] = {
                        enabled: true,
                        color: defaultColors[type],
                        icon: defaultIcons[type]
                    };
                }
            });
        }
    }

    // Сохраняем настройки брендирования
    saveBrandingSettings();

    // Обновляем технические настройки
    currentConfig.technical.refreshInterval = parseInt(document.getElementById('refreshInterval').value);
    currentConfig.technical.itemsPerPage = parseInt(document.getElementById('itemsPerPage').value);

    // Обновляем API Key
    const webhookApiKeyValue = document.getElementById('webhookApiKey').value;
    if (webhookApiKeyValue) {
        currentConfig.technical.apiKey = webhookApiKeyValue;
    }

    // Обновляем URLs
    Object.keys(currentConfig.technical).forEach(key => {
        if (key.includes('Endpoint')) {
            const input = document.getElementById(key);
            if (input) {
                currentConfig.technical[key] = input.value;
            }
        }
    });
    
    try {
        // Отправляем на сервер
        const response = await fetch('save-config.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentConfig)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showSuccessMessage();
            localStorage.setItem('monitoringConfig', JSON.stringify(currentConfig));
            
            const reloadMessage = {
    ru: 'Конфигурация сохранена! Перезагрузить страницу мониторинга для применения изменений?',
    en: 'Configuration saved! Reload monitoring page to apply changes?',
    es: '¡Configuración guardada! ¿Recargar la página de monitoreo para aplicar los cambios?',
    fr: 'Configuration enregistrée! Recharger la page de surveillance pour appliquer les modifications?',
    de: 'Konfiguration gespeichert! Überwachungsseite neu laden, um Änderungen anzuwenden?',
    it: 'Configurazione salvata! Ricaricare la pagina di monitoraggio per applicare le modifiche?',
    pt: 'Configuração salva! Recarregar a página de monitoramento para aplicar as alterações?',
    zh: '配置已保存！重新加载监控页面以应用更改？',
    ja: '設定が保存されました！変更を適用するために監視ページをリロードしますか？',
    ko: '구성이 저장되었습니다! 변경 사항을 적용하기 위해 모니터링 페이지를 다시 로드하시겠습니까?',
    ua: 'Конфігурацію збережено! Перезавантажити сторінку моніторингу для застосування змін?'
};

showConfirmModal(
    reloadMessage[currentPageLanguage] || reloadMessage.ru,
    function() {
        window.open('monitoring.html', '_blank');
    },
    null
);
        } else {
            alert('Ошибка сохранения: ' + (result.error || 'Неизвестная ошибка'));
        }
    } catch (error) {
        alert('Ошибка при сохранении конфигурации: ' + error.message);
        
        if (confirm('Не удалось сохранить на сервер. Скачать файл конфигурации?')) {
            downloadConfigFile();
        }
    }
}

// Сброс изменений
window.resetConfiguration = function() {
    currentConfig = JSON.parse(JSON.stringify(MonitoringConfig));
    loadCurrentConfiguration();
    alert('✅ Изменения сброшены');
}

// Экспорт конфигурации
window.exportConfiguration = async function() {
    try {
        // Делаем запрос к серверу для получения полного файла конфигурации
        const response = await fetch('export-config.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentConfig)
        });
        
        if (response.ok) {
            const configContent = await response.text();
            
            // Создаем Blob с полным содержимым файла
            const blob = new Blob([configContent], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'monitoring-config.js';
            a.click();
            
            URL.revokeObjectURL(url);
        } else {
            // Если сервер недоступен, экспортируем только JSON
            const configString = JSON.stringify(currentConfig, null, 2);
            const blob = new Blob([configString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'monitoring-config.json';
            a.click();
            
            URL.revokeObjectURL(url);
        }
    } catch (error) {
        // В случае ошибки экспортируем упрощенную версию
        const configString = JSON.stringify(currentConfig, null, 2);
        const blob = new Blob([configString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'monitoring-config.json';
        a.click();
        
        URL.revokeObjectURL(url);
    }
}

// Сброс на заводские настройки
window.resetToDefaults = function() {
    const messages = {
        ru: 'Вы уверены, что хотите сбросить все настройки на заводские? Это действие нельзя отменить.',
        en: 'Are you sure you want to reset all settings to defaults? This action cannot be undone.',
        es: '¿Está seguro de que desea restablecer toda la configuración a los valores predeterminados? Esta acción no se puede deshacer.',
        fr: 'Êtes-vous sûr de vouloir réinitialiser tous les paramètres aux valeurs par défaut? Cette action ne peut pas être annulée.',
        de: 'Sind Sie sicher, dass Sie alle Einstellungen auf die Standardwerte zurücksetzen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
        it: 'Sei sicuro di voler ripristinare tutte le impostazioni ai valori predefiniti? Questa azione non può essere annullata.',
        pt: 'Tem certeza de que deseja redefinir todas as configurações para os padrões? Esta ação não pode ser desfeita.',
        zh: '您确定要将所有设置重置为默认值吗？此操作无法撤消。',
        ja: 'すべての設定をデフォルトにリセットしてもよろしいですか？この操作は元に戻せません。',
        ko: '모든 설정을 기본값으로 재설정하시겠습니까? 이 작업은 취소할 수 없습니다.',
        ua: 'Ви впевнені, що хочете скинути всі налаштування на заводські? Цю дію не можна відмінити.'
    };
    
    showConfirmModal(
        messages[currentPageLanguage] || messages.ru,
        function() {
            localStorage.removeItem('monitoringConfig');
            location.reload();
        },
        null
    );
}

// Восстановление из резервной копии
window.restoreFromBackup = async function() {
    try {
        const response = await fetch('list-backups.php');
        const backups = await response.json();
        
        // Переводы для окна резервных копий
        const translations = {
            ru: {
                title: '📥 Выберите резервную копию для восстановления',
                noBackups: 'Нет доступных резервных копий',
                cancel: '❌ Отмена',
                kb: 'КБ'
            },
            en: {
                title: '📥 Select a backup to restore',
                noBackups: 'No backups available',
                cancel: '❌ Cancel',
                kb: 'KB'
            },
            es: {
                title: '📥 Seleccione una copia de seguridad para restaurar',
                noBackups: 'No hay copias de seguridad disponibles',
                cancel: '❌ Cancelar',
                kb: 'KB'
            },
            fr: {
                title: '📥 Sélectionnez une sauvegarde à restaurer',
                noBackups: 'Aucune sauvegarde disponible',
                cancel: '❌ Annuler',
                kb: 'KB'
            },
            de: {
                title: '📥 Wählen Sie ein Backup zur Wiederherstellung',
                noBackups: 'Keine Backups verfügbar',
                cancel: '❌ Abbrechen',
                kb: 'KB'
            },
            it: {
                title: '📥 Seleziona un backup da ripristinare',
                noBackups: 'Nessun backup disponibile',
                cancel: '❌ Annulla',
                kb: 'KB'
            },
            pt: {
                title: '📥 Selecione um backup para restaurar',
                noBackups: 'Sem backups disponíveis',
                cancel: '❌ Cancelar',
                kb: 'KB'
            },
            zh: {
                title: '📥 选择要恢复的备份',
                noBackups: '没有可用的备份',
                cancel: '❌ 取消',
                kb: 'KB'
            },
            ja: {
                title: '📥 復元するバックアップを選択',
                noBackups: '利用可能なバックアップがありません',
                cancel: '❌ キャンセル',
                kb: 'KB'
            },
            ko: {
                title: '📥 복원할 백업 선택',
                noBackups: '사용 가능한 백업이 없습니다',
                cancel: '❌ 취소',
                kb: 'KB'
            },
            ua: {
                title: '📥 Виберіть резервну копію для відновлення',
                noBackups: 'Немає доступних резервних копій',
                cancel: '❌ Скасувати',
                kb: 'КБ'
            }
        };
        
        const lang = currentPageLanguage || 'ru';
        const t = translations[lang] || translations.ru;
        
        if (backups.length === 0) {
            alert(t.noBackups);
            return;
        }
        
        // Создаем модальное окно для выбора резервной копии
        const modalHtml = `
            <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(8px);">
                <div style="background: #1f2937; border: 1px solid #374151; padding: 30px; border-radius: 16px; max-width: 500px; max-height: 80vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.8);">
                    <h3 style="margin-bottom: 20px; color: #f3f4f6; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
                        ${t.title}
                    </h3>
                    <div style="display: grid; gap: 10px;">
                        ${backups.map((backup, index) => `
                            <button onclick="performRestore('${backup.name}')" style="padding: 15px; text-align: left; border: 1px solid #374151; background: #2a3142; border-radius: 8px; cursor: pointer; transition: all 0.3s; color: #e5e7eb;">
                                <div style="font-weight: 500; color: #f3f4f6;">${backup.name}</div>
                                <div style="font-size: 14px; color: #9ca3af; margin-top: 5px;">
                                    📅 ${backup.date} | 📦 ${(backup.size / 1024).toFixed(2)} ${t.kb}
                                </div>
                            </button>
                        `).join('')}
                    </div>
                    <button onclick="closeRestoreModal()" style="margin-top: 20px; padding: 10px 20px; background: #ef4444; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; width: 100%; transition: all 0.2s;">
                        ${t.cancel}
                    </button>
                </div>
            </div>
        `;
        
        // Добавляем модальное окно в DOM
        const modalContainer = document.createElement('div');
        modalContainer.id = 'restoreModal';
        modalContainer.innerHTML = modalHtml;
        document.body.appendChild(modalContainer);
        
        // Добавляем стили при наведении
        const style = document.createElement('style');
        style.textContent = `
            #restoreModal button[onclick^="performRestore"]:hover {
                background: #374151 !important;
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
            }
            #restoreModal button[onclick="closeRestoreModal()"]:hover {
                background: #dc2626 !important;
            }
        `;
        document.head.appendChild(style);
        
    } catch (error) {
        const errorMessages = {
            ru: 'Ошибка при получении списка резервных копий: ',
            en: 'Error getting backup list: ',
            es: 'Error al obtener la lista de copias de seguridad: ',
            fr: 'Erreur lors de l\'obtention de la liste de sauvegarde: ',
            de: 'Fehler beim Abrufen der Backup-Liste: ',
            it: 'Errore nel recupero dell\'elenco dei backup: ',
            pt: 'Erro ao obter lista de backups: ',
            zh: '获取备份列表时出错：',
            ja: 'バックアップリストの取得エラー：',
            ko: '백업 목록을 가져오는 중 오류: ',
            ua: 'Помилка при отриманні списку резервних копій: '
        };
        
        const lang = currentPageLanguage || 'ru';
        alert((errorMessages[lang] || errorMessages.ru) + error.message);
    }
}

// Выполнение восстановления
window.performRestore = async function(backupName) {
    const messages = {
        ru: 'Вы уверены, что хотите восстановить эту резервную копию? Текущая конфигурация будет перезаписана.',
        en: 'Are you sure you want to restore this backup? Current configuration will be overwritten.',
        es: '¿Está seguro de que desea restaurar esta copia de seguridad? La configuración actual será sobrescrita.',
        fr: 'Êtes-vous sûr de vouloir restaurer cette sauvegarde? La configuration actuelle sera écrasée.',
        de: 'Sind Sie sicher, dass Sie dieses Backup wiederherstellen möchten? Die aktuelle Konfiguration wird überschrieben.',
        it: 'Sei sicuro di voler ripristinare questo backup? La configurazione attuale verrà sovrascritta.',
        pt: 'Tem certeza de que deseja restaurar este backup? A configuração atual será substituída.',
        zh: '您确定要恢复此备份吗？当前配置将被覆盖。',
        ja: 'このバックアップを復元してもよろしいですか？現在の設定は上書きされます。',
        ko: '이 백업을 복원하시겠습니까? 현재 구성이 덮어쓰여집니다.',
        ua: 'Ви впевнені, що хочете відновити цю резервну копію? Поточна конфігурація буде перезаписана.'
    };

    showConfirmModal(
        messages[currentPageLanguage] || messages.ru,
        async function() {
            try {
                const response = await fetch('restore-backup.php', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({backup: backupName})
                });
                
                const result = await response.json();
                
                if (result.success) {
                    alert('✅ Конфигурация успешно восстановлена!');
                    closeRestoreModal();
                    location.reload();
                } else {
                    alert('❌ Ошибка: ' + (result.error || 'Неизвестная ошибка'));
                }
            } catch (error) {
                alert('❌ Ошибка при восстановлении: ' + error.message);
            }
        },
        null
    );
return; // Важно! Выходим из функции здесь
    
    try {
        const response = await fetch('restore-backup.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({backup: backupName})
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('✅ Конфигурация успешно восстановлена!');
            closeRestoreModal();
            location.reload();
        } else {
            alert('❌ Ошибка: ' + (result.error || 'Неизвестная ошибка'));
        }
    } catch (error) {
        alert('❌ Ошибка при восстановлении: ' + error.message);
    }
}

// Закрытие модального окна
window.closeRestoreModal = function() {
    const modal = document.getElementById('restoreModal');
    if (modal) {
        modal.remove();
    }
}

// Показать сообщение об успехе
function showSuccessMessage() {
    const message = document.getElementById('successMessage');
    if (message) {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }
}

// Функция для скачивания файла (резервный вариант)
function downloadConfigFile() {
    const configString = `// monitoring-config.js
const MonitoringConfig = ${JSON.stringify(currentConfig, null, 4)};

// ... добавьте сюда остальной код из оригинального файла ...

window.MonitoringConfig = MonitoringConfig;`;
    
    const blob = new Blob([configString], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'monitoring-config.js';
    a.click();
    URL.revokeObjectURL(url);
}

// ============================================
// ФУНКЦИИ ДЛЯ БРЕНДИРОВАНИЯ
// ============================================

// Переключение полей в зависимости от типа логотипа
window.updateBrandingTypeFields = function() {
    const logoType = document.getElementById('brandingLogoType').value;
    const svgField = document.getElementById('brandingSvgField');
    const iconField = document.getElementById('brandingIconField');
    const imageField = document.getElementById('brandingImageField');

    // Скрываем все поля
    svgField.style.display = 'none';
    iconField.style.display = 'none';
    imageField.style.display = 'none';

    // Показываем нужное поле
    if (logoType === 'svg') {
        svgField.style.display = 'block';
    } else if (logoType === 'icon') {
        iconField.style.display = 'block';
    } else if (logoType === 'image') {
        imageField.style.display = 'block';
    }
}

// Обновление превью брендирования
window.updateBrandingPreview = function() {
    const enabled = document.getElementById('brandingEnabled')?.checked || false;
    const logoType = document.getElementById('brandingLogoType')?.value || 'svg';
    const logoSvg = document.getElementById('brandingLogoSvg')?.value || '';
    const icon = document.getElementById('brandingIcon')?.value || '🤖';
    const imageUrl = document.getElementById('brandingImageUrl')?.value || '';
    const companyName = document.getElementById('brandingCompanyName')?.value || 'NexusMindAI';
    const companyUrl = (document.getElementById('brandingCompanyUrl')?.value || '').trim();
    const poweredByText = (document.getElementById('brandingPoweredByText')?.value || '').trim();
    const logoWidth = document.getElementById('brandingLogoWidth')?.value || 32;
    const logoHeight = document.getElementById('brandingLogoHeight')?.value || 32;
    const fontSize = document.getElementById('brandingFontSize')?.value || 12;

    const previewLight = document.getElementById('brandingPreviewLight');
    const previewDark = document.getElementById('brandingPreviewDark');

    if (!enabled || !previewLight || !previewDark) {
        if (previewLight) previewLight.innerHTML = '<div style="text-align: center; color: #9ca3af;">Брендирование отключено</div>';
        if (previewDark) previewDark.innerHTML = '<div style="text-align: center; color: #6b7280;">Брендирование отключено</div>';
        return;
    }

    // Создаем HTML для логотипа
    let logoHtml = '';
    if (logoType === 'svg' && logoSvg) {
        // Обернем SVG в контейнер с overflow: hidden для предотвращения наложения
        logoHtml = `<div style="width: ${logoWidth}px; height: ${logoHeight}px; flex-shrink: 0; overflow: hidden; display: flex; align-items: center; justify-content: center;"><div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">${logoSvg}</div></div>`;
    } else if (logoType === 'icon' && icon) {
        logoHtml = `<div style="font-size: ${logoHeight}px; line-height: 1; flex-shrink: 0;">${icon}</div>`;
    } else if (logoType === 'image' && imageUrl) {
        logoHtml = `<img src="${imageUrl}" style="width: ${logoWidth}px; height: ${logoHeight}px; object-fit: contain; flex-shrink: 0;" />`;
    }

    // Генерируем HTML для названия компании (с ссылкой или без)
    const companyNameLightHTML = companyUrl ?
        `<a href="${companyUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #1f2937; font-weight: 600;">${companyName}</a>` :
        `<div style="color: #1f2937; font-weight: 600;">${companyName}</div>`;

    const companyNameDarkHTML = companyUrl ?
        `<a href="${companyUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #f3f4f6; font-weight: 600;">${companyName}</a>` :
        `<div style="color: #f3f4f6; font-weight: 600;">${companyName}</div>`;

    // Светлая тема
    const lightHtml = `
        <div style="display: flex; align-items: center; gap: 8px; font-size: ${fontSize}px;">
            ${logoHtml}
            <div style="display: flex; flex-direction: column; gap: 2px;">
                ${poweredByText ? `<div style="color: #6b7280; font-size: ${fontSize - 2}px;">${poweredByText}</div>` : ''}
                ${companyNameLightHTML}
            </div>
        </div>
    `;

    // Темная тема
    const darkHtml = `
        <div style="display: flex; align-items: center; gap: 8px; font-size: ${fontSize}px;">
            ${logoHtml}
            <div style="display: flex; flex-direction: column; gap: 2px;">
                ${poweredByText ? `<div style="color: #9ca3af; font-size: ${fontSize - 2}px;">${poweredByText}</div>` : ''}
                ${companyNameDarkHTML}
            </div>
        </div>
    `;

    previewLight.innerHTML = lightHtml;
    previewDark.innerHTML = darkHtml;
}

// Загрузка настроек брендирования
window.loadBrandingSettings = function() {
    if (!currentConfig.branding) {
        currentConfig.branding = {
            enabled: true,
            logoType: 'svg',
            logoSvg: '',
            icon: '🤖',
            imageUrl: '',
            companyName: 'NexusMindAI',
            companyUrl: '',
            poweredByText: '',
            size: {
                logoWidth: 32,
                logoHeight: 32,
                fontSize: 12
            }
        };
    }

    const branding = currentConfig.branding;

    // Загружаем значения в поля
    const brandingEnabled = document.getElementById('brandingEnabled');
    if (brandingEnabled) brandingEnabled.checked = branding.enabled || false;

    const brandingLogoType = document.getElementById('brandingLogoType');
    if (brandingLogoType) brandingLogoType.value = branding.logoType || 'svg';

    const brandingLogoSvg = document.getElementById('brandingLogoSvg');
    if (brandingLogoSvg) brandingLogoSvg.value = branding.logoSvg || '';

    const brandingIcon = document.getElementById('brandingIcon');
    if (brandingIcon) brandingIcon.value = branding.icon || '🤖';

    const brandingImageUrl = document.getElementById('brandingImageUrl');
    if (brandingImageUrl) brandingImageUrl.value = branding.imageUrl || '';

    const brandingCompanyName = document.getElementById('brandingCompanyName');
    if (brandingCompanyName) brandingCompanyName.value = branding.companyName || 'NexusMindAI';

    const brandingCompanyUrl = document.getElementById('brandingCompanyUrl');
    if (brandingCompanyUrl) brandingCompanyUrl.value = branding.companyUrl || '';

    const brandingPoweredByText = document.getElementById('brandingPoweredByText');
    if (brandingPoweredByText) brandingPoweredByText.value = branding.poweredByText || '';

    if (branding.size) {
        const brandingLogoWidth = document.getElementById('brandingLogoWidth');
        if (brandingLogoWidth) brandingLogoWidth.value = branding.size.logoWidth || 32;

        const brandingLogoHeight = document.getElementById('brandingLogoHeight');
        if (brandingLogoHeight) brandingLogoHeight.value = branding.size.logoHeight || 32;

        const brandingFontSize = document.getElementById('brandingFontSize');
        if (brandingFontSize) brandingFontSize.value = branding.size.fontSize || 12;
    }

    // Обновляем отображение полей и превью
    updateBrandingTypeFields();
    updateBrandingPreview();
}

// Сохранение настроек брендирования
window.saveBrandingSettings = function() {
    if (!currentConfig.branding) {
        currentConfig.branding = {};
    }

    const brandingEnabled = document.getElementById('brandingEnabled');
    if (brandingEnabled) currentConfig.branding.enabled = brandingEnabled.checked;

    const brandingLogoType = document.getElementById('brandingLogoType');
    if (brandingLogoType) currentConfig.branding.logoType = brandingLogoType.value;

    const brandingLogoSvg = document.getElementById('brandingLogoSvg');
    if (brandingLogoSvg) currentConfig.branding.logoSvg = brandingLogoSvg.value;

    const brandingIcon = document.getElementById('brandingIcon');
    if (brandingIcon) currentConfig.branding.icon = brandingIcon.value;

    const brandingImageUrl = document.getElementById('brandingImageUrl');
    if (brandingImageUrl) currentConfig.branding.imageUrl = brandingImageUrl.value;

    const brandingCompanyName = document.getElementById('brandingCompanyName');
    if (brandingCompanyName) currentConfig.branding.companyName = brandingCompanyName.value;

    const brandingCompanyUrl = document.getElementById('brandingCompanyUrl');
    if (brandingCompanyUrl) currentConfig.branding.companyUrl = brandingCompanyUrl.value;

    const brandingPoweredByText = document.getElementById('brandingPoweredByText');
    if (brandingPoweredByText) currentConfig.branding.poweredByText = brandingPoweredByText.value;

    if (!currentConfig.branding.size) {
        currentConfig.branding.size = {};
    }

    const brandingLogoWidth = document.getElementById('brandingLogoWidth');
    if (brandingLogoWidth) currentConfig.branding.size.logoWidth = parseInt(brandingLogoWidth.value) || 32;

    const brandingLogoHeight = document.getElementById('brandingLogoHeight');
    if (brandingLogoHeight) currentConfig.branding.size.logoHeight = parseInt(brandingLogoHeight.value) || 32;

    const brandingFontSize = document.getElementById('brandingFontSize');
    if (brandingFontSize) currentConfig.branding.size.fontSize = parseInt(brandingFontSize.value) || 12;
}

