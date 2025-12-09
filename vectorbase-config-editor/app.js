        // Default VectorBaseConfig if not loaded from external file
        if (typeof VectorBaseConfig === 'undefined') {
            window.VectorBaseConfig = {
                currentLanguage: 'ru',
                databases: [],
                allowedFileTypes: [],
                api: {
                    listDatabases: '',
                    readVectorBase: '',
                    writeVectorBase: '',
                    getLearningStats: ''
                },
                refreshInterval: 5000,
                recordsPerPage: 20,
                historyPerPage: 10
            };
        }

        // Переводы для страницы настроек
        const ConfigEditorTranslations = {
            ru: {
                title: "Настройки Vector Base Manager",
                subtitle: "Визуальный редактор для настройки системы управления базами знаний",
                tabs: {
                    general: "🌍 Основные",
                    databases: "📚 Базы данных",
                    files: "📁 Типы файлов",
                    technical: "🔧 Технические"
                },
                general: {
                    interfaceLanguage: "🌍 Язык интерфейса"
                },
                databases: {
                    title: "📚 Управление базами данных",
                    icon: "Иконка",
                    id: "ID (английский)",
                    name: "Название",
                    order: "Порядок",
                    enabled: "Активна",
                    addNew: "➕ Добавить новую базу данных",
                    delete: "🗑️ Удалить"
                },
                files: {
                    mimeTypes: "📄 MIME типы файлов",
                    extensions: "📎 Расширения файлов",
                    limits: "💾 Лимиты размера файлов",
                    maxFileSize: "Максимальный размер одного файла (в байтах):",
                    maxTotalFileSize: "Максимальный общий размер файлов (в байтах):",
                    addMimeType: "➕ Добавить MIME тип",
                    addExtension: "➕ Добавить расширение"
                },
                technical: {
                    apiSettings: "🔗 API настройки",
                    baseUrl: "Базовый URL:",
                    apiKey: "API ключ:",
                    endpoints: "🌐 Endpoints",
                    readVectorBase: "Чтение базы данных:",
                    writeVectorBase: "Запись в базу данных:",
                    getLearningStats: "Получение статистики обучения:",
                    systemParams: "⚙️ Параметры системы",
                    refreshInterval: "Интервал автообновления (мс):",
                    recordsPerPage: "Записей на странице:",
                    historyPerPage: "Истории на странице:"
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
                    reloadPrompt: "Конфигурация сохранена! Перезагрузить страницу Vector Base для применения изменений?"
                }
            },
            en: {
                title: "Vector Base Manager Settings",
                subtitle: "Visual editor for knowledge base management system configuration",
                tabs: {
                    general: "🌍 General",
                    databases: "📚 Databases",
                    files: "📁 File Types",
                    technical: "🔧 Technical"
                },
                general: {
                    interfaceLanguage: "🌍 Interface Language"
                },
                databases: {
                    title: "📚 Database Management",
                    icon: "Icon",
                    id: "ID (English)",
                    name: "Name",
                    order: "Order",
                    enabled: "Enabled",
                    addNew: "➕ Add New Database",
                    delete: "🗑️ Delete"
                },
                files: {
                    mimeTypes: "📄 MIME File Types",
                    extensions: "📎 File Extensions",
                    limits: "💾 File Size Limits",
                    maxFileSize: "Maximum single file size (bytes):",
                    maxTotalFileSize: "Maximum total file size (bytes):",
                    addMimeType: "➕ Add MIME Type",
                    addExtension: "➕ Add Extension"
                },
                technical: {
                    apiSettings: "🔗 API Settings",
                    baseUrl: "Base URL:",
                    apiKey: "API Key:",
                    endpoints: "🌐 Endpoints",
                    readVectorBase: "Read Database:",
                    writeVectorBase: "Write Database:",
                    getLearningStats: "Get Learning Stats:",
                    systemParams: "⚙️ System Parameters",
                    refreshInterval: "Auto-refresh interval (ms):",
                    recordsPerPage: "Records per page:",
                    historyPerPage: "History per page:"
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
                    reloadPrompt: "Configuration saved! Reload Vector Base page to apply changes?"
                }
            },
            es: {
                title: "Configuración de Vector Base Manager",
                subtitle: "Editor visual para la configuración del sistema de gestión de bases de conocimiento",
                tabs: {
                    general: "🌍 General",
                    databases: "📚 Bases de Datos",
                    files: "📁 Tipos de Archivos",
                    technical: "🔧 Técnico"
                },
                buttons: {
                    save: "💾 Guardar Cambios",
                    reset: "↩️ Restablecer Cambios",
                    export: "📤 Exportar Configuración",
                    restore: "📥 Restaurar desde Copia",
                    resetToDefaults: "🔄 Restablecer a Predeterminados"
                }
            },
            fr: {
                title: "Paramètres de Vector Base Manager",
                subtitle: "Éditeur visuel pour la configuration du système de gestion de bases de connaissances",
                tabs: {
                    general: "🌍 Général",
                    databases: "📚 Bases de Données",
                    files: "📁 Types de Fichiers",
                    technical: "🔧 Technique"
                },
                buttons: {
                    save: "💾 Enregistrer les Modifications",
                    reset: "↩️ Réinitialiser les Modifications",
                    export: "📤 Exporter la Configuration",
                    restore: "📥 Restaurer depuis une Sauvegarde",
                    resetToDefaults: "🔄 Réinitialiser aux Valeurs par Défaut"
                }
            },
            de: {
                title: "Vector Base Manager Einstellungen",
                subtitle: "Visueller Editor für die Konfiguration des Wissensdatenbank-Verwaltungssystems",
                tabs: {
                    general: "🌍 Allgemein",
                    databases: "📚 Datenbanken",
                    files: "📁 Dateitypen",
                    technical: "🔧 Technisch"
                },
                buttons: {
                    save: "💾 Änderungen Speichern",
                    reset: "↩️ Änderungen Zurücksetzen",
                    export: "📤 Konfiguration Exportieren",
                    restore: "📥 Aus Backup Wiederherstellen",
                    resetToDefaults: "🔄 Auf Standardwerte Zurücksetzen"
                }
            },
            it: {
                title: "Impostazioni Vector Base Manager",
                subtitle: "Editor visuale per la configurazione del sistema di gestione delle basi di conoscenza",
                tabs: {
                    general: "🌍 Generale",
                    databases: "📚 Database",
                    files: "📁 Tipi di File",
                    technical: "🔧 Tecnico"
                },
                buttons: {
                    save: "💾 Salva Modifiche",
                    reset: "↩️ Ripristina Modifiche",
                    export: "📤 Esporta Configurazione",
                    restore: "📥 Ripristina da Backup",
                    resetToDefaults: "🔄 Ripristina ai Valori Predefiniti"
                }
            },
            pt: {
                title: "Configurações do Vector Base Manager",
                subtitle: "Editor visual para configuração do sistema de gestão de bases de conhecimento",
                tabs: {
                    general: "🌍 Geral",
                    databases: "📚 Bases de Dados",
                    files: "📁 Tipos de Arquivos",
                    technical: "🔧 Técnico"
                },
                buttons: {
                    save: "💾 Guardar Alterações",
                    reset: "↩️ Repor Alterações",
                    export: "📤 Exportar Configuração",
                    restore: "📥 Restaurar de Cópia",
                    resetToDefaults: "🔄 Repor Valores Predefinidos"
                }
            },
            zh: {
                title: "Vector Base Manager 设置",
                subtitle: "知识库管理系统配置的可视化编辑器",
                tabs: {
                    general: "🌍 常规",
                    databases: "📚 数据库",
                    files: "📁 文件类型",
                    technical: "🔧 技术"
                },
                buttons: {
                    save: "💾 保存更改",
                    reset: "↩️ 重置更改",
                    export: "📤 导出配置",
                    restore: "📥 从备份恢复",
                    resetToDefaults: "🔄 重置为默认值"
                }
            },
            ja: {
                title: "Vector Base Manager 設定",
                subtitle: "ナレッジベース管理システム設定のビジュアルエディタ",
                tabs: {
                    general: "🌍 一般",
                    databases: "📚 データベース",
                    files: "📁 ファイルタイプ",
                    technical: "🔧 技術"
                },
                buttons: {
                    save: "💾 変更を保存",
                    reset: "↩️ 変更をリセット",
                    export: "📤 設定をエクスポート",
                    restore: "📥 バックアップから復元",
                    resetToDefaults: "🔄 デフォルトにリセット"
                }
            },
            ko: {
                title: "Vector Base Manager 설정",
                subtitle: "지식 베이스 관리 시스템 구성을 위한 시각적 편집기",
                tabs: {
                    general: "🌍 일반",
                    databases: "📚 데이터베이스",
                    files: "📁 파일 유형",
                    technical: "🔧 기술"
                },
                buttons: {
                    save: "💾 변경 사항 저장",
                    reset: "↩️ 변경 사항 재설정",
                    export: "📤 구성 내보내기",
                    restore: "📥 백업에서 복원",
                    resetToDefaults: "🔄 기본값으로 재설정"
                }
            },
            ua: {
                title: "Налаштування Vector Base Manager",
                subtitle: "Візуальний редактор для налаштування системи управління базами знань",
                tabs: {
                    general: "🌍 Основні",
                    databases: "📚 Бази даних",
                    files: "📁 Типи файлів",
                    technical: "🔧 Технічні"
                },
                buttons: {
                    save: "💾 Зберегти зміни",
                    reset: "↩️ Скинути зміни",
                    export: "📤 Експортувати конфігурацію",
                    restore: "📥 Відновити з резерву",
                    resetToDefaults: "🔄 Скинути на заводські"
                }
            }
        };

        // Текущий язык страницы
        let currentPageLanguage = localStorage.getItem('vectorbaseConfigEditorLanguage') || 'ru';

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

        // Проверяем загрузку конфигурации
        if (typeof VectorBaseConfig === 'undefined') {
            console.error('❌ VectorBaseConfig не загружен!');
            alert('Ошибка: Файл конфигурации не загружен. Проверьте путь к vectorbase-config.js');
        }

        // Текущая конфигурация
        let currentConfig = JSON.parse(JSON.stringify(VectorBaseConfig));

        // Переключение вкладок
        window.switchTab = function(tabName) {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            const tabContent = document.getElementById(`${tabName}-tab`);
            if (tabContent) {
                tabContent.classList.add('active');
            }
            
            document.querySelectorAll('.tab').forEach(tab => {
                if (tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(tabName)) {
                    tab.classList.add('active');
                }
            });
        }

        // Инициализация при загрузке
        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ Страница загружена, инициализация...');
            
            if (typeof VectorBaseConfig !== 'undefined' && VectorBaseConfig.currentLanguage) {
                currentPageLanguage = VectorBaseConfig.currentLanguage;
                localStorage.setItem('vectorbaseConfigEditorLanguage', VectorBaseConfig.currentLanguage);
            }
            
            loadCurrentConfiguration();
            updatePageLanguage();
        });

        // Загрузка текущей конфигурации
        function loadCurrentConfiguration() {
            console.log('📋 Загрузка конфигурации...');
            
            // Язык интерфейса
            createLanguageOptions();
            
            // Базы данных
            loadDatabases();
            
            // Типы файлов
            loadFileTypes();
            
            // Технические настройки
            loadTechnicalSettings();
        }

        // Создание списка языков
        function createLanguageOptions() {
            const container = document.getElementById('languageSelect');
            if (!container) return;
            
            const languages = [
                { code: 'ru', name: 'Русский', flag: '🇷🇺' },
                { code: 'en', name: 'English', flag: '🇺🇸' },
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
                
                if (lang.code === currentConfig.currentLanguage) {
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
            currentConfig.currentLanguage = langCode;
            
            currentPageLanguage = langCode;
            localStorage.setItem('vectorbaseConfigEditorLanguage', langCode);
            updatePageLanguage();
        }

        // Загрузка баз данных
        function loadDatabases() {
            const container = document.getElementById('databasesList');
            if (!container || !currentConfig.databases) return;
            
            container.innerHTML = '';
            
            currentConfig.databases.forEach((db, index) => {
                const item = document.createElement('div');
                item.className = 'database-item';
                item.innerHTML = `
    <input type="text" class="form-control icon-input" value="${db.icon}" 
           data-db-index="${index}" data-field="icon" 
           title="Иконка базы (эмодзи)">
    <input type="text" class="form-control" value="${db.id}" 
           data-db-index="${index}" data-field="id" 
           placeholder="database_id"
           title="ID базы (латиница, без пробелов)">
    <input type="number" class="form-control order-input" value="${db.order}" 
           data-db-index="${index}" data-field="order" 
           min="1"
           title="Порядок отображения">
    <button class="delete-database-btn" onclick="deleteDatabase(${index})">
        🗑️ Удалить
    </button>
`;
                
                // Добавляем обработчики изменения
                item.querySelectorAll('input').forEach(input => {
                    input.addEventListener('change', function() {
                        const dbIndex = parseInt(this.dataset.dbIndex);
                        const field = this.dataset.field;
                        if (field === 'order') {
                            currentConfig.databases[dbIndex][field] = parseInt(this.value);
                        } else {
                            currentConfig.databases[dbIndex][field] = this.value;
                        }
                    });
                });
                
                container.appendChild(item);
            });
        }

        // Удаление базы данных
        window.deleteDatabase = function(index) {
            if (confirm(`Удалить базу данных "${currentConfig.databases[index].id}"?`)) {
                currentConfig.databases.splice(index, 1);
                loadDatabases();
            }
        }

        // Добавление новой базы данных
        window.addNewDatabase = function() {
    const newDb = {
        id: "new_database_" + Date.now(),
        icon: "📁",
        order: currentConfig.databases.length + 1
    };
    currentConfig.databases.push(newDb);
    loadDatabases();
}

        // Загрузка типов файлов
        function loadFileTypes() {
            // MIME типы
            const mimeContainer = document.getElementById('mimeTypesList');
            if (mimeContainer && currentConfig.allowedFileTypes) {
                mimeContainer.innerHTML = '';
                currentConfig.allowedFileTypes.mimeTypes.forEach((mime, index) => {
                    const item = document.createElement('div');
                    item.className = 'file-type-item';
                    item.innerHTML = `
                        <input type="text" class="file-type-input" value="${mime}" 
                               data-type="mime" data-index="${index}">
                        <button class="delete-database-btn" onclick="deleteFileType('mime', ${index})">
                            🗑️
                        </button>
                    `;
                    
                    item.querySelector('input').addEventListener('change', function() {
                        currentConfig.allowedFileTypes.mimeTypes[index] = this.value;
                    });
                    
                    mimeContainer.appendChild(item);
                });
            }
            
            // Расширения
            const extContainer = document.getElementById('extensionsList');
            if (extContainer && currentConfig.allowedFileTypes) {
                extContainer.innerHTML = '';
                currentConfig.allowedFileTypes.extensions.forEach((ext, index) => {
                    const item = document.createElement('div');
                    item.className = 'file-type-item';
                    item.innerHTML = `
                        <input type="text" class="file-type-input" value="${ext}" 
                               data-type="ext" data-index="${index}">
                        <button class="delete-database-btn" onclick="deleteFileType('ext', ${index})">
                            🗑️
                        </button>
                    `;
                    
                    item.querySelector('input').addEventListener('change', function() {
                        currentConfig.allowedFileTypes.extensions[index] = this.value;
                    });
                    
                    extContainer.appendChild(item);
                });
            }
            
            // Лимиты
            const maxFileSize = document.getElementById('maxFileSize');
            if (maxFileSize && currentConfig.technical) {
                maxFileSize.value = currentConfig.technical.maxFileSize || 10485760;
            }
            
            const maxTotalFileSize = document.getElementById('maxTotalFileSize');
            if (maxTotalFileSize && currentConfig.technical) {
                maxTotalFileSize.value = currentConfig.technical.maxTotalFileSize || 52428800;
            }
        }

        // Добавление MIME типа
        window.addMimeType = function() {
            currentConfig.allowedFileTypes.mimeTypes.push('application/octet-stream');
            loadFileTypes();
        }

        // Добавление расширения
        window.addExtension = function() {
            currentConfig.allowedFileTypes.extensions.push('.new');
            loadFileTypes();
        }

        // Удаление типа файла
        window.deleteFileType = function(type, index) {
            if (type === 'mime') {
                currentConfig.allowedFileTypes.mimeTypes.splice(index, 1);
            } else {
                currentConfig.allowedFileTypes.extensions.splice(index, 1);
            }
            loadFileTypes();
        }

        // Загрузка технических настроек
        function loadTechnicalSettings() {
            if (!currentConfig.technical) return;
            
            const baseUrl = document.getElementById('baseUrl');
            if (baseUrl) baseUrl.value = currentConfig.technical.baseUrl || '';
            
            const apiKey = document.getElementById('apiKey');
            if (apiKey) apiKey.value = currentConfig.technical.apiKey || '';
            
            const readVectorBase = document.getElementById('readVectorBase');
            if (readVectorBase && currentConfig.technical.endpoints) {
                readVectorBase.value = currentConfig.technical.endpoints.readVectorBase || '';
            }
            
            const writeVectorBase = document.getElementById('writeVectorBase');
            if (writeVectorBase && currentConfig.technical.endpoints) {
                writeVectorBase.value = currentConfig.technical.endpoints.writeVectorBase || '';
            }
            
            const getLearningStats = document.getElementById('getLearningStats');
            if (getLearningStats && currentConfig.technical.endpoints) {
                getLearningStats.value = currentConfig.technical.endpoints.getLearningStats || '';
            }
            
            const refreshInterval = document.getElementById('refreshInterval');
            if (refreshInterval) refreshInterval.value = currentConfig.technical.refreshInterval || 10000;
            
            const recordsPerPage = document.getElementById('recordsPerPage');
            if (recordsPerPage) recordsPerPage.value = currentConfig.technical.recordsPerPage || 15;
            
            const historyPerPage = document.getElementById('historyPerPage');
            if (historyPerPage) historyPerPage.value = currentConfig.technical.historyPerPage || 15;
        }

        // Функция сворачивания/разворачивания секций
        function toggleCollapsible(header) {
            header.classList.toggle('collapsed');
            const content = header.nextElementSibling;
            content.classList.toggle('collapsed');
            
            const sectionId = header.querySelector('h2').textContent;
            const isCollapsed = header.classList.contains('collapsed');
            localStorage.setItem(`vectorbase_collapsed_${sectionId}`, isCollapsed);
        }

        // Восстановление состояния секций при загрузке
        function restoreCollapsibleStates() {
            document.querySelectorAll('.collapsible-header').forEach(header => {
                const sectionId = header.querySelector('h2').textContent;
                const savedState = localStorage.getItem(`vectorbase_collapsed_${sectionId}`);
                
                const isCollapsed = savedState === null ? false : savedState === 'true';
                
                if (isCollapsed) {
                    header.classList.add('collapsed');
                    header.nextElementSibling.classList.add('collapsed');
                } else {
                    header.classList.remove('collapsed');
                    header.nextElementSibling.classList.remove('collapsed');
                }
            });
        }

        // Функция показа модального окна подтверждения
        function showConfirmModal(message, onConfirm, onCancel) {
            const lang = currentPageLanguage || 'ru';
            
            const translations = {
                ru: { title: 'Подтвердите действие', ok: 'OK', cancel: 'Отмена' },
                en: { title: 'Confirm action', ok: 'OK', cancel: 'Cancel' },
                es: { title: 'Confirmar acción', ok: 'OK', cancel: 'Cancelar' },
                fr: { title: 'Confirmer l\'action', ok: 'OK', cancel: 'Annuler' },
                de: { title: 'Aktion bestätigen', ok: 'OK', cancel: 'Abbrechen' },
                it: { title: 'Conferma azione', ok: 'OK', cancel: 'Annulla' },
                pt: { title: 'Confirmar ação', ok: 'OK', cancel: 'Cancelar' },
                zh: { title: '确认操作', ok: '确定', cancel: '取消' },
                ja: { title: 'アクションの確認', ok: 'OK', cancel: 'キャンセル' },
                ko: { title: '작업 확인', ok: '확인', cancel: '취소' },
                ua: { title: 'Підтвердіть дію', ok: 'OK', cancel: 'Скасувати' }
            };
            
            const t = translations[lang] || translations.ru;
            
            const modalHTML = `
                <div class="confirm-modal-overlay" id="confirmModal">
                    <div class="confirm-modal">
                        <div class="confirm-modal-header">
                            <h3 class="confirm-modal-title">
                                <span style="color: #3b82f6;">⚙️</span>
                                ${t.title}
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
            
            window.confirmModalCallbacks = { onConfirm, onCancel };
            
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
            // Обновляем технические настройки
            currentConfig.technical.baseUrl = document.getElementById('baseUrl').value;
            currentConfig.technical.apiKey = document.getElementById('apiKey').value;
            currentConfig.technical.endpoints.readVectorBase = document.getElementById('readVectorBase').value;
            currentConfig.technical.endpoints.writeVectorBase = document.getElementById('writeVectorBase').value;
            currentConfig.technical.endpoints.getLearningStats = document.getElementById('getLearningStats').value;
            currentConfig.technical.refreshInterval = parseInt(document.getElementById('refreshInterval').value);
            currentConfig.technical.recordsPerPage = parseInt(document.getElementById('recordsPerPage').value);
            currentConfig.technical.historyPerPage = parseInt(document.getElementById('historyPerPage').value);
            currentConfig.technical.maxFileSize = parseInt(document.getElementById('maxFileSize').value);
            currentConfig.technical.maxTotalFileSize = parseInt(document.getElementById('maxTotalFileSize').value);
            
            try {
                const response = await fetch('save-vectorbase-config.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentConfig)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showSuccessMessage();
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 1000);
                    
                    localStorage.setItem('vectorbaseConfig', JSON.stringify(currentConfig));
                    
                    const reloadMessage = {
                        ru: 'Конфигурация сохранена! Перезагрузить страницу Vector Base для применения изменений?',
                        en: 'Configuration saved! Reload Vector Base page to apply changes?',
                        es: '¡Configuración guardada! ¿Recargar la página de Vector Base para aplicar los cambios?',
                        fr: 'Configuration enregistrée! Recharger la page Vector Base pour appliquer les modifications?',
                        de: 'Konfiguration gespeichert! Vector Base Seite neu laden, um Änderungen anzuwenden?',
                        it: 'Configurazione salvata! Ricaricare la pagina Vector Base per applicare le modifiche?',
                        pt: 'Configuração salva! Recarregar a página Vector Base para aplicar as alterações?',
                        zh: '配置已保存！重新加载 Vector Base 页面以应用更改？',
                        ja: '設定が保存されました！変更を適用するために Vector Base ページをリロードしますか？',
                        ko: '구성이 저장되었습니다! 변경 사항을 적용하기 위해 Vector Base 페이지를 다시 로드하시겠습니까?',
                        ua: 'Конфігурацію збережено! Перезавантажити сторінку Vector Base для застосування змін?'
                    };
                    
                    showConfirmModal(
                        reloadMessage[currentPageLanguage] || reloadMessage.ru,
                        function() {
                            window.open('vectorbase.html', '_blank');
                        },
                        null
                    );
                } else {
                    alert('Ошибка сохранения: ' + (result.error || 'Неизвестная ошибка'));
                }
            } catch (error) {
                console.error('Ошибка:', error);
                alert('Ошибка при сохранении конфигурации: ' + error.message);
                
                if (confirm('Не удалось сохранить на сервер. Скачать файл конфигурации?')) {
                    downloadConfigFile();
                }
            }
        }

        // Сброс изменений
        window.resetConfiguration = function() {
            currentConfig = JSON.parse(JSON.stringify(VectorBaseConfig));
            loadCurrentConfiguration();
            alert('✅ Изменения сброшены');
        }

        // Экспорт конфигурации
        window.exportConfiguration = async function() {
            try {
                const response = await fetch('export-vectorbase-config.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentConfig)
                });
                
                if (response.ok) {
                    const configContent = await response.text();
                    
                    const blob = new Blob([configContent], { type: 'application/javascript' });
                    const url = URL.createObjectURL(blob);
                    
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'vectorbase-config.js';
                    a.click();
                    
                    URL.revokeObjectURL(url);
                } else {
                    console.warn('Сервер недоступен, экспортируем упрощенную версию');
                    const configString = JSON.stringify(currentConfig, null, 2);
                    const blob = new Blob([configString], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'vectorbase-config.json';
                    a.click();
                    
                    URL.revokeObjectURL(url);
                }
            } catch (error) {
                console.error('Ошибка экспорта:', error);
                const configString = JSON.stringify(currentConfig, null, 2);
                const blob = new Blob([configString], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = 'vectorbase-config.json';
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
                    localStorage.removeItem('vectorbaseConfig');
                    location.reload();
                },
                null
            );
        }

        // Восстановление из резервной копии
        window.restoreFromBackup = async function() {
            try {
                const response = await fetch('list-vectorbase-backups.php');
                const backups = await response.json();
                
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
                    }
                };
                
                const lang = currentPageLanguage || 'ru';
                const t = translations[lang] || translations.ru;
                
                if (backups.length === 0) {
                    alert(t.noBackups);
                    return;
                }
                
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
                
                const modalContainer = document.createElement('div');
                modalContainer.id = 'restoreModal';
                modalContainer.innerHTML = modalHtml;
                document.body.appendChild(modalContainer);
                
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
                    en: 'Error getting backup list: '
                };
                
                const lang = currentPageLanguage || 'ru';
                alert((errorMessages[lang] || errorMessages.ru) + error.message);
            }
        }

        // Выполнение восстановления
        window.performRestore = async function(backupName) {
            const messages = {
                ru: 'Вы уверены, что хотите восстановить эту резервную копию? Текущая конфигурация будет перезаписана.',
                en: 'Are you sure you want to restore this backup? Current configuration will be overwritten.'
            };
            
            showConfirmModal(
                messages[currentPageLanguage] || messages.ru,
                async function() {
                    try {
                        const response = await fetch('restore-vectorbase-backup.php', {
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
            const configString = `// vectorbase-config.js
const VectorBaseConfig = ${JSON.stringify(currentConfig, null, 4)};

// ... добавьте сюда остальной код из оригинального файла ...

window.VectorBaseConfig = VectorBaseConfig;`;
            
            const blob = new Blob([configString], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'vectorbase-config.js';
            a.click();
            URL.revokeObjectURL(url);
        }

        // Обновление языка интерфейса
        function updatePageLanguage() {
            document.title = t('title');
            
            const header = document.querySelector('.header h1');
            if (header) header.textContent = '⚙️ ' + t('title');
            
            const subtitle = document.querySelector('.header p');
            if (subtitle) subtitle.textContent = t('subtitle');
            
            const tabs = document.querySelectorAll('.tab');
            const tabNames = ['general', 'databases', 'files', 'technical'];
            tabs.forEach((tab, index) => {
                if (tabNames[index]) {
                    tab.textContent = t(`tabs.${tabNames[index]}`);
                }
            });
            
            const buttons = document.querySelectorAll('.save-section .btn');
            if (buttons[0]) buttons[0].innerHTML = t('buttons.save');
            if (buttons[1]) buttons[1].innerHTML = t('buttons.reset');
            if (buttons[2]) buttons[2].innerHTML = t('buttons.export');
            if (buttons[3]) buttons[3].innerHTML = t('buttons.restore');
            if (buttons[4]) buttons[4].innerHTML = t('buttons.resetToDefaults');
            
            const successMsg = document.getElementById('successMessage');
            if (successMsg) successMsg.textContent = t('messages.success');
            
            if (currentConfig && currentConfig.databases) {
                loadCurrentConfiguration();
            }
        }

        console.log('✅ Скрипт конфигурации загружен');
