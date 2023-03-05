// langs needed nl-nl,cz-cz,it-it,el-gr,ro-ro

const baseTranslation = { 
	'en-uk': {
		'btn_submit': 'Submit',
		'btn_reset': 'Reset',
		'btn_reload': 'Reload',
		'btn_fix': 'Fix mismatch',
		'manager_mismatch': 'mismatch',
		'load_template': 'Load template' ,
		'save_template': 'Save as template',
		'command_sent': 'Command sent',
		'no_free_expl': 'No free explorers',
		'no_free_geo': 'No free geologists',
		'not_home' : 'Not your home zone!',
		'bad_template' : 'Bad template file',
		'spec_time_normal': 'Needed time',
		'spec_time_arrival': 'Arrival time',
		'buff_not_recorded' : 'Buff not recorded! Type - ',
		'buff_wrong_zone' : 'wrong zone',
		'buff_wrong_name' : 'name mismatch',
		'buff_not_exist' : 'not exists',
		'buff_buffed' : 'already buffed',
		'buff_not_buffed' : 'not buffed',
		'buff_ready': 'ready',
		'buff_used': 'Buffs that will be used:',
		'buff_rec_start': 'Recording started',
		'buff_rec_stop': 'Recording stopped',
		'buff_rec_progress': 'Recording in progress!',
		'buff_zoneowner': 'BuffList ZoneOwner:',
		'buff_not_your_zone': 'This buff list is not for your zone!',
		'buff_start_record': 'Start recording',
		'buff_stop_record': 'Stop recording',
		'buff_record_more': 'Record more',
		'buff_welcome': 'Welcome to buff manager!',
		'buff_welcome_block': '<p>You can record what you need to buff and then replay it automatically. Press "Start recording" button and buff your (or friend) buildings. After that come back and press "Stop recording". You will see list of buildings and its buffs. Save it as a template and next time just load template and press Submit.</p><p>Buildings with red background will not be buffed.. Also, if one of the available buffs rows is red, not all buildings will be buffed with this buff.</p>',
		'experimental': "EXPERIMENTAL",
		'auc_warning': 'Use only after paying 10k gold in unity. Always reload data before making bid.',
		'auc_current': "Current auctionId:",
		'auc_bidding_count': "Bidding count:",
		'auc_endtime': "End time:",
		'auc_ended': "ended",
		'auc_item': "Auction item:",
		'auc_item_desc': "Item description:",
		'auc_initial_cost': "Initial cost:",
		'auc_increment': "Inrement by:",
		'auc_bid_for': "Place bet for:",
		'auc_you_have': "You have:",
		'auc_your_max': "You are the highest bidder, so you can't place another bet",
		'auc_do_bid': 'Place bid',
		'prod_estimate': 'Estimated time',
		'prod_finish': 'Finish time',
		'prod_timed': 'Timed production',
		'prod_queuesize': 'Queue size',
		'prod_welcome': 'Welcome to production manager!',
		'prod_welcome_block': '<p>You can record buildings and then mass stop or start them. Press "Start recording" button and select your buildings. After that come back and press "Stop recording". You will see list of buildings with current status. Save it as a template and next time just load template and press Submit.</p>',
		'menustyle_grouped': 'Grouped',
		'menustyle_linear': 'Linear',
		'menustyle_desc': 'Menu style',
		'deffilter_desc': 'Default filter',
		'dateformat_desc': 'Datetime format',
		'geotemplates_desc': 'Geologists templates: ',
		'expltemplates_desc': 'Explorers templates: ',
		'bufftemplates_desc': 'Buffs templates: ',
		'buitemplates_desc': 'Buildings templates: ',
		'armytemplates_desc': 'Army templates: ',
		'geodeftask_desc': 'Geologists default task',
		'expldeftask_desc': 'Explorers default task',
		'spectimetype_desc': 'Default time calculation type',
		'armyCurrentArmy': 'Current army',
		'armyNewArmy': 'New army to load',
		'armyUnload': 'Unload selected',
		'armyLoad': 'Load army'
	},
	'ru-ru': {
		'btn_submit': 'Отправить',
		'btn_reset': 'Сбросить',
		'btn_reload': 'Обновить',
		'btn_fix': 'Исправить',
		'manager_mismatch': 'отличается',
		'load_template': 'Загрузить шаблон' ,
		'save_template': 'Сохранить как шаблон',
		'command_sent': 'Команда отправлена',
		'no_free_expl': 'Нет свободных исследователей',
		'no_free_geo': 'Нет свободных геологов',
		'not_home' : 'Это не ваша домашняя зона!',
		'bad_template' : 'Неправильный или поврежденный файл шаблона',
		'spec_time_normal': 'Требуемое время',
		'spec_time_arrival': 'Время возвращения',
		'buff_not_recorded' : 'Баф не записан! Тип - ',
		'buff_wrong_zone' : 'не та зона',
		'buff_wrong_name' : 'имя не совпадает',
		'buff_not_exist' : 'не существует',
		'buff_buffed' : 'уже бафнуто',
		'buff_not_buffed' : 'не бафнуто',
		'buff_ready': 'готов',
		'buff_used': 'Будут использованы бафы:',
		'buff_rec_start': 'Запись начата',
		'buff_rec_stop': 'Запись остановлена',
		'buff_rec_progress': 'Идёт запись!',
		'buff_zoneowner': 'Список бафов для зоны игрока:',
		'buff_not_your_zone': 'Этот список бафов не для вашей зоны!',
		'buff_start_record': 'Начать запись',
		'buff_stop_record': 'Остановить запись',
		'buff_record_more': 'Записать еще',
		'buff_welcome': 'Добро пожаловать в менеджер бафов!',
		'buff_welcome_block': '<p>Вы можете записать бафы нужных зданий, чтобы потом бафать их в автоматическом режиме. Нажмите "Начать запись" и бафайте свои или дружеские здания. После окончания вернитесь сюда и нажмите кнопку "Остановить запись". Вы увидите список зданий и бафов. Сохраните его как шаблон. В следующий раз загрузите шаблон, проверьте список и нажмите "Отправить".</p><p>Здания со статусом, отличным от "готов" не будут бафнуты. Если у вас не хватает бафов на все здания, то часть не будет бафнута.</p>',
		'experimental': "ЭКСПЕРИМЕНТАЛЬНАЯ ФУНКЦИЯ!",
		'auc_warning': 'Используйте только после разблокировки аукциона за 10 000 монет в юнити.',
		'auc_current': "Текущий ID аукциона:",
		'auc_bidding_count': "Сделано ставок:",
		'auc_endtime': "До окончания:",
		'auc_ended': "аукцион закончен",
		'auc_item': "Лот аукциона:",
		'auc_item_desc': "Описание лота:",
		'auc_initial_cost': "Начальная цена:",
		'auc_increment': "Увеличение цены за каждую ставку:",
		'auc_bid_for': "Разместить ставку за:",
		'auc_you_have': "У вас есть:",
		'auc_your_max': "Ваша ставка максимальная, нельзя сделать ставку",
		'auc_do_bid': 'Сделать ставку',
		'prod_estimate': 'Расчетное время',
		'prod_finish': 'Время завершения',
		'prod_timed': 'Очереди производства',
		'prod_queuesize': 'Размер очереди',
		'prod_welcome': 'Добро пожаловать в менеджер производства!',
		'prod_welcome_block': '<p>Вы можете записать нужные здания, чтобы потом массово запускать либо останавливать их. Нажмите "Начать запись" и выделяйте свои здания кликая на них. После окончания вернитесь сюда и нажмите кнопку "Остановить запись". Вы увидите список зданий и их статус. Сохраните его как шаблон. В следующий раз загрузите шаблон, проверьте список и нажмите "Отправить".</p>',
		'menustyle_grouped': 'Сгруппированное',
		'menustyle_linear': 'Линейное',
		'menustyle_desc': 'Стиль меню',
		'deffilter_desc': 'Фильтр зоны по умолчанию',
		'dateformat_desc': 'Формат даты/времени',
		'geotemplates_desc': 'Шаблоны геологов: ',
		'expltemplates_desc': 'Шаблоны разведчиков: ',
		'bufftemplates_desc': 'Шаблоны бафов: ',
		'buitemplates_desc': 'Шаблоны зданий: ',
		'armytemplates_desc': 'Шаблоны армии: ',
		'geodeftask_desc': 'Задача геологов по умолчанию',
		'expldeftask_desc': 'Задача разведчиков по умолчанию',
		'spectimetype_desc': 'Тип расчета времени по умолчанию',
		'armyCurrentArmy': 'Текущие войска',
		'armyNewArmy': 'Новые войска для загрузки',
		'armyUnload': 'Выгрузить выбранных',
		'armyLoad': 'Загрузить войска'
	},
	'de-de': {
		'btn_submit': 'Senden',
		'btn_reset': 'Zurücksetzen',
		'btn_reload': 'Aktualisieren',
		'btn_fix': 'Fixen',
		'manager_mismatch': 'weicht ab',
		'load_template': 'Vorlage laden' ,
		'save_template': 'Vorlage speichern',
		'command_sent': 'Befehl gesendet',
		'no_free_expl': 'Es gibt keine freien Entdecker',
		'no_free_geo': 'Es gibt keine freien Geologen',
		'not_home' : 'Das ist nicht Ihre Heimatzone',
		'bad_template' : 'Falsche oder kaputte Vorlagendatei',
		'spec_time_normal': 'Benötigte Zeit',
		'spec_time_arrival': 'Zeit der Rückkehr',
		'buff_not_recorded' : 'Förderung nicht aufgenommen! Typ - ',
		'buff_wrong_zone' : 'falsche Zone',
		'buff_wrong_name' : 'Name passt nicht',
		'buff_not_exist' : 'existiert nicht',
		'buff_buffed' : 'schon gefördert',
		'buff_not_buffed' : 'nicht gefördert',
		'buff_ready': 'fertig',
		'buff_used': 'Es werden folgen Förderungen verwendet:',
		'buff_rec_start': 'Aufnahme gestartet',
		'buff_rec_stop': 'Aufnahme gestoppt',
		'buff_rec_progress': 'Aufnahme läuft!',
		'buff_zoneowner': 'Liste der Förderungen für Zone des Spielers:',
		'buff_not_your_zone': 'Die Vorlagenliste der Förderungen ist nicht für Ihre Zone!',
		'buff_start_record': 'Aufnahme starten',
		'buff_stop_record': 'Aufnahme stoppen',
		'buff_record_more': 'mehr aufnehmen',
		'buff_welcome': 'Herzlich Wilkommen im Manager der Förderungen!',
		'buff_welcome_block': '<p>Sie können die Förderungen für bestimmte Gebäuden aufnehmen, um diese später automatisch zu fördern. Klicken Sie "Aufnahme starten" an und fördern Ihre Gebäuden oder Gebäuden Ihrer Freunden. Danach klicken Sie wieder hier auf "Aufnahme stoppen" an. Es wird dann die Liste der Förderungen und Gebäuden angezeigt. Speichern sie diese als Vorlage. Nächstes Mal können Sie die Vorlage laden, dann die Liste prüfen und "Senden" anklicken.</p><p>Gebäuden mit abweichendem von "bereit" Status, werden nicht gefördert. Wenn Sie nicht genug Förderungen haben, wird ein Teil von Gebäuden nicht gefördert.</p>',
		'experimental': "EXPERIMENTALE FUNKTION!",
		'auc_warning': 'Nutzen Sie das nur nachdem entsperren der Händlergilde für 10 000 Goldmünzen in Unity.',
		'auc_current': "Aktuelle ID des Angebotes:",
		'auc_bidding_count': "Anzahl der Gebote:",
		'auc_endtime': "Angebotsende:",
		'auc_ended': "Angebot beendet",
		'auc_item': "Angebotsartikel:",
		'auc_item_desc': "Angebotsbeschreibung:",
		'auc_initial_cost': "Startpreis:",
		'auc_increment': "Gebotsschritt:",
		'auc_bid_for': "Gebotsbetrag:",
		'auc_you_have': "Sie haben:",
		'auc_your_max': "Sie sind Höchstbietender, es kann kein Gebot gemacht werden",
		'auc_do_bid': 'Gebot machen',
		'prod_estimate': 'Geschätzte Zeit',
		'prod_finish': 'Endzeit',
		'prod_timed': 'Produktionsstätten Übersicht',
		'prod_queuesize': 'Warteschlangengröße',
		'prod_welcome': 'Herzlich Willkommen im Manager für Produktionen!',
		'prod_welcome_block': '<p>Sie können Gebäude aufnehmen und dann die Produktionen im Manager stoppen oder starten. Klicken Sie "Aufnahme starten" an und klicken dann Ihre Gebäuden an die in der Liste erscheinen sollen. Danach klicken Sie wieder im Produktionsmanager auf "Aufnahme stoppen" an. Es wird dann eine Liste der angeklickten Gebäude angezeigt. Speichern sie diese als Vorlage. Nächstes Mal können Sie die Vorlage laden, Sie sehen den "Status" und können mit dem Schieberegler die Gebäudeproduktion steuern, abschließend auf "Senden" klicken.</p>'
	},
	'fr-fr': {
		'btn_close': 'Fermer',
		'btn_submit': 'Soumettre',
		'btn_reset': 'Remise à Zéro',
		'btn_reload': 'Recharger',
		'btn_fix': 'Corriger les différences',
		'manager_mismatch': 'Différent',
		'load_template': 'Charger Modèle' ,
		'save_template': 'Enregistrer Modèle',
		'command_sent': 'Commande Envoyée',
		'no_free_expl': 'Pas d\'Explorateurs de libre',
		'no_free_geo': 'Pas de Géologues de libre',
		'not_home' : "Ce n'est pas votre Ile !",
		'bad_template' : 'Mauvais Fichier de Modèle',
		'spec_time_normal': 'Temps Nécessaire',
		'spec_time_arrival': "Date d'Arrivée",
		'buff_not_recorded' : 'Fortifiant non Enregistré ! Type - ',
		'buff_wrong_zone' : 'Mauvaise Zone',
		'buff_wrong_name' : 'Nom Différent',
		'buff_not_exist' : "n'existe pas",
		'buff_buffed' : 'déjà Fortifié',
		'buff_not_buffed' : 'Non Fortifié',
		'buff_ready': 'Prêt',
		'buff_used': 'Fortifiants qui seront utilisés:',
		'buff_rec_start': "Début de l'Enregistrement",
		'buff_rec_stop': "Arrêter l'Enregistrement",
		'buff_rec_progress': 'Enregistrement en cours!',
		'buff_zoneowner': 'Liste des Fortifiants de la Zone:',
		'buff_not_your_zone': "Cette Liste des Fortifiants n'est pas pour votre Zone!",
		'buff_start_record': "Début de l'Enregistrement",
		'buff_stop_record': "Arreter l'Enregistrement",
		'buff_record_more': "Continuer l'Enregistrement",
		'buff_welcome': 'Bienvenue dans le Gestionnaire de Fortifiants!',
		'buff_welcome_block': "<p>Vous pouvez enregistrer ce que vous avez besoin pour fortifier et le refaire automatiquement. Cliquer sur le bouton 'Début de l'Enregistrement' et fortfifiez vos batiments (ou ceux de vos amis). Après cela, revenez ici et cliquer sur 'Arrêter l'Enregistrement'. Vous verrez la liste des batiments et des fortifiants associés. Enregistrer cette liste comme Modèle et la fois suivante, cliquer simplement sur 'Charger Modèle' puis 'Soumettre'.</p><p>Les batiments sur fond rouge ne seront pas fortifiés.. Ainsi si l'une des lignes de fortifiant est rouge, les batiments avec ce fortifiant ne seront pas fortifiés</p>",
		'experimental': "EXPERIMENTALE",
		'auc_warning': "Utiliser seulement après avoir payé 10k d'or sur Unity. Toujours 'Recharger' avant de cliquer sur 'Enchérir'.",
		'auc_current': "ID Enchère Actuel:",
		'auc_bidding_count': "Compteur d'Enchères:",
		'auc_endtime': "Enchère finie dans:",
		'auc_ended': "Enchère Terminée",
		'auc_item': "Objet de l'Enchère:",
		'auc_item_desc': "Description de l'Objet:",
		'auc_initial_cost': "Prix Initial:",
		'auc_increment': "Incrément:",
		'auc_bid_for': "Enchérissez pour:",
		'auc_you_have': "Vous avez:",
		'auc_your_max': "Votre Enchère est la plus haute, donc vous ne pouvez pas Surenchérir",
		'auc_do_bid': 'Enchèrir',
		'prod_estimate': 'Temps Estimé',
		'prod_finish': 'Date de Fin',
		'prod_timed': 'Production Chronométrée',
		'prod_queuesize': 'Taille de la file',
		'prod_welcome': 'Bienvenue dans le Gestionnaire de l’état de production !',
        'prod_welcome_block': "<p>Vous pouvez enregistrer l’état de production des bâtiments puis les arrêter ou les démarrer en masse. Cliquer sur le bouton 'Début de l'enregistrement' et sélectionnez vos bâtiments. Après cela, revenez ici et cliquer sur 'Arrêter l'Enregistrement'. Vous verrez la liste des bâtiments avec l'état actuel. Enregistrer cette liste comme Modèle et la fois suivante, cliquer simplement sur 'Charger Modèle' puis 'Soumettre'.</p>",
		'armyCurrentArmy': 'Armée actuelle',
		'armyNewArmy': 'Nouvelle armée à charger',
		'armyUnload': 'Enlever les sélections',
		'armyLoad': 'Charger une armée'
	},
	'es-es': {
		'btn_submit': 'Enviar',
		'btn_reset': 'Reiniciar',
		'btn_reload': 'Recargar',
		'btn_fix': 'Corregir diferencia(s)',
		'manager_mismatch': 'diferente',
		'load_template': 'Cargar plantilla' ,
		'save_template': 'Guardar plantilla',
		'command_sent': 'Comando enviado',
		'no_free_expl': 'No tienes exploradores disponibles',
		'no_free_geo': 'No tienes geólogos disponibles',
		'not_home' : '¡Esta no es tu isla!',
		'bad_template' : 'Mala plantilla',
		'spec_time_normal': 'Duración de búsqueda',
		'spec_time_arrival': 'Hora de llegada',
		'buff_not_recorded' : '¡Potenciador no registrado! Tipo - ',
		'buff_wrong_zone' : 'zona incorrecta',
		'buff_wrong_name' : 'edificio distinto',
		'buff_not_exist' : 'no existe',
		'buff_buffed' : 'ya potenciado',
		'buff_not_buffed' : 'no potenciado',
		'buff_ready': 'listo',
		'buff_used': 'Potenciadores que serán utilizados:',
		'buff_rec_start': 'Grabación iniciada',
		'buff_rec_stop': 'Grabación detenida',
		'buff_rec_progress': '¡Grabación en curso!',
		'buff_zoneowner': 'Propietario de la zona a potenciar:',
		'buff_not_your_zone': '¡Esta plantilla no es para esta zona!',
		'buff_start_record': 'Iniciar grabación',
		'buff_stop_record': 'Detener grabación',
		'buff_record_more': 'Grabar más',
		'buff_welcome': '¡Bienvenido al gestor de potenciadores!',
		'buff_welcome_block': '<p>Puedes grabar lo que necesitas potenciar y luego reproducirlo automáticamente. Presiona el botón "Iniciar grabación" y potencia tus edificios (o los de tus amigos). Después, regresa y presiona "Detener grabación". Verás una lista de edificios y sus potenciadores. Guárdalo como plantilla y la próxima vez simplemente carga la plantilla y presiona Enviar.</p><p>Los edificios en rojo no se potenciarán. Además, si uno de los potenciadores de la plantilla está en rojo (es decir, no tienes suficientes), no se potenciarán todos los edificios asignados con este potenciador.</p>',
		'experimental': "EXPERIMENTAL",
		'auc_warning': 'Usar solo después de desbloquear por 10k de oro en Unity (navegador). Recarga siempre antes de pujar.',
		'auc_current': "ID de la subasta:",
		'auc_bidding_count': "Recuento de pujas:",
		'auc_endtime': "Termina en:",
		'auc_ended': "Finalizada",
		'auc_item': "Artículo en subasta:",
		'auc_item_desc': "Descripción del artículo:",
		'auc_initial_cost': "Puja inicial:",
		'auc_increment': "Incrementos de:",
		'auc_bid_for': "Puja por:",
		'auc_you_have': "Tienes:",
		'auc_your_max': "Eres el mejor postor, no puedes pujar de nuevo",
		'auc_do_bid': 'Pujar',
		'prod_estimate': 'Tiempo estimado',
		'prod_finish': 'Data de fin',
		'prod_timed': 'Temporizador de Producción',
		'prod_queuesize': 'Tamaño en cola',
		'prod_welcome': '¡Bienvenido al gestor de edificios de producción!',
		'prod_welcome_block': '<p>Puedes grabar un listado de edificios para luego detenerlos o iniciarlos en masa de manera automática. Presiona el botón "Iniciar grabación" y selecciona los edificios. Después, regresa y presiona "Detener grabación". Verás la lista de edificios que seleccionaste. Guarda la plantilla y la próxima vez simplemente carga la plantilla y presiona Enviar.</p>',
		'menustyle_grouped': 'Agrupado',
		'menustyle_linear': 'Lineal',
		'menustyle_desc': 'Estilo del menú',
		'deffilter_desc': 'Filtro de juego',
		'dateformat_desc': 'Formato de fechas',
		'geotemplates_desc': 'Plantillas de Geólogo: ',
		'expltemplates_desc': 'Plantillas de Explorador: ',
		'bufftemplates_desc': 'Plantillas de Potenciadores: ',
		'buitemplates_desc': 'Plantillas de Edificios: ',
		'armytemplates_desc': 'Plantillas de Ejército: ',
		'geodeftask_desc': 'Tarea predeterminada de Geólogos',
		'expldeftask_desc': 'Tarea predeterminada de Exploradores',
		'spectimetype_desc': 'Modo de cálculo de tiempo',
		'armyCurrentArmy': 'Unidades asignadas',
		'armyNewArmy': 'Nuevas unidades a asignar',
		'armyUnload': 'Descargar unidades',
		'armyLoad': 'Cargar unidades'
	},
    "pl-pl": {
        "btn_submit": "Wyślij",
        "btn_reset": "Resetuj",
        "btn_reload": "Przeładuj",
        "btn_fix": "Napraw niedopasowanie",
        "manager_mismatch": "Niedopasowanie",
        "load_template": "Wczytaj szablon",
        "save_template": "Zapisz jako szablon",
        "command_sent": "Komenda wysłana",
        "no_free_expl": "Brak wolnych odkrywców",
        "no_free_geo": "Brak wolnych geologów",
        "not_home": "Nie twoja strefa domowa!",
        "bad_template": "Niepoprawny plik szablonu",
        "spec_time_normal": "Potrzebny czas",
        "spec_time_arrival": "Czas powrotu",
        "buff_not_recorded": "Premia nie jest zarejestrowana! Typ - ",
        "buff_wrong_zone": "Niewłaściwa strefa premii",
        "buff_wrong_name": "Niedopasowanie nazwy premii",
        "buff_not_exist": "Premia nie istnieje",
        "buff_buffed": "Premia już przydzielona",
        "buff_not_buffed": "Premia nie przydzielona",
        "buff_ready": "Premia gotowa",
        "buff_used": "Użyte premie:",
        "buff_rec_start": "Rozpocznij nagrywanie",
        "buff_rec_stop": "Zatrzymaj nagrywanie",
        "buff_rec_progress": "Nagrywanie premii w toku!",
        "buff_zoneowner": "Właściciel premiowanej strefy:",
        "buff_not_your_zone": "Ta lista premii nie jest przeznaczona dla Twojej strefy!",
        "buff_start_record": "Rozpocznij nagrywanie",
        "buff_stop_record": "Zatrzymaj nagrywanie",
        "buff_record_more": "Nagraj więcej premii",
        "buff_welcome": "Witamy w menadżerze premii!",
        "buff_welcome_block": "<p>Możesz nagrać premie budynków, a następnie automatycznie to odtworzyć. Naciśnij przycisk 'Rozpocznij nagrywanie' i premiuj swoje (lub znajomego) budynki. Po tym, wróć i naciśnij 'Zatrzymaj nagrywanie'. Zobaczysz listę budynków i ich premii. Zapisz to jako szablon i następnym razem, po prostu załaduj szablon i wciśnij Wyślij.</p><p>Budynki z czerwonym tłem nie będą premiowane... także, jeśli jedna z dostępnych zakładek premii będzie czerwona, nie wszystkie budynki będą premiowane</p>",
        "experimental": "EKSERYMENTALNE",
        "auc_warning": "Użyj tylko po zapłaceniu 10ooo monet w Unity. Zawsze przeładuj zanim dokonasz oferty.",
        "auc_current": "Aktualna aukcja:",
        "auc_bidding_count": "Licznik ofert:",
        "auc_endtime": "Czas zakończenia:",
        "auc_ended": "Zakończono",
        "auc_item": "Przedmiot aukcji:",
        "auc_item_desc": "Opis przedmiotu:",
        "auc_initial_cost": "Koszt początkowy:",
        "auc_increment": "Przyrost:",
        "auc_bid_for": "Postaw zakład na:",
        "auc_you_have": "Posiadasz:",
        "auc_your_max": "Twój zakład jest maksymalny, więc nie możesz postawić kolejnego zakładu",
        "auc_do_bid": "Złóż ofertę",
        "prod_estimate": "Szacowany czas",
        "prod_finish": "Godzina zakończenia",
        "prod_timed": "Produkcja na czas",
        "prod_queuesize": "Rozmiar kolejki",
        "prod_welcome": "Witamy w menadżerze produkcji!",
        "prod_welcome_block": "<p>Możesz stworzyć listę budynków, w których będziesz zbiorczo uruchamiał i zatrzymywał produkcję. Naciśnij przycisk 'Rozpocznij nagrywanie' i wybierz budynki na mapie. Następnie wróć do menadżera produkcji i naciśnij 'Zatrzymaj nagrywanie'. Zobaczysz listę budynków z aktualnym statusem produkcji. Zapisz listę jako plik, który później będziesz mógł wczytać i sterować produkcją przyciskiem Wyślij.</p>",
        "menustyle_grouped": "Zgrupowane",
        "menustyle_linear": "Liniowo",
        "menustyle_desc": "Styl menu",
        "deffilter_desc": "Domyślny filtr",
        "dateformat_desc": "Format daty",
        "geotemplates_desc": "Szablony Geologów: ",
        "expltemplates_desc": "Szablony Odkrywców: ",
        "bufftemplates_desc": "Szablony premii: ",
        "buitemplates_desc": "Szablony budynków: ",
        "geodeftask_desc": "Domyślne zadanie Geologa",
        "expldeftask_desc": "Domyślne zadanie Odkrywcy",
        "spectimetype_desc": "Domyślne ustawienie kalkulacji czasu",
        "armyCurrentArmy": "Aktualna armia",
        "armyNewArmy": "Nowa armia do załadowania",
        "armyUnload": "Rozładuj zaznaczonych",
        "armyLoad": 'Załaduj armię'
    },
	'pt-br': {
		'btn_submit': 'Confirmar',
		'btn_reset': 'Redefinir',
		'btn_reload': 'Recarregar',
		'btn_fix': 'Corigir',
		'manager_mismatch': 'diferente',
		'load_template': 'Carregar modelo' ,
		'save_template': 'Salvar modelo',
		'command_sent': 'Comando enviado',
		'no_free_expl': 'Nenhum explorador livre',
		'no_free_geo': 'Nenhuim geologo livre',
		'not_home' : 'Não é a sua ilha!',
		'bad_template' : 'Modelo incompativel',
		'spec_time_normal': 'Tempo normal',
		'spec_time_arrival': 'Hora da chegada',
		'buff_not_recorded' : 'Catalizador não gravado! Tipo - ',
		'buff_wrong_zone' : 'zona errada',
		'buff_wrong_name' : 'nome errado',
		'buff_not_exist' : 'não existe',
		'buff_buffed' : 'ja catalizado',
		'buff_not_buffed' : 'não catalizado',
		'buff_ready': 'pronto',
		'buff_used': 'Catalizadores que serão usados:',
		'buff_rec_start': 'Gravação iniciada',
		'buff_rec_stop': 'Gravação parada',
		'buff_rec_progress': 'Gravação em andamento!',
		'buff_zoneowner': 'Proprietario da zona da lista de catalização:',
		'buff_not_your_zone': 'Esta lista de catalização não é para esta zona!',
		'buff_start_record': 'Iniciar gravação',
		'buff_stop_record': 'Parar gravação',
		'buff_record_more': 'Gravar mais',
		'buff_welcome': 'Bem-vindo ao gerente de catalização!',
		'buff_welcome_block': '<p>Você pode gravar o que precisa para catalizar e depois reproduzi-lo automaticamente. Pressione o botão "Iniciar gravação" e catalize seus edifícios (ou amigos). Depois disso, volte e pressione "Parar gravação". Você verá a lista de edifícios e seus catalizadores. Salve-o como um modelo e da próxima vez apenas carregue o modelo e pressione Confirmar.</p><p>Edifícios com fundo vermelho não serão catalizados. Além disso, se uma das fileiras de catalizadores disponíveis for vermelha, nem todos os edifícios serão catalizados com este catalizador.</p>',
		'experimental': "EXPERIMENTAL",
		'auc_warning': 'Use somente após pagar 10k de moedas de ouro. Sempre recarregue os dados antes de fazer um lance.',
		'auc_current': "ID leilão atual",
		'auc_bidding_count': "Contagem de lances:",
		'auc_endtime': "Tempo para final:",
		'auc_ended': "terminou",
		'auc_item': "Item do leilão:",
		'auc_item_desc': "Descrição do item:",
		'auc_initial_cost': "custo inicial:",
		'auc_increment': "Incrementar de:",
		'auc_bid_for': "Apostar para:",
		'auc_you_have': "Você tem:",
		'auc_your_max': "Você é o licitante mais alto, então não pode fazer outra aposta",
		'auc_do_bid': 'Apostar',
		'prod_estimate': 'Tempo estimado',
		'prod_finish': 'Tempo de término da produção',
		'prod_timed': 'Filas de produção',
		'prod_queuesize': 'Tamanho da fila',
		'prod_welcome': 'Bem-vindo ao gerente de produção!',
		'prod_welcome_block': '<p>Esta opçãopermite criar listas de edifícios  para ativar e desativar ao mesmo tempo. Após "Iniciar gravação", selecione os edifícios que deseja colocar na lista. Uma vez selecionado, volte aqui e pressione "Parar gravação". A lista de edifícios selecionados com seu status relativo será exibida. Salve o modelo assim da próxima vez, basta recarregar e "Confirmar".</p>'
	}
};
