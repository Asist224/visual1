// ===============================================
// КОНФИГУРАЦИЯ СИСТЕМЫ УПРАВЛЕНИЯ БАЗАМИ ДАННЫХ
// ===============================================
// Автоматически сгенерировано: 11.10.2025 18:32:40

const VectorBaseConfig = {
    "databases": [
        {
            "id": "knowledge_base",
            "icon": "📚",
            "order": 1
        },
        {
            "id": "sales_strategies",
            "icon": "💼",
            "order": 2
        },
        {
            "id": "contact_capture",
            "icon": "📧",
            "order": 3
        },
        {
            "id": "conversation_scenarios",
            "icon": "💬",
            "order": 4
        },
        {
            "id": "communication_style",
            "icon": "🎭",
            "order": 5
        },
        {
            "id": "interaction_policies",
            "icon": "📋",
            "order": 6
        },
        {
            "id": "documents",
            "icon": "📊",
            "order": 7
        },
        {
            "id": "knowledge_base_en",
            "icon": "📁",
            "order": 8
        },
        {
            "id": "sales_strategies_en",
            "icon": "📁",
            "order": 9
        },
        {
            "id": "contact_capture_en",
            "icon": "📁",
            "order": 10
        },
        {
            "id": "conversation_scenarios_en",
            "icon": "📁",
            "order": 11
        },
        {
            "id": "communication_style_en",
            "icon": "📁",
            "order": 12
        },
        {
            "id": "interaction_policies_en",
            "icon": "📁",
            "order": 13
        }
    ],
    "technical": {
        "baseUrl": "https://n8n.cryptomator.pro/webhook/",
        "apiKey": "24fs-$r4d-defd-77ds-7eds",
        "endpoints": {
            "readVectorBase": "read-vector-base",
            "writeVectorBase": "write-vector-base",
            "getLearningStats": "get-learning-stats"
        },
        "refreshInterval": 10000,
        "maxFileSize": 10485760,
        "maxTotalFileSize": 52428800,
        "recordsPerPage": 15,
        "historyPerPage": 15
    },
    "currentLanguage": "ru",
    "supportedLanguages": {
        "ru": {
            "code": "ru-RU",
            "name": "Русский",
            "flag": "🇷🇺"
        },
        "en": {
            "code": "en-US",
            "name": "English",
            "flag": "🇺🇸"
        },
        "es": {
            "code": "es-ES",
            "name": "Español",
            "flag": "🇪🇸"
        },
        "fr": {
            "code": "fr-FR",
            "name": "Français",
            "flag": "🇫🇷"
        },
        "de": {
            "code": "de-DE",
            "name": "Deutsch",
            "flag": "🇩🇪"
        },
        "it": {
            "code": "it-IT",
            "name": "Italiano",
            "flag": "🇮🇹"
        },
        "pt": {
            "code": "pt-PT",
            "name": "Português",
            "flag": "🇵🇹"
        },
        "zh": {
            "code": "zh-CN",
            "name": "中文",
            "flag": "🇨🇳"
        },
        "ja": {
            "code": "ja-JP",
            "name": "日本語",
            "flag": "🇯🇵"
        },
        "ko": {
            "code": "ko-KR",
            "name": "한국어",
            "flag": "🇰🇷"
        },
        "ua": {
            "code": "uk-UA",
            "name": "Українська",
            "flag": "🇺🇦"
        }
    },
    "allowedFileTypes": {
        "mimeTypes": [
            "application/pdf",
            "text/plain",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "text/csv",
            "application/csv"
        ],
        "extensions": [
            ".pdf",
            ".txt",
            ".docx",
            ".xlsx",
            ".xls",
            ".csv"
        ]
    }
};

// ===============================================
// ПЕРЕВОДЫ
// ===============================================

const VectorBaseTranslations = {
    // 🇷🇺 РУССКИЙ
    ru: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "Настройки"
        },
        
        databases: {

        
            knowledge_base: "База знаний",

        
            sales_strategies: "Техники продаж",

        
            contact_capture: "Захват контактов",

        
            conversation_scenarios: "Сценарии диалогов",

        
            communication_style: "Стиль общения",

        
            interaction_policies: "Политики взаимодействия",

        
            documents: "Табулированные данные",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 Записи",
            editor: "✏️ Редактор",
            monitoring: "📊 Мониторинг обучения"
        },

        filters: {
            databaseLabel: "База данных:",
            refreshButton: "🔄 Обновить",
            addButton: "➕ Добавить",
            quickSearch: "Быстрый поиск...",
            exportButton: "📥 Экспорт"
        },

        editor: {
            title: "✏️ Редактор записей",
            databaseLabel: "База данных для записи:",
            modeLabel: "Режим записи:",
            modes: {
                append: "Дополнить базу",
                replace: "Заменить полностью",
                edit: "Редактировать по ID",
                delete: "Удалить по ID"
            },
            editIdLabel: "ID записи для редактирования:",
            deleteIdLabel: "ID записи для удаления:",
            idPlaceholder: "Введите ID записи",
            idHint: "💡 Посмотрите ID в разделе \"Записи\" выше",
            inputTabs: {
                text: "📝 Текст",
                files: "📁 Документы",
                urls: "🔗 Ссылки"
            },
            contentLabel: "Содержимое для записи:",
            contentPlaceholder: "Вставьте сюда текст правил, инструкций или информации...",
            filesLabel: "Загрузите документы:",
            filesDragText: "📎 Перетащите файлы сюда или нажмите для выбора",
            filesSupported: "Поддерживаются: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "Добавьте ссылки для анализа:",
            urlsHint: "💡 AI извлечет ключевую информацию из веб-страниц и добавит в базу знаний",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ Добавить ссылку",
            removeUrlButton: "Удалить",
            writeButton: "💾 Записать в базу",
            clearButton: "🗑️ Очистить",
            loadingText: "Обработка и запись данных...",
             fullButton: "⚡ FULL - Записать целиком",
    fullButtonTooltip: "Добавить команду [FULL] для записи текста целиком без разбиения на части",
    fullAlreadyAdded: "Команда [FULL] уже добавлена",
    fullEnterText: "Пожалуйста, сначала введите текст",
    fullSuccess: "Команда [FULL] добавлена! Текст будет записан целиком",
    aiProcessing: "AI-обработка контента",
    aiProcessingHint: "Обработать через AI агента перед загрузкой",
    directModeHint: "⚡ Режим прямой загрузки: контент будет записан напрямую без AI-обработки"
        },

        records: {
            title: "📚 База данных",
            emptyTitle: "🔭 База данных пуста",
            emptyText: "Нажмите \"➕ Добавить\" чтобы создать первую запись",
            recordNumber: "Запись",
            created: "Создано:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "Редактировать",
            deleteTooltip: "Удалить",
            loading: "Загрузка данных...",
            placeholder: {
                title: "Выберите базу данных",
                subtitle: "Нажмите \"🔄 Обновить\" для загрузки данных"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 Обзор",
                current: "🔄 Текущий цикл",
                history: "📅 История",
                analytics: "📈 Аналитика"
            },
            periods: {
        days7: "7 дней",
        days30: "30 дней",
        months3: "3 месяца"
    },
            stats: {
                totalCycles: "Всего циклов обучения",
                totalDialogs: "Обработано диалогов",
                approvedUpdates: "Принято обновлений",
                rejectedUpdates: "Отклонено правил",
                successRate: "успешность",
                avgPriority: "Средний приоритет правил",
                avgCycleTime: "Процент успешности",
                mostActiveTable: "Наиболее активная таблица",
                change24h: "за последние 24ч",
                changeLastCycle: "за последний цикл",
                percentSuccess: "успешность",
                percentOfTotal: "от общего числа"
            },
            current: {
                statusTitle: "Статус текущего цикла",
                running: "🔄 В процессе",
                completed: "✅ Завершён",
                started: "Начат:",
                dialogs: "Обработано диалогов:",
                workflowId: "Workflow ID:",
                completedAt: "Завершён:",
                recentActions: "🕐 Последние действия",
                table: "Таблица:"
            },
            history: {
                title: "📜 История обновлений",
                filterAll: "Все",
                filterApproved: "Принятые",
                filterRejected: "Отклоненные",
                columns: {
                    time: "Время",
                    type: "Тип",
                    action: "Действие",
                    table: "Таблица",
                    status: "Статус",
                    priority: "Приоритет",
                    content: "Содержимое"
                },
                statusApplied: "Принято",
                statusRejected: "Отклонено",
                viewContent: "🔄 Просмотр",
                copyButton: "🔋 Копировать",
                reasonLabel: "Причина:",
                problemLabel: "Решаемая проблема:",
                contentLabel: "Содержимое изменения:",
                infoTitle: "📊 Информация об изменении"
            },
            charts: {
                activity: "📈 Активность обучения за последние 7 дней",
                statusDistribution: "🎯 Распределение обновлений",
                typeDistribution: "📊 Типы изменений",
                changeCount: "Количество изменений",
                efficiency: "📊 Эффективность обучения по дням",
                heatmap: "🎨 Тепловая карта активности по часам",
                approved: "Принятые",
                rejected: "Отклонённые",
                addAction: "Добавление",
                editAction: "Редактирование",
                deleteAction: "Удаление"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ Подтверждение удаления",
                deleteRecord: "Вы уверены, что хотите удалить запись ID: {id}?",
                deleteFromTable: "Вы уверены, что хотите удалить запись с ID: {id} из таблицы {table}?",
                cancelButton: "Отмена",
                confirmButton: "Удалить"
            }
        },

        notifications: {
            recordDeleted: "Запись ID: {id} успешно удалена",
            recordUpdated: "Запись ID: {id} успешно обновлена",
            recordAdded: "Запись успешно добавлена в базу",
            databaseReplaced: "База данных полностью заменена",
            deleteError: "Ошибка при удалении:",
            updateError: "Ошибка при обновлении:",
            connectionError: "Ошибка подключения:",
            operationSuccess: "Операция выполнена успешно",
            pleaseEnterEditId: "Пожалуйста, укажите ID записи для {action}",
            pleaseEnterContent: "Пожалуйста, введите содержимое для записи",
            fileTooBig: "Файл \"{name}\" слишком большой. Максимум: 10MB",
            totalSizeExceeded: "Превышен общий лимит размера файлов (50MB)",
            fileNotSupported: "Файл \"{name}\" не поддерживается. Разрешены: PDF, TXT, DOCX, XLSX, XLS, CSV файлы.",
            fileAlreadyUploaded: "Файл \"{name}\" уже загружен",
            fileUploaded: "Файл \"{name}\" успешно загружен",
            fileReadError: "Ошибка при чтении файла \"{name}\"",
            dataExported: "Данные экспортированы",
            noDataToExport: "Нет данных для экспорта",
            copiedToClipboard: "Скопировано в буфер обмена",
            unknownError: "Неизвестная ошибка",
            notFound: "Не найдено",
            loadingData: "Загрузка данных мониторинга...",
            directModeActivated: "⚡ Режим прямой загрузки активирован",
            aiProcessingEnabled: "🤖 AI-обработка включена"
        },

        actions: {
            editing: "редактирования",
            deletion: "удаления"
        },

        pagination: {
            page: "Страница",
            of: "из",
            total: "Всего:"
        },

        formatting: {
    today: "Сегодня",
    yesterday: "Вчера",
    seconds: "сек",
    minutes: "мин",
    hours: "ч",
    unknown: "Н/Д"
},

days: {
    mon: "Пн",
    tue: "Вт",
    wed: "Ср",
    thu: "Чт",
    fri: "Пт",
    sat: "Сб",
    sun: "Вс"
}
},

    // 🇺🇸 ENGLISH
    en: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "Settings"
        },
        
        databases: {

        
            knowledge_base: "Knowledge Base",

        
            sales_strategies: "Sales Techniques",

        
            contact_capture: "Contact Capture",

        
            conversation_scenarios: "Dialog Scenarios",

        
            communication_style: "Communication Style",

        
            interaction_policies: "Interaction Policies",

        
            documents: "Tabulated Data",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 Records",
            editor: "✏️ Editor",
            monitoring: "📊 Learning Monitoring"
        },

        filters: {
            databaseLabel: "Database:",
            refreshButton: "🔄 Refresh",
            addButton: "➕ Add",
            quickSearch: "Quick search...",
            exportButton: "📥 Export"
        },

        editor: {
            title: "✏️ Record Editor",
            databaseLabel: "Database for writing:",
            modeLabel: "Write mode:",
            modes: {
                append: "Append to database",
                replace: "Replace completely",
                edit: "Edit by ID",
                delete: "Delete by ID"
            },
            editIdLabel: "Record ID for editing:",
            deleteIdLabel: "Record ID for deletion:",
            idPlaceholder: "Enter record ID",
            idHint: "💡 Check ID in \"Records\" section above",
            inputTabs: {
                text: "📝 Text",
                files: "📁 Documents",
                urls: "🔗 Links"
            },
            contentLabel: "Content for writing:",
            contentPlaceholder: "Paste text of rules, instructions or information here...",
            filesLabel: "Upload documents:",
            filesDragText: "📎 Drag files here or click to select",
            filesSupported: "Supported: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "Add links for analysis:",
            urlsHint: "💡 AI will extract key information from web pages and add to knowledge base",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ Add link",
            removeUrlButton: "Remove",
            writeButton: "💾 Write to database",
            clearButton: "🗑️ Clear",
            loadingText: "Processing and writing data...",
            fullButton: "⚡ FULL - Write Entire",
        fullButtonTooltip: "Add [FULL] command to write text as a whole without splitting",
        fullAlreadyAdded: "[FULL] command already added",
        fullEnterText: "Please enter text first",
        fullSuccess: "[FULL] command added! Text will be written as a whole",
        aiProcessing: "AI Content Processing",
        aiProcessingHint: "Process through AI agent before uploading",
        directModeHint: "⚡ Direct mode: content will be uploaded directly without AI processing"
        },

        records: {
            title: "📚 Database",
            emptyTitle: "🔭 Database is empty",
            emptyText: "Click \"➕ Add\" to create first record",
            recordNumber: "Record",
            created: "Created:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "Edit",
            deleteTooltip: "Delete",
            loading: "Loading data...",
            placeholder: {
                title: "Select a database",
                subtitle: "Click \"🔄 Refresh\" to load data"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 Overview",
                current: "🔄 Current Cycle",
                history: "📅 History",
                analytics: "📈 Analytics"
            },
            periods: {
    days7: "7 days",
    days30: "30 days",
    months3: "3 months"
},
            stats: {
                totalCycles: "Total learning cycles",
                totalDialogs: "Dialogs processed",
                approvedUpdates: "Updates approved",
                rejectedUpdates: "Rules rejected",
                successRate: "success rate",
                avgPriority: "Average rule priority",
                avgCycleTime: "Success percentage",
                mostActiveTable: "Most active table",
                change24h: "in last 24h",
                changeLastCycle: "in last cycle",
                percentSuccess: "success rate",
                percentOfTotal: "of total"
            },
            current: {
                statusTitle: "Current cycle status",
                running: "🔄 Running",
                completed: "✅ Completed",
                started: "Started:",
                dialogs: "Dialogs processed:",
                workflowId: "Workflow ID:",
                completedAt: "Completed:",
                recentActions: "🕐 Recent actions",
                table: "Table:"
            },
            history: {
                title: "📜 Update history",
                filterAll: "All",
                filterApproved: "Approved",
                filterRejected: "Rejected",
                columns: {
                    time: "Time",
                    type: "Type",
                    action: "Action",
                    table: "Table",
                    status: "Status",
                    priority: "Priority",
                    content: "Content"
                },
                statusApplied: "Applied",
                statusRejected: "Rejected",
                viewContent: "🔄 View",
                copyButton: "🔋 Copy",
                reasonLabel: "Reason:",
                problemLabel: "Problem addressed:",
                contentLabel: "Change content:",
                infoTitle: "📊 Change information"
            },
            charts: {
                activity: "📈 Learning activity for last 7 days",
                statusDistribution: "🎯 Updates distribution",
                typeDistribution: "📊 Change types",
                changeCount: "Number of changes",
                efficiency: "📊 Learning efficiency by days",
                heatmap: "🎨 Activity heatmap by hours",
                approved: "Approved",
                rejected: "Rejected",
                addAction: "Addition",
                editAction: "Editing",
                deleteAction: "Deletion"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ Delete Confirmation",
                deleteRecord: "Are you sure you want to delete record ID: {id}?",
                deleteFromTable: "Are you sure you want to delete record ID: {id} from table {table}?",
                cancelButton: "Cancel",
                confirmButton: "Delete"
            }
        },

        notifications: {
            recordDeleted: "Record ID: {id} successfully deleted",
            recordUpdated: "Record ID: {id} successfully updated",
            recordAdded: "Record successfully added to database",
            databaseReplaced: "Database completely replaced",
            deleteError: "Error deleting:",
            updateError: "Error updating:",
            connectionError: "Connection error:",
            operationSuccess: "Operation completed successfully",
            pleaseEnterEditId: "Please specify record ID for {action}",
            pleaseEnterContent: "Please enter content for writing",
            fileTooBig: "File \"{name}\" is too large. Maximum: 10MB",
            totalSizeExceeded: "Total file size limit exceeded (50MB)",
            fileNotSupported: "File \"{name}\" is not supported. Allowed: PDF, TXT, DOCX, XLSX, XLS, CSV files.",
            fileAlreadyUploaded: "File \"{name}\" already uploaded",
            fileUploaded: "File \"{name}\" successfully uploaded",
            fileReadError: "Error reading file \"{name}\"",
            dataExported: "Data exported",
            noDataToExport: "No data to export",
            copiedToClipboard: "Copied to clipboard",
            unknownError: "Unknown error",
            notFound: "Not found",
            loadingData: "Loading monitoring data...",
            directModeActivated: "⚡ Direct upload mode activated",
            aiProcessingEnabled: "🤖 AI processing enabled"
        },

        actions: {
            editing: "editing",
            deletion: "deletion"
        },

        pagination: {
            page: "Page",
            of: "of",
            total: "Total:"
        },

        formatting: {
            today: "Today",
            yesterday: "Yesterday",
            seconds: "sec",
            minutes: "min",
            hours: "h",
            unknown: "N/A"
        },
        days: {
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    sun: "Sun"
}
    },

    // 🇪🇸 ESPAÑOL
    es: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "Configuración"
        },
        
        databases: {

        
            knowledge_base: "Base de conocimientos",

        
            sales_strategies: "Técnicas de ventas",

        
            contact_capture: "Captura de contactos",

        
            conversation_scenarios: "Escenarios de diálogo",

        
            communication_style: "Estilo de comunicación",

        
            interaction_policies: "Políticas de interacción",

        
            documents: "Datos tabulados",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 Registros",
            editor: "✏️ Editor",
            monitoring: "📊 Monitoreo de aprendizaje"
        },

        filters: {
            databaseLabel: "Base de datos:",
            refreshButton: "🔄 Actualizar",
            addButton: "➕ Agregar",
            quickSearch: "Búsqueda rápida...",
            exportButton: "📥 Exportar"
        },

        editor: {
            title: "✏️ Editor de registros",
            databaseLabel: "Base de datos para escritura:",
            modeLabel: "Modo de escritura:",
            modes: {
                append: "Complementar base",
                replace: "Reemplazar completamente",
                edit: "Editar por ID",
                delete: "Eliminar por ID"
            },
            editIdLabel: "ID de registro para edición:",
            deleteIdLabel: "ID de registro para eliminación:",
            idPlaceholder: "Ingrese ID de registro",
            idHint: "💡 Consulte ID en sección \"Registros\" arriba",
            inputTabs: {
                text: "📝 Texto",
                files: "📁 Documentos",
                urls: "🔗 Enlaces"
            },
            contentLabel: "Contenido para escritura:",
            contentPlaceholder: "Pegue aquí texto de reglas, instrucciones o información...",
            filesLabel: "Cargar documentos:",
            filesDragText: "📎 Arrastre archivos aquí o haga clic para seleccionar",
            filesSupported: "Soportados: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "Agregar enlaces para análisis:",
            urlsHint: "💡 AI extraerá información clave de páginas web y agregará a base de conocimientos",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ Agregar enlace",
            removeUrlButton: "Eliminar",
            writeButton: "💾 Escribir en base",
            clearButton: "🗑️ Limpiar",
            loadingText: "Procesando y escribiendo datos...",
            fullButton: "⚡ FULL - Escribir Completo",
        fullButtonTooltip: "Agregar comando [FULL] para escribir texto completo sin división",
        fullAlreadyAdded: "Comando [FULL] ya agregado",
        fullEnterText: "Por favor, ingrese el texto primero",
        fullSuccess: "¡Comando [FULL] agregado! El texto se escribirá completo",
        aiProcessing: "Procesamiento con IA",
        aiProcessingHint: "Procesar con agente IA antes de cargar",
        directModeHint: "⚡ Modo directo: el contenido se cargará directamente sin procesamiento IA"
        },

        records: {
            title: "📚 Base de datos",
            emptyTitle: "🔭 Base de datos vacía",
            emptyText: "Haga clic en \"➕ Agregar\" para crear primer registro",
            recordNumber: "Registro",
            created: "Creado:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "Editar",
            deleteTooltip: "Eliminar",
            loading: "Cargando datos...",
            placeholder: {
            title: "Seleccione una base de datos",
            subtitle: "Haga clic en \"🔄 Actualizar\" para cargar datos"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 Resumen",
                current: "🔄 Ciclo actual",
                history: "📅 Historia",
                analytics: "📈 Análisis"
            },
            periods: {
    days7: "7 días",
    days30: "30 días",
    months3: "3 meses"
},
            stats: {
                totalCycles: "Total ciclos de aprendizaje",
                totalDialogs: "Diálogos procesados",
                approvedUpdates: "Actualizaciones aprobadas",
                rejectedUpdates: "Reglas rechazadas",
                successRate: "tasa de éxito",
                avgPriority: "Prioridad promedio de reglas",
                avgCycleTime: "Porcentaje de éxito",
                mostActiveTable: "Tabla más activa",
                change24h: "en las últimas 24h",
                changeLastCycle: "en el último ciclo",
                percentSuccess: "tasa de éxito",
                percentOfTotal: "del total"
            },
            current: {
                statusTitle: "Estado del ciclo actual",
                running: "🔄 En proceso",
                completed: "✅ Completado",
                started: "Iniciado:",
                dialogs: "Diálogos procesados:",
                workflowId: "ID de flujo de trabajo:",
                completedAt: "Completado:",
                recentActions: "🕐 Acciones recientes",
                table: "Tabla:"
            },
            history: {
                title: "📜 Historial de actualizaciones",
                filterAll: "Todos",
                filterApproved: "Aprobados",
                filterRejected: "Rechazados",
                columns: {
                    time: "Tiempo",
                    type: "Tipo",
                    action: "Acción",
                    table: "Tabla",
                    status: "Estado",
                    priority: "Prioridad",
                    content: "Contenido"
                },
                statusApplied: "Aplicado",
                statusRejected: "Rechazado",
                viewContent: "🔄 Ver",
                copyButton: "🔋 Copiar",
                reasonLabel: "Razón:",
                problemLabel: "Problema abordado:",
                contentLabel: "Contenido del cambio:",
                infoTitle: "📊 Información del cambio"
            },
            charts: {
                activity: "📈 Actividad de aprendizaje últimos 7 días",
                statusDistribution: "🎯 Distribución de actualizaciones",
                typeDistribution: "📊 Tipos de cambios",
                changeCount: "Número de cambios",
                efficiency: "📊 Eficiencia de aprendizaje por días",
                heatmap: "🎨 Mapa de calor de actividad por horas",
                approved: "Aprobados",
                rejected: "Rechazados",
                addAction: "Adición",
                editAction: "Edición",
                deleteAction: "Eliminación"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ Confirmación de eliminación",
                deleteRecord: "¿Está seguro de que desea eliminar registro ID: {id}?",
                deleteFromTable: "¿Está seguro de que desea eliminar registro ID: {id} de tabla {table}?",
                cancelButton: "Cancelar",
                confirmButton: "Eliminar"
            }
        },

        notifications: {
            recordDeleted: "Registro ID: {id} eliminado exitosamente",
            recordUpdated: "Registro ID: {id} actualizado exitosamente",
            recordAdded: "Registro añadido exitosamente a la base de datos",
            databaseReplaced: "Base de datos completamente reemplazada",
            deleteError: "Error al eliminar:",
            updateError: "Error al actualizar:",
            connectionError: "Error de conexión:",
            operationSuccess: "Operación completada exitosamente",
            pleaseEnterEditId: "Por favor especifique ID de registro para {action}",
            pleaseEnterContent: "Por favor ingrese contenido para escritura",
            fileTooBig: "Archivo \"{name}\" demasiado grande. Máximo: 10MB",
            totalSizeExceeded: "Límite total de tamaño de archivos excedido (50MB)",
            fileNotSupported: "Archivo \"{name}\" no soportado. Permitidos: archivos PDF, TXT, DOCX, XLSX, XLS, CSV.",
            fileAlreadyUploaded: "Archivo \"{name}\" ya cargado",
            fileUploaded: "Archivo \"{name}\" cargado exitosamente",
            fileReadError: "Error al leer archivo \"{name}\"",
            dataExported: "Datos exportados",
            noDataToExport: "No hay datos para exportar",
            copiedToClipboard: "Copiado al portapapeles",
            unknownError: "Error desconocido",
            notFound: "No encontrado",
            loadingData: "Cargando datos de monitoreo...",
            directModeActivated: "⚡ Modo de carga directa activado",
            aiProcessingEnabled: "🤖 Procesamiento IA habilitado"
        },

        actions: {
            editing: "edición",
            deletion: "eliminación"
        },

        pagination: {
            page: "Página",
            of: "de",
            total: "Total:"
        },

        formatting: {
            today: "Hoy",
            yesterday: "Ayer",
            seconds: "seg",
            minutes: "min",
            hours: "h",
            unknown: "N/D"
        },
        
        days: {
    mon: "Lun",
    tue: "Mar",
    wed: "Mié",
    thu: "Jue",
    fri: "Vie",
    sat: "Sáb",
    sun: "Dom"
}
    },
    
    // 🇫🇷 FRANÇAIS
    fr: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "Paramètres"
        },
        
        databases: {

        
            knowledge_base: "Base de connaissances",

        
            sales_strategies: "Techniques de vente",

        
            contact_capture: "Capture de contacts",

        
            conversation_scenarios: "Scénarios de dialogue",

        
            communication_style: "Style de communication",

        
            interaction_policies: "Politiques d'interaction",

        
            documents: "Données tabulées",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 Enregistrements",
            editor: "✏️ Éditeur",
            monitoring: "📊 Suivi de l'apprentissage"
        },

        filters: {
            databaseLabel: "Base de données:",
            refreshButton: "🔄 Actualiser",
            addButton: "➕ Ajouter",
            quickSearch: "Recherche rapide...",
            exportButton: "📥 Exporter"
        },

        editor: {
            title: "✏️ Éditeur d'enregistrements",
            databaseLabel: "Base de données pour l'écriture:",
            modeLabel: "Mode d'écriture:",
            modes: {
                append: "Compléter la base",
                replace: "Remplacer complètement",
                edit: "Modifier par ID",
                delete: "Supprimer par ID"
            },
            editIdLabel: "ID d'enregistrement pour modification:",
            deleteIdLabel: "ID d'enregistrement pour suppression:",
            idPlaceholder: "Entrez l'ID de l'enregistrement",
            idHint: "💡 Consultez l'ID dans la section \"Enregistrements\" ci-dessus",
            inputTabs: {
                text: "📝 Texte",
                files: "📁 Documents",
                urls: "🔗 Liens"
            },
            contentLabel: "Contenu pour l'écriture:",
            contentPlaceholder: "Collez ici le texte des règles, instructions ou informations...",
            filesLabel: "Télécharger des documents:",
            filesDragText: "📎 Faites glisser les fichiers ici ou cliquez pour sélectionner",
            filesSupported: "Pris en charge: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "Ajouter des liens pour analyse:",
            urlsHint: "💡 L'IA extraira les informations clés des pages web et les ajoutera à la base de connaissances",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ Ajouter un lien",
            removeUrlButton: "Supprimer",
            writeButton: "💾 Écrire dans la base",
            clearButton: "🗑️ Effacer",
            loadingText: "Traitement et écriture des données...",
            fullButton: "⚡ FULL - Écrire Entier",
        fullButtonTooltip: "Ajouter la commande [FULL] pour écrire le texte en entier sans division",
        fullAlreadyAdded: "Commande [FULL] déjà ajoutée",
        fullEnterText: "Veuillez d'abord saisir le texte",
        fullSuccess: "Commande [FULL] ajoutée ! Le texte sera écrit en entier",
        aiProcessing: "Traitement IA du contenu",
        aiProcessingHint: "Traiter via l'agent IA avant le téléchargement",
        directModeHint: "⚡ Mode direct: le contenu sera téléchargé directement sans traitement IA"
        },

        records: {
            title: "📚 Base de données",
            emptyTitle: "🔭 Base de données vide",
            emptyText: "Cliquez sur \"➕ Ajouter\" pour créer le premier enregistrement",
            recordNumber: "Enregistrement",
            created: "Créé:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "Modifier",
            deleteTooltip: "Supprimer",
            loading: "Chargement des données...",
            placeholder: {
            title: "Sélectionnez une base de données",
            subtitle: "Cliquez sur \"🔄 Actualiser\" pour charger les données"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 Aperçu",
                current: "🔄 Cycle actuel",
                history: "📅 Historique",
                analytics: "📈 Analytique"
            },
            periods: {
    days7: "7 jours",
    days30: "30 jours",
    months3: "3 mois"
},
            stats: {
                totalCycles: "Total cycles d'apprentissage",
                totalDialogs: "Dialogues traités",
                approvedUpdates: "Mises à jour approuvées",
                rejectedUpdates: "Règles rejetées",
                successRate: "taux de réussite",
                avgPriority: "Priorité moyenne des règles",
                avgCycleTime: "Pourcentage de réussite",
                mostActiveTable: "Table la plus active",
                change24h: "dans les dernières 24h",
                changeLastCycle: "dans le dernier cycle",
                percentSuccess: "taux de réussite",
                percentOfTotal: "du total"
            },
            current: {
                statusTitle: "État du cycle actuel",
                running: "🔄 En cours",
                completed: "✅ Terminé",
                started: "Commencé:",
                dialogs: "Dialogues traités:",
                workflowId: "ID de flux de travail:",
                completedAt: "Terminé:",
                recentActions: "🕐 Actions récentes",
                table: "Table:"
            },
            history: {
                title: "📜 Historique des mises à jour",
                filterAll: "Tous",
                filterApproved: "Approuvés",
                filterRejected: "Rejetés",
                columns: {
                    time: "Temps",
                    type: "Type",
                    action: "Action",
                    table: "Table",
                    status: "Statut",
                    priority: "Priorité",
                    content: "Contenu"
                },
                statusApplied: "Appliqué",
                statusRejected: "Rejeté",
                viewContent: "🔄 Voir",
                copyButton: "🔋 Copier",
                reasonLabel: "Raison:",
                problemLabel: "Problème résolu:",
                contentLabel: "Contenu du changement:",
                infoTitle: "📊 Informations sur le changement"
            },
            charts: {
                activity: "📈 Activité d'apprentissage des 7 derniers jours",
                statusDistribution: "🎯 Distribution des mises à jour",
                typeDistribution: "📊 Types de changements",
                changeCount: "Nombre de changements",
                efficiency: "📊 Efficacité d'apprentissage par jours",
                heatmap: "🎨 Carte thermique d'activité par heures",
                approved: "Approuvés",
                rejected: "Rejetés",
                addAction: "Ajout",
                editAction: "Modification",
                deleteAction: "Suppression"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ Confirmation de suppression",
                deleteRecord: "Êtes-vous sûr de vouloir supprimer l'enregistrement ID: {id}?",
                deleteFromTable: "Êtes-vous sûr de vouloir supprimer l'enregistrement ID: {id} de la table {table}?",
                cancelButton: "Annuler",
                confirmButton: "Supprimer"
            }
        },

        notifications: {
            recordDeleted: "Enregistrement ID: {id} supprimé avec succès",
            recordUpdated: "Enregistrement ID: {id} mis à jour avec succès",
            recordAdded: "Enregistrement ajouté avec succès à la base de données",
            databaseReplaced: "Base de données complètement remplacée",
            deleteError: "Erreur lors de la suppression:",
            updateError: "Erreur lors de la mise à jour:",
            connectionError: "Erreur de connexion:",
            operationSuccess: "Opération terminée avec succès",
            pleaseEnterEditId: "Veuillez spécifier l'ID d'enregistrement pour {action}",
            pleaseEnterContent: "Veuillez saisir le contenu pour l'écriture",
            fileTooBig: "Fichier \"{name}\" trop volumineux. Maximum: 10MB",
            totalSizeExceeded: "Limite totale de taille de fichiers dépassée (50MB)",
            fileNotSupported: "Fichier \"{name}\" non pris en charge. Autorisés: fichiers PDF, TXT, DOCX, XLSX, XLS, CSV.",
            fileAlreadyUploaded: "Fichier \"{name}\" déjà téléchargé",
            fileUploaded: "Fichier \"{name}\" téléchargé avec succès",
            fileReadError: "Erreur lors de la lecture du fichier \"{name}\"",
            dataExported: "Données exportées",
            noDataToExport: "Aucune donnée à exporter",
            copiedToClipboard: "Copié dans le presse-papiers",
            unknownError: "Erreur inconnue",
            notFound: "Non trouvé",
            loadingData: "Chargement des données de surveillance...",
            directModeActivated: "⚡ Mode de téléchargement direct activé",
            aiProcessingEnabled: "🤖 Traitement IA activé"
        },

        actions: {
            editing: "modification",
            deletion: "suppression"
        },

        pagination: {
            page: "Page",
            of: "sur",
            total: "Total:"
        },

        formatting: {
            today: "Aujourd'hui",
            yesterday: "Hier",
            seconds: "sec",
            minutes: "min",
            hours: "h",
            unknown: "N/D"
        },
        days: {
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Jeu",
    fri: "Ven",
    sat: "Sam",
    sun: "Dim"
}
    },

    // 🇩🇪 DEUTSCH
    de: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "Einstellungen"
        },
        
        databases: {

        
            knowledge_base: "Wissensdatenbank",

        
            sales_strategies: "Verkaufstechniken",

        
            contact_capture: "Kontakterfassung",

        
            conversation_scenarios: "Dialogszenarien",

        
            communication_style: "Kommunikationsstil",

        
            interaction_policies: "Interaktionsrichtlinien",

        
            documents: "Tabellendaten",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 Datensätze",
            editor: "✏️ Editor",
            monitoring: "📊 Lernüberwachung"
        },

        filters: {
            databaseLabel: "Datenbank:",
            refreshButton: "🔄 Aktualisieren",
            addButton: "➕ Hinzufügen",
            quickSearch: "Schnellsuche...",
            exportButton: "📥 Exportieren"
        },

        editor: {
            title: "✏️ Datensatz-Editor",
            databaseLabel: "Datenbank zum Schreiben:",
            modeLabel: "Schreibmodus:",
            modes: {
                append: "Datenbank ergänzen",
                replace: "Vollständig ersetzen",
                edit: "Nach ID bearbeiten",
                delete: "Nach ID löschen"
            },
            editIdLabel: "Datensatz-ID zur Bearbeitung:",
            deleteIdLabel: "Datensatz-ID zum Löschen:",
            idPlaceholder: "Datensatz-ID eingeben",
            idHint: "💡 ID im Abschnitt \"Datensätze\" oben überprüfen",
            inputTabs: {
                text: "📝 Text",
                files: "📁 Dokumente",
                urls: "🔗 Links"
            },
            contentLabel: "Inhalt zum Schreiben:",
            contentPlaceholder: "Text von Regeln, Anweisungen oder Informationen hier einfügen...",
            filesLabel: "Dokumente hochladen:",
            filesDragText: "📎 Dateien hierher ziehen oder zum Auswählen klicken",
            filesSupported: "Unterstützt: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "Links zur Analyse hinzufügen:",
            urlsHint: "💡 KI extrahiert wichtige Informationen von Webseiten und fügt sie zur Wissensdatenbank hinzu",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ Link hinzufügen",
            removeUrlButton: "Entfernen",
            writeButton: "💾 In Datenbank schreiben",
            clearButton: "🗑️ Löschen",
            loadingText: "Daten werden verarbeitet und geschrieben...",
            fullButton: "⚡ FULL - Vollständig Schreiben",
        fullButtonTooltip: "Befehl [FULL] hinzufügen, um Text vollständig ohne Aufteilung zu schreiben",
        fullAlreadyAdded: "Befehl [FULL] bereits hinzugefügt",
        fullEnterText: "Bitte geben Sie zuerst Text ein",
        fullSuccess: "Befehl [FULL] hinzugefügt! Text wird vollständig geschrieben",
        aiProcessing: "KI-Inhaltsverarbeitung",
        aiProcessingHint: "Vor dem Hochladen durch KI-Agenten verarbeiten",
        directModeHint: "⚡ Direktmodus: Inhalt wird direkt ohne KI-Verarbeitung hochgeladen"
        },

        records: {
            title: "📚 Datenbank",
            emptyTitle: "🔭 Datenbank ist leer",
            emptyText: "Klicken Sie auf \"➕ Hinzufügen\", um ersten Datensatz zu erstellen",
            recordNumber: "Datensatz",
            created: "Erstellt:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "Bearbeiten",
            deleteTooltip: "Löschen",
            loading: "Daten werden geladen...",
            placeholder: {
            title: "Wählen Sie eine Datenbank aus",
            subtitle: "Klicken Sie auf \"🔄 Aktualisieren\", um Daten zu laden"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 Übersicht",
                current: "🔄 Aktueller Zyklus",
                history: "📅 Historie",
                analytics: "📈 Analytik"
            },
            periods: {
    days7: "7 Tage",
    days30: "30 Tage",
    months3: "3 Monate"
},
            stats: {
                totalCycles: "Gesamte Lernzyklen",
                totalDialogs: "Verarbeitete Dialoge",
                approvedUpdates: "Genehmigte Aktualisierungen",
                rejectedUpdates: "Abgelehnte Regeln",
                successRate: "Erfolgsquote",
                avgPriority: "Durchschnittliche Regelpriorität",
                avgCycleTime: "Erfolgsprozentsatz",
                mostActiveTable: "Aktivste Tabelle",
                change24h: "in den letzten 24h",
                changeLastCycle: "im letzten Zyklus",
                percentSuccess: "Erfolgsquote",
                percentOfTotal: "der Gesamtzahl"
            },
            current: {
                statusTitle: "Status des aktuellen Zyklus",
                running: "🔄 Läuft",
                completed: "✅ Abgeschlossen",
                started: "Gestartet:",
                dialogs: "Verarbeitete Dialoge:",
                workflowId: "Workflow-ID:",
                completedAt: "Abgeschlossen:",
                recentActions: "🕐 Letzte Aktionen",
                table: "Tabelle:"
            },
            history: {
                title: "📜 Aktualisierungsverlauf",
                filterAll: "Alle",
                filterApproved: "Genehmigt",
                filterRejected: "Abgelehnt",
                columns: {
                    time: "Zeit",
                    type: "Typ",
                    action: "Aktion",
                    table: "Tabelle",
                    status: "Status",
                    priority: "Priorität",
                    content: "Inhalt"
                },
                statusApplied: "Angewendet",
                statusRejected: "Abgelehnt",
                viewContent: "🔄 Ansehen",
                copyButton: "🔋 Kopieren",
                reasonLabel: "Grund:",
                problemLabel: "Gelöstes Problem:",
                contentLabel: "Änderungsinhalt:",
                infoTitle: "📊 Änderungsinformationen"
            },
            charts: {
                activity: "📈 Lernaktivität der letzten 7 Tage",
                statusDistribution: "🎯 Aktualisierungsverteilung",
                typeDistribution: "📊 Änderungstypen",
                changeCount: "Anzahl der Änderungen",
                efficiency: "📊 Lerneffizienz nach Tagen",
                heatmap: "🎨 Aktivitäts-Heatmap nach Stunden",
                approved: "Genehmigt",
                rejected: "Abgelehnt",
                addAction: "Hinzufügung",
                editAction: "Bearbeitung",
                deleteAction: "Löschung"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ Löschbestätigung",
                deleteRecord: "Sind Sie sicher, dass Sie Datensatz ID: {id} löschen möchten?",
                deleteFromTable: "Sind Sie sicher, dass Sie Datensatz ID: {id} aus Tabelle {table} löschen möchten?",
                cancelButton: "Abbrechen",
                confirmButton: "Löschen"
            }
        },

        notifications: {
            recordDeleted: "Datensatz ID: {id} erfolgreich gelöscht",
            recordUpdated: "Datensatz ID: {id} erfolgreich aktualisiert",
            recordAdded: "Datensatz erfolgreich zur Datenbank hinzugefügt",
            databaseReplaced: "Datenbank vollständig ersetzt",
            deleteError: "Fehler beim Löschen:",
            updateError: "Fehler beim Aktualisieren:",
            connectionError: "Verbindungsfehler:",
            operationSuccess: "Operation erfolgreich abgeschlossen",
            pleaseEnterEditId: "Bitte geben Sie Datensatz-ID für {action} an",
            pleaseEnterContent: "Bitte geben Sie Inhalt zum Schreiben ein",
            fileTooBig: "Datei \"{name}\" ist zu groß. Maximum: 10MB",
            totalSizeExceeded: "Gesamtdateigrößenlimit überschritten (50MB)",
            fileNotSupported: "Datei \"{name}\" wird nicht unterstützt. Erlaubt: PDF, TXT, DOCX, XLSX, XLS, CSV Dateien.",
            fileAlreadyUploaded: "Datei \"{name}\" bereits hochgeladen",
            fileUploaded: "Datei \"{name}\" erfolgreich hochgeladen",
            fileReadError: "Fehler beim Lesen der Datei \"{name}\"",
            dataExported: "Daten exportiert",
            noDataToExport: "Keine Daten zum Exportieren",
            copiedToClipboard: "In Zwischenablage kopiert",
            unknownError: "Unbekannter Fehler",
            notFound: "Nicht gefunden",
            loadingData: "Überwachungsdaten werden geladen...",
            directModeActivated: "⚡ Direkter Upload-Modus aktiviert",
            aiProcessingEnabled: "🤖 KI-Verarbeitung aktiviert"
        },

        actions: {
            editing: "Bearbeitung",
            deletion: "Löschung"
        },

        pagination: {
            page: "Seite",
            of: "von",
            total: "Gesamt:"
        },

        formatting: {
            today: "Heute",
            yesterday: "Gestern",
            seconds: "Sek",
            minutes: "Min",
            hours: "Std",
            unknown: "N/V"
        },
        days: {
    mon: "Mo",
    tue: "Di",
    wed: "Mi",
    thu: "Do",
    fri: "Fr",
    sat: "Sa",
    sun: "So"
}
    },

    // 🇮🇹 ITALIANO
    it: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "Impostazioni"
        },
        
        databases: {

        
            knowledge_base: "Base di conoscenza",

        
            sales_strategies: "Tecniche di vendita",

        
            contact_capture: "Acquisizione contatti",

        
            conversation_scenarios: "Scenari di dialogo",

        
            communication_style: "Stile di comunicazione",

        
            interaction_policies: "Politiche di interazione",

        
            documents: "Dati tabulati",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 Record",
            editor: "✏️ Editor",
            monitoring: "📊 Monitoraggio apprendimento"
        },

        filters: {
            databaseLabel: "Database:",
            refreshButton: "🔄 Aggiorna",
            addButton: "➕ Aggiungi",
            quickSearch: "Ricerca rapida...",
            exportButton: "📥 Esporta"
        },

        editor: {
            title: "✏️ Editor di record",
            databaseLabel: "Database per scrittura:",
            modeLabel: "Modalità di scrittura:",
            modes: {
                append: "Completa database",
                replace: "Sostituisci completamente",
                edit: "Modifica per ID",
                delete: "Elimina per ID"
            },
            editIdLabel: "ID record per modifica:",
            deleteIdLabel: "ID record per eliminazione:",
            idPlaceholder: "Inserisci ID record",
            idHint: "💡 Controlla ID nella sezione \"Record\" sopra",
            inputTabs: {
                text: "📝 Testo",
                files: "📁 Documenti",
                urls: "🔗 Link"
            },
            contentLabel: "Contenuto per scrittura:",
            contentPlaceholder: "Incolla qui testo di regole, istruzioni o informazioni...",
            filesLabel: "Carica documenti:",
            filesDragText: "📎 Trascina file qui o clicca per selezionare",
            filesSupported: "Supportati: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "Aggiungi link per analisi:",
            urlsHint: "💡 L'IA estrarrà informazioni chiave dalle pagine web e le aggiungerà alla base di conoscenza",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ Aggiungi link",
            removeUrlButton: "Rimuovi",
            writeButton: "💾 Scrivi nel database",
            clearButton: "🗑️ Cancella",
            loadingText: "Elaborazione e scrittura dati...",
            fullButton: "⚡ FULL - Scrivi Intero",
        fullButtonTooltip: "Aggiungi comando [FULL] per scrivere il testo intero senza divisione",
        fullAlreadyAdded: "Comando [FULL] già aggiunto",
        fullEnterText: "Inserisci prima il testo",
        fullSuccess: "Comando [FULL] aggiunto! Il testo sarà scritto intero",
        aiProcessing: "Elaborazione contenuti IA",
        aiProcessingHint: "Elabora tramite agente IA prima del caricamento",
        directModeHint: "⚡ Modalità diretta: il contenuto verrà caricato direttamente senza elaborazione IA"
        },

        records: {
            title: "📚 Database",
            emptyTitle: "🔭 Database vuoto",
            emptyText: "Clicca su \"➕ Aggiungi\" per creare primo record",
            recordNumber: "Record",
            created: "Creato:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "Modifica",
            deleteTooltip: "Elimina",
            loading: "Caricamento dati...",
            placeholder: {
            title: "Seleziona un database",
            subtitle: "Fai clic su \"🔄 Aggiorna\" per caricare i dati"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 Panoramica",
                current: "🔄 Ciclo corrente",
                history: "📅 Cronologia",
                analytics: "📈 Analisi"
            },
            periods: {
    days7: "7 giorni",
    days30: "30 giorni",
    months3: "3 mesi"
},
            stats: {
                totalCycles: "Totale cicli di apprendimento",
                totalDialogs: "Dialoghi elaborati",
                approvedUpdates: "Aggiornamenti approvati",
                rejectedUpdates: "Regole rifiutate",
                successRate: "tasso di successo",
                avgPriority: "Priorità media delle regole",
                avgCycleTime: "Percentuale di successo",
                mostActiveTable: "Tabella più attiva",
                change24h: "nelle ultime 24h",
                changeLastCycle: "nell'ultimo ciclo",
                percentSuccess: "tasso di successo",
                percentOfTotal: "del totale"
            },
            current: {
                statusTitle: "Stato del ciclo corrente",
                running: "🔄 In corso",
                completed: "✅ Completato",
                started: "Iniziato:",
                dialogs: "Dialoghi elaborati:",
                workflowId: "ID flusso di lavoro:",
                completedAt: "Completato:",
                recentActions: "🕐 Azioni recenti",
                table: "Tabella:"
            },
            history: {
                title: "📜 Cronologia aggiornamenti",
                filterAll: "Tutti",
                filterApproved: "Approvati",
                filterRejected: "Rifiutati",
                columns: {
                    time: "Tempo",
                    type: "Tipo",
                    action: "Azione",
                    table: "Tabella",
                    status: "Stato",
                    priority: "Priorità",
                    content: "Contenuto"
                },
                statusApplied: "Applicato",
                statusRejected: "Rifiutato",
                viewContent: "🔄 Visualizza",
                copyButton: "🔋 Copia",
                reasonLabel: "Motivo:",
                problemLabel: "Problema risolto:",
                contentLabel: "Contenuto modifica:",
                infoTitle: "📊 Informazioni modifica"
            },
            charts: {
                activity: "📈 Attività di apprendimento ultimi 7 giorni",
                statusDistribution: "🎯 Distribuzione aggiornamenti",
                typeDistribution: "📊 Tipi di modifiche",
                changeCount: "Numero di modifiche",
                efficiency: "📊 Efficienza apprendimento per giorni",
                heatmap: "🎨 Mappa termica attività per ore",
                approved: "Approvati",
                rejected: "Rifiutati",
                addAction: "Aggiunta",
                editAction: "Modifica",
                deleteAction: "Eliminazione"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ Conferma eliminazione",
                deleteRecord: "Sei sicuro di voler eliminare record ID: {id}?",
                deleteFromTable: "Sei sicuro di voler eliminare record ID: {id} dalla tabella {table}?",
                cancelButton: "Annulla",
                confirmButton: "Elimina"
            }
        },

        notifications: {
            recordDeleted: "Record ID: {id} eliminato con successo",
            recordUpdated: "Record ID: {id} aggiornato con successo",
            recordAdded: "Record aggiunto con successo al database",
            databaseReplaced: "Database completamente sostituito",
            deleteError: "Errore durante eliminazione:",
            updateError: "Errore durante aggiornamento:",
            connectionError: "Errore di connessione:",
            operationSuccess: "Operazione completata con successo",
            pleaseEnterEditId: "Specifica ID record per {action}",
            pleaseEnterContent: "Inserisci contenuto per scrittura",
            fileTooBig: "File \"{name}\" troppo grande. Massimo: 10MB",
            totalSizeExceeded: "Limite totale dimensione file superato (50MB)",
            fileNotSupported: "File \"{name}\" non supportato. Consentiti: file PDF, TXT, DOCX, XLSX, XLS, CSV.",
            fileAlreadyUploaded: "File \"{name}\" già caricato",
            fileUploaded: "File \"{name}\" caricato con successo",
            fileReadError: "Errore lettura file \"{name}\"",
            dataExported: "Dati esportati",
            noDataToExport: "Nessun dato da esportare",
            copiedToClipboard: "Copiato negli appunti",
            unknownError: "Errore sconosciuto",
            notFound: "Non trovato",
            loadingData: "Caricamento dati monitoraggio...",
            directModeActivated: "⚡ Modalità caricamento diretto attivata",
            aiProcessingEnabled: "🤖 Elaborazione IA abilitata"
        },

        actions: {
            editing: "modifica",
            deletion: "eliminazione"
        },

        pagination: {
            page: "Pagina",
            of: "di",
            total: "Totale:"
        },

        formatting: {
            today: "Oggi",
            yesterday: "Ieri",
            seconds: "sec",
            minutes: "min",
            hours: "h",
            unknown: "N/D"
        },
        days: {
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Gio",
    fri: "Ven",
    sat: "Sab",
    sun: "Dom"
}
    },

    // 🇵🇹 PORTUGUÊS
    pt: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "Configurações"
        },
        
        databases: {

        
            knowledge_base: "Base de conhecimento",

        
            sales_strategies: "Técnicas de vendas",

        
            contact_capture: "Captura de contatos",

        
            conversation_scenarios: "Cenários de diálogo",

        
            communication_style: "Estilo de comunicação",

        
            interaction_policies: "Políticas de interação",

        
            documents: "Dados tabulados",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 Registros",
            editor: "✏️ Editor",
            monitoring: "📊 Monitoramento de aprendizagem"
        },

        filters: {
            databaseLabel: "Base de dados:",
            refreshButton: "🔄 Atualizar",
            addButton: "➕ Adicionar",
            quickSearch: "Pesquisa rápida...",
            exportButton: "📥 Exportar"
        },

        editor: {
            title: "✏️ Editor de registros",
            databaseLabel: "Base de dados para escrita:",
            modeLabel: "Modo de escrita:",
            modes: {
                append: "Complementar base",
                replace: "Substituir completamente",
                edit: "Editar por ID",
                delete: "Excluir por ID"
            },
            editIdLabel: "ID de registro para edição:",
            deleteIdLabel: "ID de registro para exclusão:",
            idPlaceholder: "Digite ID do registro",
            idHint: "💡 Consulte ID na seção \"Registros\" acima",
            inputTabs: {
                text: "📝 Texto",
                files: "📁 Documentos",
                urls: "🔗 Links"
            },
            contentLabel: "Conteúdo para escrita:",
            contentPlaceholder: "Cole aqui texto de regras, instruções ou informações...",
            filesLabel: "Carregar documentos:",
            filesDragText: "📎 Arraste arquivos aqui ou clique para selecionar",
            filesSupported: "Suportados: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "Adicionar links para análise:",
            urlsHint: "💡 IA extrairá informações-chave de páginas web e adicionará à base de conhecimento",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ Adicionar link",
            removeUrlButton: "Remover",
            writeButton: "💾 Escrever na base",
            clearButton: "🗑️ Limpar",
            loadingText: "Processando e escrevendo dados...",
            fullButton: "⚡ FULL - Escrever Completo",
        fullButtonTooltip: "Adicionar comando [FULL] para escrever texto completo sem divisão",
        fullAlreadyAdded: "Comando [FULL] já adicionado",
        fullEnterText: "Por favor, insira o texto primeiro",
        fullSuccess: "Comando [FULL] adicionado! O texto será escrito completo",
        aiProcessing: "Processamento de conteúdo com IA",
        aiProcessingHint: "Processar através do agente IA antes do upload",
        directModeHint: "⚡ Modo direto: o conteúdo será enviado diretamente sem processamento IA"
        },

        records: {
            title: "📚 Base de dados",
            emptyTitle: "🔭 Base de dados vazia",
            emptyText: "Clique em \"➕ Adicionar\" para criar primeiro registro",
            recordNumber: "Registro",
            created: "Criado:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "Editar",
            deleteTooltip: "Excluir",
            loading: "Carregando dados...",
            placeholder: {
                title: "Selecione um banco de dados",
                subtitle: "Clique em \"🔄 Atualizar\" para carregar dados"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 Visão geral",
                current: "🔄 Ciclo atual",
                history: "📅 Histórico",
                analytics: "📈 Análise"
            },
            periods: {
    days7: "7 dias",
    days30: "30 dias",
    months3: "3 meses"
},
            stats: {
                totalCycles: "Total de ciclos de aprendizagem",
                totalDialogs: "Diálogos processados",
                approvedUpdates: "Atualizações aprovadas",
                rejectedUpdates: "Regras rejeitadas",
                successRate: "taxa de sucesso",
                avgPriority: "Prioridade média das regras",
                avgCycleTime: "Porcentagem de sucesso",
                mostActiveTable: "Tabela mais ativa",
                change24h: "nas últimas 24h",
                changeLastCycle: "no último ciclo",
                percentSuccess: "taxa de sucesso",
                percentOfTotal: "do total"
            },
            current: {
                statusTitle: "Status do ciclo atual",
                running: "🔄 Em andamento",
                completed: "✅ Concluído",
                started: "Iniciado:",
                dialogs: "Diálogos processados:",
                workflowId: "ID do fluxo de trabalho:",
                completedAt: "Concluído:",
                recentActions: "🕐 Ações recentes",
                table: "Tabela:"
            },
            history: {
                title: "📜 Histórico de atualizações",
                filterAll: "Todos",
                filterApproved: "Aprovados",
                filterRejected: "Rejeitados",
                columns: {
                    time: "Tempo",
                    type: "Tipo",
                    action: "Ação",
                    table: "Tabela",
                    status: "Status",
                    priority: "Prioridade",
                    content: "Conteúdo"
                },
                statusApplied: "Aplicado",
                statusRejected: "Rejeitado",
                viewContent: "🔄 Visualizar",
                copyButton: "🔋 Copiar",
                reasonLabel: "Motivo:",
                problemLabel: "Problema resolvido:",
                contentLabel: "Conteúdo da alteração:",
                infoTitle: "📊 Informações da alteração"
            },
            charts: {
                activity: "📈 Atividade de aprendizagem dos últimos 7 dias",
                statusDistribution: "🎯 Distribuição de atualizações",
                typeDistribution: "📊 Tipos de alterações",
                changeCount: "Número de alterações",
                efficiency: "📊 Eficiência de aprendizagem por dias",
                heatmap: "🎨 Mapa de calor de atividade por horas",
                approved: "Aprovados",
                rejected: "Rejeitados",
                addAction: "Adição",
                editAction: "Edição",
                deleteAction: "Exclusão"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ Confirmação de exclusão",
                deleteRecord: "Tem certeza de que deseja excluir registro ID: {id}?",
                deleteFromTable: "Tem certeza de que deseja excluir registro ID: {id} da tabela {table}?",
                cancelButton: "Cancelar",
                confirmButton: "Excluir"
            }
        },

        notifications: {
            recordDeleted: "Registro ID: {id} excluído com sucesso",
            recordUpdated: "Registro ID: {id} atualizado com sucesso",
            recordAdded: "Registro adicionado com sucesso ao banco de dados",
            databaseReplaced: "Banco de dados completamente substituído",
            deleteError: "Erro ao excluir:",
            updateError: "Erro ao atualizar:",
            connectionError: "Erro de conexão:",
            operationSuccess: "Operação concluída com sucesso",
            pleaseEnterEditId: "Especifique ID do registro para {action}",
            pleaseEnterContent: "Insira conteúdo para escrita",
            fileTooBig: "Arquivo \"{name}\" muito grande. Máximo: 10MB",
            totalSizeExceeded: "Limite total de tamanho de arquivos excedido (50MB)",
            fileNotSupported: "Arquivo \"{name}\" não suportado. Permitidos: arquivos PDF, TXT, DOCX, XLSX, XLS, CSV.",
            fileAlreadyUploaded: "Arquivo \"{name}\" já carregado",
            fileUploaded: "Arquivo \"{name}\" carregado com sucesso",
            fileReadError: "Erro ao ler arquivo \"{name}\"",
            dataExported: "Dados exportados",
            noDataToExport: "Nenhum dado para exportar",
            copiedToClipboard: "Copiado para área de transferência",
            unknownError: "Erro desconhecido",
            notFound: "Não encontrado",
            loadingData: "Carregando dados de monitoramento...",
            directModeActivated: "⚡ Modo de upload direto ativado",
            aiProcessingEnabled: "🤖 Processamento IA ativado"
        },

        actions: {
            editing: "edição",
            deletion: "exclusão"
        },

        pagination: {
            page: "Página",
            of: "de",
            total: "Total:"
        },

        formatting: {
            today: "Hoje",
            yesterday: "Ontem",
            seconds: "seg",
            minutes: "min",
            hours: "h",
            unknown: "N/D"
        },
        days: {
    mon: "Seg",
    tue: "Ter",
    wed: "Qua",
    thu: "Qui",
    fri: "Sex",
    sat: "Sáb",
    sun: "Dom"
}
    },
    
   // 🇨🇳 中文 (КИТАЙСКИЙ)
    zh: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "设置"
        },
        
        databases: {

        
            knowledge_base: "知识库",

        
            sales_strategies: "销售技巧",

        
            contact_capture: "联系人捕获",

        
            conversation_scenarios: "对话场景",

        
            communication_style: "沟通风格",

        
            interaction_policies: "互动政策",

        
            documents: "表格数据",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 记录",
            editor: "✏️ 编辑器",
            monitoring: "📊 学习监控"
        },

        filters: {
            databaseLabel: "数据库：",
            refreshButton: "🔄 刷新",
            addButton: "➕ 添加",
            quickSearch: "快速搜索...",
            exportButton: "📥 导出"
        },

        editor: {
            title: "✏️ 记录编辑器",
            databaseLabel: "写入数据库：",
            modeLabel: "写入模式：",
            modes: {
                append: "补充数据库",
                replace: "完全替换",
                edit: "按ID编辑",
                delete: "按ID删除"
            },
            editIdLabel: "编辑记录ID：",
            deleteIdLabel: "删除记录ID：",
            idPlaceholder: "输入记录ID",
            idHint: "💡 在上面的记录部分查看ID",
            inputTabs: {
                text: "📝 文本",
                files: "📁 文档",
                urls: "🔗 链接"
            },
            contentLabel: "写入内容：",
            contentPlaceholder: "在此粘贴规则、说明或信息文本...",
            filesLabel: "上传文档：",
            filesDragText: "📎 将文件拖到此处或点击选择",
            filesSupported: "支持：PDF、TXT、DOCX、XLSX、XLS、CSV",
            urlsLabel: "添加分析链接：",
            urlsHint: "💡 AI将从网页中提取关键信息并添加到知识库",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ 添加链接",
            removeUrlButton: "删除",
            writeButton: "💾 写入数据库",
            clearButton: "🗑️ 清除",
            loadingText: "处理和写入数据中...",
            fullButton: "⚡ FULL - 完整写入",
        fullButtonTooltip: "添加[FULL]命令以完整写入文本而不分割",
        fullAlreadyAdded: "[FULL]命令已添加",
        fullEnterText: "请先输入文本",
        fullSuccess: "[FULL]命令已添加！文本将完整写入",
        aiProcessing: "AI内容处理",
        aiProcessingHint: "上传前通过AI代理处理",
        directModeHint: "⚡ 直接模式：内容将直接上传，无需AI处理"
        },

        records: {
            title: "📚 数据库",
            emptyTitle: "🔭 数据库为空",
            emptyText: "点击➕添加创建第一条记录",
            recordNumber: "记录",
            created: "创建时间：",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "编辑",
            deleteTooltip: "删除",
            loading: "加载数据中...",
            placeholder: {
                title: "选择数据库",
                subtitle: "点击 🔄 刷新 加载数据"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 概览",
                current: "🔄 当前周期",
                history: "📅 历史",
                analytics: "📈 分析"
            },
            periods: {
    days7: "7天",
    days30: "30天",
    months3: "3个月"
},
            stats: {
                totalCycles: "总学习周期",
                totalDialogs: "已处理对话",
                approvedUpdates: "已批准更新",
                rejectedUpdates: "已拒绝规则",
                successRate: "成功率",
                avgPriority: "平均规则优先级",
                avgCycleTime: "成功百分比",
                mostActiveTable: "最活跃的表",
                change24h: "过去24小时",
                changeLastCycle: "上一个周期",
                percentSuccess: "成功率",
                percentOfTotal: "占总数"
            },
            current: {
                statusTitle: "当前周期状态",
                running: "🔄 进行中",
                completed: "✅ 已完成",
                started: "开始时间：",
                dialogs: "已处理对话：",
                workflowId: "工作流ID：",
                completedAt: "完成时间：",
                recentActions: "🕐 最近操作",
                table: "表格："
            },
            history: {
                title: "📜 更新历史",
                filterAll: "全部",
                filterApproved: "已批准",
                filterRejected: "已拒绝",
                columns: {
                    time: "时间",
                    type: "类型",
                    action: "操作",
                    table: "表",
                    status: "状态",
                    priority: "优先级",
                    content: "内容"
                },
                statusApplied: "已应用",
                statusRejected: "已拒绝",
                viewContent: "🔄 查看",
                copyButton: "🔋 复制",
                reasonLabel: "原因：",
                problemLabel: "解决的问题：",
                contentLabel: "更改内容：",
                infoTitle: "📊 更改信息"
            },
            charts: {
                activity: "📈 最近7天学习活动",
                statusDistribution: "🎯 更新分布",
                typeDistribution: "📊 更改类型",
                changeCount: "更改数量",
                efficiency: "📊 按天的学习效率",
                heatmap: "🎨 按小时的活动热图",
                approved: "已批准",
                rejected: "已拒绝",
                addAction: "添加",
                editAction: "编辑",
                deleteAction: "删除"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ 删除确认",
                deleteRecord: "确定要删除记录ID：{id}吗？",
                deleteFromTable: "确定要从表{table}中删除记录ID：{id}吗？",
                cancelButton: "取消",
                confirmButton: "删除"
            }
        },

        notifications: {
            recordDeleted: "记录ID：{id}已成功删除",
            recordUpdated: "记录ID：{id}已成功更新",
            recordAdded: "记录已成功添加到数据库",
            databaseReplaced: "数据库已完全替换",
            deleteError: "删除时出错：",
            updateError: "更新时出错：",
            connectionError: "连接错误：",
            operationSuccess: "操作成功完成",
            pleaseEnterEditId: "请指定用于{action}的记录ID",
            pleaseEnterContent: "请输入写入内容",
            fileTooBig: "文件{name}太大。最大：10MB",
            totalSizeExceeded: "超出文件总大小限制（50MB）",
            fileNotSupported: "不支持文件{name}。允许：PDF、TXT、DOCX、XLSX、XLS、CSV文件。",
            fileAlreadyUploaded: "文件{name}已上传",
            fileUploaded: "文件{name}已成功上传",
            fileReadError: "读取文件{name}时出错",
            dataExported: "数据已导出",
            noDataToExport: "没有要导出的数据",
            copiedToClipboard: "已复制到剪贴板",
            unknownError: "未知错误",
            notFound: "未找到",
            loadingData: "加载监控数据中...",
            directModeActivated: "⚡ 直接上传模式已激活",
            aiProcessingEnabled: "🤖 AI处理已启用"
        },

        actions: {
            editing: "编辑",
            deletion: "删除"
        },

        pagination: {
            page: "页",
            of: "共",
            total: "总计："
        },

        formatting: {
            today: "今天",
            yesterday: "昨天",
            seconds: "秒",
            minutes: "分钟",
            hours: "小时",
            unknown: "不适用"
        },
        days: {
    mon: "周一",
    tue: "周二",
    wed: "周三",
    thu: "周四",
    fri: "周五",
    sat: "周六",
    sun: "周日"
}
    },

    // 🇯🇵 日本語 (ЯПОНСКИЙ)
    ja: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "設定"
        },
        
        databases: {

        
            knowledge_base: "ナレッジベース",

        
            sales_strategies: "営業テクニック",

        
            contact_capture: "連絡先取得",

        
            conversation_scenarios: "会話シナリオ",

        
            communication_style: "コミュニケーションスタイル",

        
            interaction_policies: "インタラクションポリシー",

        
            documents: "表形式データ",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 レコード",
            editor: "✏️ エディター",
            monitoring: "📊 学習モニタリング"
        },

        filters: {
            databaseLabel: "データベース：",
            refreshButton: "🔄 更新",
            addButton: "➕ 追加",
            quickSearch: "クイック検索...",
            exportButton: "📥 エクスポート"
        },

        editor: {
            title: "✏️ レコードエディター",
            databaseLabel: "書き込むデータベース：",
            modeLabel: "書き込みモード：",
            modes: {
                append: "データベースに追加",
                replace: "完全に置き換え",
                edit: "IDで編集",
                delete: "IDで削除"
            },
            editIdLabel: "編集するレコードID：",
            deleteIdLabel: "削除するレコードID：",
            idPlaceholder: "レコードIDを入力",
            idHint: "💡 上の「レコード」セクションでIDを確認",
            inputTabs: {
                text: "📝 テキスト",
                files: "📁 ドキュメント",
                urls: "🔗 リンク"
            },
            contentLabel: "書き込むコンテンツ：",
            contentPlaceholder: "ルール、指示、または情報のテキストをここに貼り付けてください...",
            filesLabel: "ドキュメントをアップロード：",
            filesDragText: "📎 ファイルをここにドラッグするか、クリックして選択",
            filesSupported: "サポート：PDF、TXT、DOCX、XLSX、XLS、CSV",
            urlsLabel: "分析用リンクを追加：",
            urlsHint: "💡 AIがウェブページから重要な情報を抽出し、ナレッジベースに追加します",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ リンクを追加",
            removeUrlButton: "削除",
            writeButton: "💾 データベースに書き込む",
            clearButton: "🗑️ クリア",
            loadingText: "データの処理と書き込み中...",
            fullButton: "⚡ FULL - 完全書き込み",
        fullButtonTooltip: "[FULL]コマンドを追加してテキストを分割せずに完全に書き込む",
        fullAlreadyAdded: "[FULL]コマンドは既に追加されています",
        fullEnterText: "まずテキストを入力してください",
        fullSuccess: "[FULL]コマンドが追加されました！テキストは完全に書き込まれます",
        aiProcessing: "AIコンテンツ処理",
        aiProcessingHint: "アップロード前にAIエージェントで処理",
        directModeHint: "⚡ ダイレクトモード：AI処理なしで直接アップロード"
        },

        records: {
            title: "📚 データベース",
            emptyTitle: "🔭 データベースは空です",
            emptyText: "「➕ 追加」をクリックして最初のレコードを作成",
            recordNumber: "レコード",
            created: "作成日：",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "編集",
            deleteTooltip: "削除",
            loading: "データ読み込み中...",
            placeholder: {
                title: "データベースを選択",
                subtitle: "「🔄 更新」をクリックしてデータを読み込む"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 概要",
                current: "🔄 現在のサイクル",
                history: "📅 履歴",
                analytics: "📈 分析"
            },
            periods: {
    days7: "7日間",
    days30: "30日間",
    months3: "3ヶ月"
},
            stats: {
                totalCycles: "総学習サイクル",
                totalDialogs: "処理された会話",
                approvedUpdates: "承認された更新",
                rejectedUpdates: "拒否されたルール",
                successRate: "成功率",
                avgPriority: "平均ルール優先度",
                avgCycleTime: "成功パーセンテージ",
                mostActiveTable: "最もアクティブなテーブル",
                change24h: "過去24時間",
                changeLastCycle: "前回のサイクル",
                percentSuccess: "成功率",
                percentOfTotal: "全体の"
            },
            current: {
                statusTitle: "現在のサイクルステータス",
                running: "🔄 実行中",
                completed: "✅ 完了",
                started: "開始：",
                dialogs: "処理された会話：",
                workflowId: "ワークフローID：",
                completedAt: "完了：",
                recentActions: "🕐 最近のアクション",
                table: "テーブル："
            },
            history: {
                title: "📜 更新履歴",
                filterAll: "すべて",
                filterApproved: "承認済み",
                filterRejected: "拒否済み",
                columns: {
                    time: "時間",
                    type: "タイプ",
                    action: "アクション",
                    table: "テーブル",
                    status: "ステータス",
                    priority: "優先度",
                    content: "コンテンツ"
                },
                statusApplied: "適用済み",
                statusRejected: "拒否済み",
                viewContent: "🔄 表示",
                copyButton: "🔋 コピー",
                reasonLabel: "理由：",
                problemLabel: "解決された問題：",
                contentLabel: "変更内容：",
                infoTitle: "📊 変更情報"
            },
            charts: {
                activity: "📈 過去7日間の学習活動",
                statusDistribution: "🎯 更新の分布",
                typeDistribution: "📊 変更タイプ",
                changeCount: "変更数",
                efficiency: "📊 日ごとの学習効率",
                heatmap: "🎨 時間ごとの活動ヒートマップ",
                approved: "承認済み",
                rejected: "拒否済み",
                addAction: "追加",
                editAction: "編集",
                deleteAction: "削除"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ 削除の確認",
                deleteRecord: "レコードID：{id}を削除してもよろしいですか？",
                deleteFromTable: "テーブル{table}からレコードID：{id}を削除してもよろしいですか？",
                cancelButton: "キャンセル",
                confirmButton: "削除"
            }
        },

        notifications: {
            recordDeleted: "レコードID：{id}が正常に削除されました",
            recordUpdated: "レコードID：{id}が正常に更新されました",
            recordAdded: "レコードがデータベースに正常に追加されました",
            databaseReplaced: "データベースが完全に置き換えられました",
            deleteError: "削除エラー：",
            updateError: "更新エラー：",
            connectionError: "接続エラー：",
            operationSuccess: "操作が正常に完了しました",
            pleaseEnterEditId: "{action}のレコードIDを指定してください",
            pleaseEnterContent: "書き込むコンテンツを入力してください",
            fileTooBig: "ファイル「{name}」が大きすぎます。最大：10MB",
            totalSizeExceeded: "ファイルの総サイズ制限を超えています（50MB）",
            fileNotSupported: "ファイル「{name}」はサポートされていません。許可：PDF、TXT、DOCX、XLSX、XLS、CSVファイル。",
            fileAlreadyUploaded: "ファイル「{name}」は既にアップロードされています",
            fileUploaded: "ファイル「{name}」が正常にアップロードされました",
            fileReadError: "ファイル「{name}」の読み取りエラー",
            dataExported: "データがエクスポートされました",
            noDataToExport: "エクスポートするデータがありません",
            copiedToClipboard: "クリップボードにコピーされました",
            unknownError: "不明なエラー",
            notFound: "見つかりません",
            loadingData: "モニタリングデータを読み込み中...",
            directModeActivated: "⚡ ダイレクトアップロードモード有効",
            aiProcessingEnabled: "🤖 AI処理が有効"
        },

        actions: {
            editing: "編集",
            deletion: "削除"
        },

        pagination: {
            page: "ページ",
            of: "/",
            total: "合計："
        },

        formatting: {
            today: "今日",
            yesterday: "昨日",
            seconds: "秒",
            minutes: "分",
            hours: "時間",
            unknown: "該当なし"
        },
        days: {
    mon: "月",
    tue: "火",
    wed: "水",
    thu: "木",
    fri: "金",
    sat: "土",
    sun: "日"
}
    },

    // 🇰🇷 한국어 (КОРЕЙСКИЙ)
    ko: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "설정"
        },
        
        databases: {

        
            knowledge_base: "지식 베이스",

        
            sales_strategies: "판매 기법",

        
            contact_capture: "연락처 수집",

        
            conversation_scenarios: "대화 시나리오",

        
            communication_style: "커뮤니케이션 스타일",

        
            interaction_policies: "상호작용 정책",

        
            documents: "표 형식 데이터",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 레코드",
            editor: "✏️ 편집기",
            monitoring: "📊 학습 모니터링"
        },

        filters: {
            databaseLabel: "데이터베이스:",
            refreshButton: "🔄 새로고침",
            addButton: "➕ 추가",
            quickSearch: "빠른 검색...",
            exportButton: "📥 내보내기"
        },

        editor: {
            title: "✏️ 레코드 편집기",
            databaseLabel: "쓰기 데이터베이스:",
            modeLabel: "쓰기 모드:",
            modes: {
                append: "데이터베이스에 추가",
                replace: "완전히 교체",
                edit: "ID로 편집",
                delete: "ID로 삭제"
            },
            editIdLabel: "편집할 레코드 ID:",
            deleteIdLabel: "삭제할 레코드 ID:",
            idPlaceholder: "레코드 ID 입력",
            idHint: "💡 위 \"레코드\" 섹션에서 ID 확인",
            inputTabs: {
                text: "📝 텍스트",
                files: "📁 문서",
                urls: "🔗 링크"
            },
            contentLabel: "쓸 내용:",
            contentPlaceholder: "규칙, 지침 또는 정보 텍스트를 여기에 붙여넣으세요...",
            filesLabel: "문서 업로드:",
            filesDragText: "📎 파일을 여기로 드래그하거나 클릭하여 선택",
            filesSupported: "지원: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "분석용 링크 추가:",
            urlsHint: "💡 AI가 웹 페이지에서 주요 정보를 추출하여 지식 베이스에 추가합니다",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ 링크 추가",
            removeUrlButton: "제거",
            writeButton: "💾 데이터베이스에 쓰기",
            clearButton: "🗑️ 지우기",
            loadingText: "데이터 처리 및 쓰기 중...",
            fullButton: "⚡ FULL - 전체 쓰기",
        fullButtonTooltip: "[FULL] 명령을 추가하여 텍스트를 분할하지 않고 전체로 작성",
        fullAlreadyAdded: "[FULL] 명령이 이미 추가되었습니다",
        fullEnterText: "먼저 텍스트를 입력하세요",
        fullSuccess: "[FULL] 명령이 추가되었습니다! 텍스트가 전체로 작성됩니다",
        aiProcessing: "AI 콘텐츠 처리",
        aiProcessingHint: "업로드 전 AI 에이전트를 통해 처리",
        directModeHint: "⚡ 직접 모드: AI 처리 없이 직접 업로드됩니다"
        },

        records: {
            title: "📚 데이터베이스",
            emptyTitle: "🔭 데이터베이스가 비어 있습니다",
            emptyText: "\"➕ 추가\"를 클릭하여 첫 번째 레코드 생성",
            recordNumber: "레코드",
            created: "생성일:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "편집",
            deleteTooltip: "삭제",
            loading: "데이터 로드 중...",
            placeholder: {
                title: "데이터베이스 선택",
                subtitle: "\"🔄 새로고침\"을 클릭하여 데이터 로드"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 개요",
                current: "🔄 현재 주기",
                history: "📅 기록",
                analytics: "📈 분석"
            },
            periods: {
    days7: "7일",
    days30: "30일",
    months3: "3개월"
},
            stats: {
                totalCycles: "총 학습 주기",
                totalDialogs: "처리된 대화",
                approvedUpdates: "승인된 업데이트",
                rejectedUpdates: "거부된 규칙",
                successRate: "성공률",
                avgPriority: "평균 규칙 우선순위",
                avgCycleTime: "성공 비율",
                mostActiveTable: "가장 활성화된 테이블",
                change24h: "지난 24시간",
                changeLastCycle: "마지막 주기",
                percentSuccess: "성공률",
                percentOfTotal: "전체 중"
            },
            current: {
                statusTitle: "현재 주기 상태",
                running: "🔄 진행 중",
                completed: "✅ 완료",
                started: "시작:",
                dialogs: "처리된 대화:",
                workflowId: "워크플로 ID:",
                completedAt: "완료:",
                recentActions: "🕐 최근 작업",
                table: "테이블:"
            },
            history: {
                title: "📜 업데이트 기록",
                filterAll: "모두",
                filterApproved: "승인됨",
                filterRejected: "거부됨",
                columns: {
                    time: "시간",
                    type: "유형",
                    action: "작업",
                    table: "테이블",
                    status: "상태",
                    priority: "우선순위",
                    content: "내용"
                },
                statusApplied: "적용됨",
                statusRejected: "거부됨",
                viewContent: "🔄 보기",
                copyButton: "🔋 복사",
                reasonLabel: "이유:",
                problemLabel: "해결된 문제:",
                contentLabel: "변경 내용:",
                infoTitle: "📊 변경 정보"
            },
            charts: {
                activity: "📈 지난 7일간 학습 활동",
                statusDistribution: "🎯 업데이트 분포",
                typeDistribution: "📊 변경 유형",
                changeCount: "변경 횟수",
                efficiency: "📊 일별 학습 효율성",
                heatmap: "🎨 시간별 활동 히트맵",
                approved: "승인됨",
                rejected: "거부됨",
                addAction: "추가",
                editAction: "편집",
                deleteAction: "삭제"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ 삭제 확인",
                deleteRecord: "레코드 ID: {id}를 삭제하시겠습니까?",
                deleteFromTable: "테이블 {table}에서 레코드 ID: {id}를 삭제하시겠습니까?",
                cancelButton: "취소",
                confirmButton: "삭제"
            }
        },

        notifications: {
            recordDeleted: "레코드 ID: {id}가 성공적으로 삭제되었습니다",
            recordUpdated: "레코드 ID: {id}가 성공적으로 업데이트되었습니다",
            recordAdded: "레코드가 데이터베이스에 성공적으로 추가되었습니다",
            databaseReplaced: "데이터베이스가 완전히 교체되었습니다",
            deleteError: "삭제 오류:",
            updateError: "업데이트 오류:",
            connectionError: "연결 오류:",
            operationSuccess: "작업이 성공적으로 완료되었습니다",
            pleaseEnterEditId: "{action}을 위한 레코드 ID를 지정하세요",
            pleaseEnterContent: "쓸 내용을 입력하세요",
            fileTooBig: "파일 \"{name}\"이(가) 너무 큽니다. 최대: 10MB",
            totalSizeExceeded: "총 파일 크기 제한 초과 (50MB)",
            fileNotSupported: "파일 \"{name}\"은(는) 지원되지 않습니다. 허용: PDF, TXT, DOCX, XLSX, XLS, CSV 파일.",
            fileAlreadyUploaded: "파일 \"{name}\"이(가) 이미 업로드되었습니다",
            fileUploaded: "파일 \"{name}\"이(가) 성공적으로 업로드되었습니다",
            fileReadError: "파일 \"{name}\" 읽기 오류",
            dataExported: "데이터가 내보내졌습니다",
            noDataToExport: "내보낼 데이터가 없습니다",
            copiedToClipboard: "클립보드에 복사되었습니다",
            unknownError: "알 수 없는 오류",
            notFound: "찾을 수 없음",
            loadingData: "모니터링 데이터 로드 중...",
            directModeActivated: "⚡ 직접 업로드 모드 활성화",
            aiProcessingEnabled: "🤖 AI 처리 활성화"
        },

        actions: {
            editing: "편집",
            deletion: "삭제"
        },

        pagination: {
            page: "페이지",
            of: "/",
            total: "전체:"
        },

        formatting: {
            today: "오늘",
            yesterday: "어제",
            seconds: "초",
            minutes: "분",
            hours: "시간",
            unknown: "해당 없음"
        },
        days: {
    mon: "월",
    tue: "화",
    wed: "수",
    thu: "목",
    fri: "금",
    sat: "토",
    sun: "일"
}
    },

    // 🇺🇦 УКРАЇНСЬКА (УКРАИНСКИЙ)
    ua: {
        header: {
            title: "Vector Base Manager Pro",
            version: "v3.0",
            settings: "Налаштування"
        },
        
        databases: {

        
            knowledge_base: "База знань",

        
            sales_strategies: "Техніки продажу",

        
            contact_capture: "Захоплення контактів",

        
            conversation_scenarios: "Сценарії діалогів",

        
            communication_style: "Стиль спілкування",

        
            interaction_policies: "Політики взаємодії",

        
            documents: "Табульовані дані",

        
            knowledge_base_en: "Knowledge Base En",

        
            sales_strategies_en: "Sales Strategies En",

        
            contact_capture_en: "Contact Capture En",

        
            conversation_scenarios_en: "Conversation Scenarios En",

        
            communication_style_en: "Communication Style En",

        
            interaction_policies_en: "Interaction Policies En"

        
            },

        tabs: {
            records: "📄 Записи",
            editor: "✏️ Редактор",
            monitoring: "📊 Моніторинг навчання"
        },

        filters: {
            databaseLabel: "База даних:",
            refreshButton: "🔄 Оновити",
            addButton: "➕ Додати",
            quickSearch: "Швидкий пошук...",
            exportButton: "📥 Експорт"
        },

        editor: {
            title: "✏️ Редактор записів",
            databaseLabel: "База даних для запису:",
            modeLabel: "Режим запису:",
            modes: {
                append: "Доповнити базу",
                replace: "Замінити повністю",
                edit: "Редагувати за ID",
                delete: "Видалити за ID"
            },
            editIdLabel: "ID запису для редагування:",
            deleteIdLabel: "ID запису для видалення:",
            idPlaceholder: "Введіть ID запису",
            idHint: "💡 Перегляньте ID в розділі \"Записи\" вище",
            inputTabs: {
                text: "📝 Текст",
                files: "📁 Документи",
                urls: "🔗 Посилання"
            },
            contentLabel: "Вміст для запису:",
            contentPlaceholder: "Вставте сюди текст правил, інструкцій або інформації...",
            filesLabel: "Завантажте документи:",
            filesDragText: "📎 Перетягніть файли сюди або натисніть для вибору",
            filesSupported: "Підтримуються: PDF, TXT, DOCX, XLSX, XLS, CSV",
            urlsLabel: "Додайте посилання для аналізу:",
            urlsHint: "💡 AI витягне ключову інформацію з веб-сторінок і додасть до бази знань",
            urlPlaceholder: "https://example.com/article",
            addUrlButton: "+ Додати посилання",
            removeUrlButton: "Видалити",
            writeButton: "💾 Записати в базу",
            clearButton: "🗑️ Очистити",
            loadingText: "Обробка та запис даних...",
            fullButton: "⚡ FULL - Записати цілком",
        fullButtonTooltip: "Додати команду [FULL] для запису тексту цілком без поділу",
        fullAlreadyAdded: "Команду [FULL] вже додано",
        fullEnterText: "Будь ласка, спочатку введіть текст",
        fullSuccess: "Команду [FULL] додано! Текст буде записано цілком",
        aiProcessing: "AI-обробка контенту",
        aiProcessingHint: "Обробити через AI агента перед завантаженням",
        directModeHint: "⚡ Режим прямого завантаження: контент буде записаний напряму без AI-обробки"
        },

        records: {
            title: "📚 База даних",
            emptyTitle: "🔭 База даних порожня",
            emptyText: "Натисніть \"➕ Додати\" щоб створити перший запис",
            recordNumber: "Запис",
            created: "Створено:",
            editButton: "✏️",
            deleteButton: "🗑️",
            editTooltip: "Редагувати",
            deleteTooltip: "Видалити",
            loading: "Завантаження даних...",
            loading: "Завантаження даних...",
            placeholder: {
                title: "Оберіть базу даних",
                subtitle: "Натисніть \"🔄 Оновити\" для завантаження даних"
            }
        },

        monitoring: {
            tabs: {
                overview: "📊 Огляд",
                current: "🔄 Поточний цикл",
                history: "📅 Історія",
                analytics: "📈 Аналітика"
            },
            periods: {
    days7: "7 днів",
    days30: "30 днів",
    months3: "3 місяці"
},
            stats: {
                totalCycles: "Всього циклів навчання",
                totalDialogs: "Оброблено діалогів",
                approvedUpdates: "Прийнято оновлень",
                rejectedUpdates: "Відхилено правил",
                successRate: "успішність",
                avgPriority: "Середній пріоритет правил",
                avgCycleTime: "Відсоток успішності",
                mostActiveTable: "Найактивніша таблиця",
                change24h: "за останні 24г",
                changeLastCycle: "за останній цикл",
                percentSuccess: "успішність",
                percentOfTotal: "від загальної кількості"
            },
            current: {
                statusTitle: "Статус поточного циклу",
                running: "🔄 В процесі",
                completed: "✅ Завершено",
                started: "Розпочато:",
                dialogs: "Оброблено діалогів:",
                workflowId: "Workflow ID:",
                completedAt: "Завершено:",
                recentActions: "🕐 Останні дії",
                table: "Таблиця:"
            },
            history: {
                title: "📜 Історія оновлень",
                filterAll: "Всі",
                filterApproved: "Прийняті",
                filterRejected: "Відхилені",
                columns: {
                    time: "Час",
                    type: "Тип",
                    action: "Дія",
                    table: "Таблиця",
                    status: "Статус",
                    priority: "Пріоритет",
                    content: "Вміст"
                },
                statusApplied: "Прийнято",
                statusRejected: "Відхилено",
                viewContent: "🔄 Переглянути",
                copyButton: "🔋 Копіювати",
                reasonLabel: "Причина:",
                problemLabel: "Вирішена проблема:",
                contentLabel: "Вміст зміни:",
                infoTitle: "📊 Інформація про зміну"
            },
            charts: {
                activity: "📈 Активність навчання за останні 7 днів",
                statusDistribution: "🎯 Розподіл оновлень",
                typeDistribution: "📊 Типи змін",
                changeCount: "Кількість змін",
                efficiency: "📊 Ефективність навчання по днях",
                heatmap: "🎨 Теплова карта активності по годинах",
                approved: "Прийняті",
                rejected: "Відхилені",
                addAction: "Додавання",
                editAction: "Редагування",
                deleteAction: "Видалення"
            }
        },

        modals: {
            confirm: {
                title: "⚠️ Підтвердження видалення",
                deleteRecord: "Ви впевнені, що хочете видалити запис ID: {id}?",
                deleteFromTable: "Ви впевнені, що хочете видалити запис ID: {id} з таблиці {table}?",
                cancelButton: "Скасувати",
                confirmButton: "Видалити"
            }
        },

        notifications: {
            recordDeleted: "Запис ID: {id} успішно видалено",
            recordUpdated: "Запис ID: {id} успішно оновлено",
            recordAdded: "Запис успішно додано до бази",
            databaseReplaced: "База даних повністю замінена",
            deleteError: "Помилка при видаленні:",
            updateError: "Помилка при оновленні:",
            connectionError: "Помилка підключення:",
            operationSuccess: "Операція виконана успішно",
            pleaseEnterEditId: "Будь ласка, вкажіть ID запису для {action}",
            pleaseEnterContent: "Будь ласка, введіть вміст для запису",
            fileTooBig: "Файл \"{name}\" занадто великий. Максимум: 10MB",
            totalSizeExceeded: "Перевищено загальний ліміт розміру файлів (50MB)",
            fileNotSupported: "Файл \"{name}\" не підтримується. Дозволені: PDF, TXT, DOCX, XLSX, XLS, CSV файли.",
            fileAlreadyUploaded: "Файл \"{name}\" вже завантажено",
            fileUploaded: "Файл \"{name}\" успішно завантажено",
            fileReadError: "Помилка при читанні файлу \"{name}\"",
            dataExported: "Дані експортовано",
            noDataToExport: "Немає даних для експорту",
            copiedToClipboard: "Скопійовано в буфер обміну",
            unknownError: "Невідома помилка",
            notFound: "Не знайдено",
            loadingData: "Завантаження даних моніторингу...",
            directModeActivated: "⚡ Режим прямого завантаження активовано",
            aiProcessingEnabled: "🤖 AI-обробка увімкнена"
        },

        actions: {
            editing: "редагування",
            deletion: "видалення"
        },

        pagination: {
            page: "Сторінка",
            of: "з",
            total: "Всього:"
        },

        formatting: {
            today: "Сьогодні",
            yesterday: "Вчора",
            seconds: "сек",
            minutes: "хв",
            hours: "год",
            unknown: "Н/Д"
        },
        days: {
    mon: "Пн",
    tue: "Вт",
    wed: "Ср",
    thu: "Чт",
    fri: "Пт",
    sat: "Сб",
    sun: "Нд"
}
    }
};

// ФУНКЦИИ ДЛЯ РАБОТЫ С ПЕРЕВОДАМИ
// ===============================================

// Получение перевода по ключу
function t(path) {
    const keys = path.split('.');
    let value = VectorBaseTranslations[VectorBaseConfig.currentLanguage];
    
    for (const key of keys) {
        if (value && value[key] !== undefined) {
            value = value[key];
        } else {
            console.warn(`Translation not found: ${path}`);
            return path;
        }
    }
    
    return value;
}

// Форматирование строк с параметрами
function tf(path, params) {
    let text = t(path);
    if (typeof text === 'string' && params) {
        Object.keys(params).forEach(key => {
            text = text.replace(`{${key}}`, params[key]);
        });
    }
    return text;
}

// Смена языка
function changeLanguage(langCode) {
    if (VectorBaseConfig.supportedLanguages[langCode]) {
        VectorBaseConfig.currentLanguage = langCode;
        localStorage.setItem('vectorbase_language', langCode);
        updateUILanguage();
    }
}

// ===============================================
// ФУНКЦИИ ДЛЯ РАБОТЫ С БАЗАМИ ДАННЫХ
// ===============================================

// Получить список всех баз данных
function getDatabases() {
    return VectorBaseConfig.databases.sort((a, b) => a.order - b.order);
}

// Получить базу данных по ID
function getDatabase(id) {
    return VectorBaseConfig.databases.find(db => db.id === id);
}

// Получить отформатированное название базы (с иконкой)
function getDatabaseDisplayName(id) {
    const db = getDatabase(id);
    if (!db) return id;
    return `${db.icon} ${t('databases.' + db.id)}`;
}

// Создать HTML option для select
function createDatabaseOption(database) {
    const displayName = getDatabaseDisplayName(database.id);
    return `<option value="${database.id}">${displayName}</option>`;
}

// Заполнить select базами данных
function populateDatabaseSelect(selectElement) {
    if (!selectElement) return;
    
    const databases = getDatabases();
    selectElement.innerHTML = databases.map(db => createDatabaseOption(db)).join('');
}

// Функция обновления UI после смены языка
function updateUILanguage() {
    // Переводим все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    // Переводим placeholder'ы
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    // Переводим option элементы (для select)
    document.querySelectorAll('option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        option.textContent = t(key);
    });
    
    // Обновляем селекторы баз данных
    [document.getElementById('database-selector'), document.getElementById('write-table')].forEach(selector => {
        if (selector) {
            populateDatabaseSelect(selector);
        }
    });
    
    // Обновляем badge базы данных
    updateDatabaseTitle();
    
    // Пересоздаем графики с новыми переводами
    if (typeof recreateCharts === 'function') {
        recreateCharts();
    }
    
    // Обновляем карточки мониторинга если они загружены
    if (typeof monitoringData !== 'undefined' && monitoringData && typeof updateMonitoringDashboard === 'function') {
        updateMonitoringDashboard(monitoringData);
    }
    
    // Перезагрузка данных
    //if (typeof readDatabase === 'function') {
        //readDatabase();
   // }
}

// Загрузка сохранённого языка при старте
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('vectorbase_language');
    if (savedLang && VectorBaseConfig.supportedLanguages[savedLang]) {
        VectorBaseConfig.currentLanguage = savedLang;
    }
});