"use client";

import { useEffect, useRef, useState } from "react";

const languageOptions = [
  { code: "ru", short: "RU", label: "Русский" },
  { code: "kk", short: "KZ", label: "Қазақша" },
  { code: "en", short: "EN", label: "English" },
];

const translations = {
  ru: {
    navLabel: "Основная навигация",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    languageLabel: "Выбор языка сайта",
    languageTitle: "Язык",
    navItems: [
      ["О нас", "#about"],
      ["Услуги", "#services"],
      ["ЕСУТД", "#esutd"],
      ["Процесс", "#process"],
      ["Отзывы", "#reviews"],
      ["Контакты", "#contacts"],
    ],
    headerCta: "Обсудить учет",
    heroEyebrow: "Бухгалтерия и налоги для бизнеса в Казахстане",
    heroTitle: "Возьмем учет на себя, чтобы вы управляли ростом",
    heroText:
      "Сопровождаем ТОО и ИП: отчетность, зарплата, налоги, первичные документы и консультации с понятной стоимостью от 18 000₸ в месяц.",
    heroPrimary: "Получить расчет",
    heroSecondary: "Посмотреть услуги",
    heroPanelLabel: "Быстрый расчет",
    heroPanelKicker: "Экспресс-оценка",
    heroPanelTime: "15 минут",
    heroPanelText: "на первичный разбор задач и примерный бюджет сопровождения",
    whatsapp: "Написать в WhatsApp",
    aboutEyebrow: "Berestova accounting",
    aboutTitle: "Спокойная бухгалтерия без лишней бюрократии",
    stats: [
      ["7 лет", "помогаем предпринимателям держать учет в порядке"],
      ["80+", "проектов на сопровождении и разовых аудитах"],
      ["48 ч", "средний срок запуска после передачи документов"],
    ],
    servicesEyebrow: "Услуги",
    servicesTitle: "Выберите формат поддержки",
    servicesText:
      "Можно передать нам весь учет или закрыть отдельную задачу: от декларации до восстановления базы после ошибок.",
    services: [
      {
        number: "01",
        title: "Комплексное сопровождение",
        text: "Ежемесячный учет, первичка, налоги, зарплата, сверки и напоминания о сроках.",
        price: "от 18 000₸ / месяц",
        action: "Запросить расчет",
        featured: true,
      },
      {
        number: "02",
        title: "Налоговая консультация",
        text: "Разберем режим, риски, льготы, корректность платежей и законные способы оптимизации.",
        action: "Получить консультацию",
      },
      {
        number: "03",
        title: "Отчетность и декларации",
        text: "Подготовим и отправим формы для налоговой и статистики, проверим начисления.",
        action: "Сдать отчет",
      },
      {
        number: "04",
        title: "Восстановление учета",
        text: "Наведем порядок в документах, сверим остатки, найдем ошибки и подготовим план исправлений.",
        action: "Проверить учет",
      },
    ],
    esutdEyebrow: "ЕСУТД для грузоперевозчиков",
    esutdTitle: "Комплексное сопровождение в системе транспортных документов",
    esutdText:
      "Вы владелец автопарка или индивидуальный предприниматель, которому нужно работать в Единой системе управления транспортными документами? Поможем настроить процессы быстро, корректно и в полном соответствии с законодательством Республики Казахстан.",
    esutdServices: [
      {
        number: "01",
        title: "Точечная индивидуальная консультация",
        audience: "Для компаний и ИП с малым автопарком до 5 грузовых автомобилей.",
        points: [
          "Разбор работы системы ЕСУТД именно с позиции перевозчика груза.",
          "Пошаговые ответы на ваши вопросы без воды и сложных технических терминов.",
          "Разбор типичных ошибок при оформлении электронных путевых листов и ЭТТН.",
        ],
      },
      {
        number: "02",
        title: "Быстрый старт: регистрация и настройка ролей",
        audience: "Не тратьте время на технические нюансы - мы сделаем все за вас.",
        points: [
          "Помощь в корректной регистрации компании в системе ЕСУТД.",
          "Настройка личного кабинета и профиля организации.",
          "Разграничение прав доступа для руководителей, диспетчеров, логистов и водителей.",
        ],
      },
      {
        number: "03",
        title: "Организация медицинского осмотра",
        audience: "Закрываем один из критических вопросов автоматизации перевозок.",
        points: [
          "Индивидуальное рассмотрение вашей ситуации и подбор оптимального решения.",
          "Помощь в организации утверждения путевых листов сертифицированным медработником.",
          "Настройка цифровой подписи медработника для законного выпуска транспорта на линию.",
        ],
      },
    ],
    benefitsEyebrow: "Почему выбирают нас",
    benefitsTitle: "Решения без громоздкой бюрократии",
    benefitsText:
      "Мы знаем специфику малого бизнеса в сфере логистики и предлагаем только то, что нужно вашему бизнесу здесь и сейчас.",
    esutdBenefits: [
      "Узкая специализация на малом бизнесе в логистике",
      "Запуск работы в системе за 1-2 дня",
      "Правильное оформление документов по требованиям Министерства транспорта РК",
      "Индивидуальная настройка под ваш график, маршруты и роли команды",
    ],
    processEyebrow: "Как работаем",
    processTitle: "Прозрачный запуск без долгих встреч",
    processText:
      "Вы передаете вводные, мы оцениваем объем, фиксируем договоренности и ведем учет по календарю.",
    steps: [
      ["Диагностика", "Смотрим режим налогообложения, обороты, сотрудников и текущие обязательства."],
      [
        "План сопровождения",
        "Предлагаем перечень работ, стоимость, график обмена документами и ответственных.",
      ],
      ["Ежемесячный контроль", "Ведем учет, предупреждаем о сроках, отвечаем на вопросы и готовим отчеты."],
    ],
    guaranteesTitle: "Что вы получаете",
    guaranteesText:
      "Учет ведется по договору, документы хранятся в согласованной структуре, а ключевые решения фиксируются письменно.",
    guarantees: [
      "Персональный бухгалтер и резервный специалист",
      "Календарь налоговых сроков и платежей",
      "Конфиденциальность данных и доступов",
      "Ежемесячный управленческий обзор",
    ],
    reviewsEyebrow: "Отзывы 2GIS",
    reviewsTitle: "Клиенты отмечают четкую работу и поддержку",
    reviewsText: "По данным карточки компании на 2GIS: рейтинг 5.0",
    reviewsLink: "Смотреть на 2GIS",
    reviewsRatingLabel: "Рейтинг 2GIS",
    reviews: [
      {
        author: "Enk ..",
        date: "20 мая 2026",
        label: "Подтвержденный отзыв",
        text: "Клиент коротко отмечает отличную работу компании после посещения.",
      },
      {
        author: "Айжан Султанова",
        date: "27 февраля 2026",
        label: "Рекомендация",
        text: "Отзыв выделяет быстрый и четкий результат, компанию рекомендуют другим предпринимателям.",
      },
      {
        author: "Нурсат Кенасбек",
        date: "25 февраля 2026",
        label: "Отчеты и уведомления",
        text: "Клиент благодарит за помощь с отчетами и подготовкой уведомления.",
      },
      {
        author: "Алексей Шипиолов",
        date: "13 января 2026",
        label: "Аутсорсинг учета",
        text: "После перехода на сопровождение команда помогла навести порядок и оптимизировать налоговую нагрузку.",
      },
      {
        author: "Алексей Егоров",
        date: "13 января 2026",
        label: "Ответственные бухгалтеры",
        text: "Клиент отмечает четкую работу и профессиональный подход бухгалтеров.",
      },
      {
        author: "Перизат Кенжетаева",
        date: "9 января 2026",
        label: "Консультации",
        text: "В отзыве отмечены грамотные консультации, связь с командой и понятные объяснения по налогам.",
      },
    ],
    contactEyebrow: "Контакты",
    contactTitle: "Расскажите, какой учет нужно закрыть",
    contactText:
      "Оставьте контакты, и мы подготовим первичный расчет. Для настоящего проекта форму можно подключить к CRM, почте или WhatsApp.",
    address: "Алматы, Тастак 1 дом 11",
    gmail: "Написать в Gmail",
    gmailSubject: "Запрос на бухгалтерию",
    gmailBody: "Здравствуйте, я хочу обсудить сопровождение.",
    formName: "Имя",
    formNamePlaceholder: "Как к вам обращаться...",
    formPhone: "Телефон",
    formPhonePlaceholder: "+7 ___ ___ __ __...",
    formBusiness: "Формат бизнеса",
    businessOptions: ["ИП", "ТОО", "Нужна консультация"],
    formTask: "Задача",
    formTaskPlaceholder: "Например: нужна ежемесячная бухгалтерия...",
    formSubmit: "Отправить заявку",
    formSubmitting: "Отправляем...",
    formSuccess: "Заявка отправлена. Мы скоро свяжемся с вами.",
    formError: "Не получилось отправить заявку. Попробуйте позже или напишите в WhatsApp.",
    formPhoneError: "Неправильно введен номер.",
    formNote: "Нажимая кнопку, вы соглашаетесь на обработку данных для ответа на заявку.",
    footerTop: "Наверх",
  },
  kk: {
    navLabel: "Негізгі навигация",
    menuOpen: "Мәзірді ашу",
    menuClose: "Мәзірді жабу",
    languageLabel: "Сайт тілін таңдау",
    languageTitle: "Тіл",
    navItems: [
      ["Біз туралы", "#about"],
      ["Қызметтер", "#services"],
      ["БТҚБЖ", "#esutd"],
      ["Процесс", "#process"],
      ["Пікірлер", "#reviews"],
      ["Байланыс", "#contacts"],
    ],
    headerCta: "Есепті талқылау",
    heroEyebrow: "Қазақстандағы бизнеске бухгалтерия және салық",
    heroTitle: "Есепті біз жүргіземіз, сіз бизнестің өсуін басқарасыз",
    heroText:
      "ЖШС және ЖК үшін сүйемелдеу: есептілік, жалақы, салық, бастапқы құжаттар және айына 18 000₸ бастап түсінікті бағамен консультациялар.",
    heroPrimary: "Есеп алу",
    heroSecondary: "Қызметтерді көру",
    heroPanelLabel: "Жедел есептеу",
    heroPanelKicker: "Экспресс-бағалау",
    heroPanelTime: "15 минут",
    heroPanelText: "міндеттерді бастапқы талдауға және сүйемелдеудің шамамен бюджетіне",
    whatsapp: "WhatsApp-қа жазу",
    aboutEyebrow: "Berestova accounting",
    aboutTitle: "Артық бюрократиясыз тыныш бухгалтерия",
    stats: [
      ["7 жыл", "кәсіпкерлерге есепті тәртіпте ұстауға көмектесеміз"],
      ["80+", "сүйемелдеудегі және бір реттік аудиттегі жобалар"],
      ["48 сағ", "құжаттар тапсырылғаннан кейінгі орташа іске қосу мерзімі"],
    ],
    servicesEyebrow: "Қызметтер",
    servicesTitle: "Қолдау форматын таңдаңыз",
    servicesText:
      "Есепті толық тапсыруға немесе жеке міндетті жабуға болады: декларациядан бастап қателерден кейін базаны қалпына келтіруге дейін.",
    services: [
      {
        number: "01",
        title: "Кешенді сүйемелдеу",
        text: "Ай сайынғы есеп, бастапқы құжаттар, салық, жалақы, салыстырулар және мерзімдер туралы ескертулер.",
        price: "18 000₸ бастап / ай",
        action: "Есеп сұрау",
        featured: true,
      },
      {
        number: "02",
        title: "Салық консультациясы",
        text: "Режимді, тәуекелдерді, жеңілдіктерді, төлемдердің дұрыстығын және заңды оңтайландыру жолдарын талдаймыз.",
        action: "Консультация алу",
      },
      {
        number: "03",
        title: "Есептілік және декларациялар",
        text: "Салық және статистика формаларын дайындап жібереміз, есептеулерді тексереміз.",
        action: "Есеп тапсыру",
      },
      {
        number: "04",
        title: "Есепті қалпына келтіру",
        text: "Құжаттарды реттейміз, қалдықтарды салыстырамыз, қателерді тауып, түзету жоспарын дайындаймыз.",
        action: "Есепті тексеру",
      },
    ],
    esutdEyebrow: "Жүк тасымалдаушыларға арналған БТҚБЖ",
    esutdTitle: "Көлік құжаттары жүйесінде кешенді сүйемелдеу",
    esutdText:
      "Сіз автопарк иесісіз бе немесе Бірыңғай транспорттық құжаттарды басқару жүйесінде жұмыс істеуі қажет жеке кәсіпкерсіз бе? Процестерді тез, дұрыс және Қазақстан Республикасы заңнамасына толық сай баптауға көмектесеміз.",
    esutdServices: [
      {
        number: "01",
        title: "Нақты жеке консультация",
        audience: "5 жүк көлігіне дейінгі шағын автопаркі бар компаниялар мен ЖК үшін.",
        points: [
          "БТҚБЖ жұмысын дәл жүк тасымалдаушы тұрғысынан талдау.",
          "Сұрақтарыңызға артық сөзсіз және күрделі техникалық терминдерсіз кезең-кезеңімен жауап беру.",
          "Электрондық жол парақтары мен ЭТТН рәсімдеу кезіндегі типтік қателерді талдау.",
        ],
      },
      {
        number: "02",
        title: "Жылдам старт: тіркеу және рөлдерді баптау",
        audience: "Техникалық ұсақ-түйекке уақыт жоғалтпаңыз - бәрін біз жасаймыз.",
        points: [
          "Компанияны БТҚБЖ жүйесінде дұрыс тіркеуге көмектесу.",
          "Жеке кабинетті және ұйым профилін баптау.",
          "Басшылар, диспетчерлер, логистер және жүргізушілер үшін қолжетімділік құқықтарын бөлу.",
        ],
      },
      {
        number: "03",
        title: "Медициналық тексеруді ұйымдастыру",
        audience: "Тасымалдауды автоматтандырудағы маңызды сұрақтардың бірін жабамыз.",
        points: [
          "Жағдайыңызды жеке қарап, оңтайлы шешім таңдау.",
          "Сертификатталған медицина қызметкері арқылы жол парақтарын бекітуді ұйымдастыруға көмектесу.",
          "Көлікті заңды түрде рейске шығару үшін медицина қызметкерінің цифрлық қолтаңбасын баптау.",
        ],
      },
    ],
    benefitsEyebrow: "Неге бізді таңдайды",
    benefitsTitle: "Күрделі бюрократиясыз шешімдер",
    benefitsText:
      "Біз логистикадағы шағын бизнестің ерекшелігін білеміз және дәл қазір бизнесіңізге керек шешімдерді ғана ұсынамыз.",
    esutdBenefits: [
      "Логистикадағы шағын бизнеске тар мамандану",
      "Жүйеде жұмысты 1-2 күнде іске қосу",
      "ҚР Көлік министрлігінің талаптарына сай құжаттарды дұрыс рәсімдеу",
      "Кестеңізге, маршруттарыңызға және команда рөлдеріне жеке баптау",
    ],
    processEyebrow: "Қалай жұмыс істейміз",
    processTitle: "Ұзақ кездесулерсіз ашық іске қосу",
    processText:
      "Сіз бастапқы ақпаратты бересіз, біз көлемді бағалаймыз, келісімдерді бекітеміз және есепті күнтізбе бойынша жүргіземіз.",
    steps: [
      ["Диагностика", "Салық режимін, айналымды, қызметкерлерді және ағымдағы міндеттемелерді қараймыз."],
      ["Сүйемелдеу жоспары", "Жұмыстар тізімін, құнын, құжат алмасу кестесін және жауаптыларды ұсынамыз."],
      ["Ай сайынғы бақылау", "Есеп жүргіземіз, мерзімдерді ескертеміз, сұрақтарға жауап беріп, есептер дайындаймыз."],
    ],
    guaranteesTitle: "Сіз не аласыз",
    guaranteesText:
      "Есеп шарт бойынша жүргізіледі, құжаттар келісілген құрылымда сақталады, ал негізгі шешімдер жазбаша бекітіледі.",
    guarantees: [
      "Жеке бухгалтер және резервтік маман",
      "Салық мерзімдері мен төлемдер күнтізбесі",
      "Деректер мен қолжетімділіктің құпиялығы",
      "Ай сайынғы басқарушылық шолу",
    ],
    reviewsEyebrow: "2GIS пікірлері",
    reviewsTitle: "Клиенттер нақты жұмысты және қолдауды атап өтеді",
    reviewsText: "2GIS компания карточкасы бойынша: рейтинг 5.0",
    reviewsLink: "2GIS-тен көру",
    reviewsRatingLabel: "2GIS рейтингі",
    reviews: [
      {
        author: "Enk ..",
        date: "20 мамыр 2026",
        label: "Расталған пікір",
        text: "Клиент компанияға келгеннен кейін жұмыстың өте жақсы екенін қысқаша атап өтеді.",
      },
      {
        author: "Айжан Султанова",
        date: "27 ақпан 2026",
        label: "Ұсыным",
        text: "Пікірде жылдам әрі нақты нәтиже көрсетілген, компания басқа кәсіпкерлерге ұсынылады.",
      },
      {
        author: "Нурсат Кенасбек",
        date: "25 ақпан 2026",
        label: "Есептер және хабарламалар",
        text: "Клиент есептер мен хабарламаны дайындауға көмектескені үшін алғыс айтады.",
      },
      {
        author: "Алексей Шипиолов",
        date: "13 қаңтар 2026",
        label: "Есеп аутсорсингі",
        text: "Сүйемелдеуге өткеннен кейін команда тәртіп орнатып, салық жүктемесін оңтайландыруға көмектесті.",
      },
      {
        author: "Алексей Егоров",
        date: "13 қаңтар 2026",
        label: "Жауапты бухгалтерлер",
        text: "Клиент бухгалтерлердің нақты жұмысын және кәсіби тәсілін атап өтеді.",
      },
      {
        author: "Перизат Кенжетаева",
        date: "9 қаңтар 2026",
        label: "Консультациялар",
        text: "Пікірде сауатты консультациялар, командамен байланыс және салық бойынша түсінікті түсіндірулер атап өтілген.",
      },
    ],
    contactEyebrow: "Байланыс",
    contactTitle: "Қандай есепті жабу керегін айтып беріңіз",
    contactText:
      "Байланыс деректерін қалдырыңыз, біз бастапқы есеп дайындаймыз. Нақты жоба үшін форманы CRM, пошта немесе WhatsApp-қа қосуға болады.",
    address: "Алматы, Тастақ 1 үй 11",
    gmail: "Gmail-ге жазу",
    gmailSubject: "Бухгалтерия бойынша сұрау",
    gmailBody: "Сәлеметсіз бе, мен сүйемелдеуді талқылағым келеді.",
    formName: "Аты-жөніңіз",
    formNamePlaceholder: "Сізге қалай хабарласайық...",
    formPhone: "Телефон",
    formPhonePlaceholder: "+7 ___ ___ __ __...",
    formBusiness: "Бизнес форматы",
    businessOptions: ["ЖК", "ЖШС", "Консультация қажет"],
    formTask: "Міндет",
    formTaskPlaceholder: "Мысалы: ай сайынғы бухгалтерия керек...",
    formSubmit: "Өтінім жіберу",
    formSubmitting: "Жіберілуде...",
    formSuccess: "Өтінім жіберілді. Жақында сізбен байланысамыз.",
    formError: "Өтінімді жіберу мүмкін болмады. Кейінірек көріңіз немесе WhatsApp-қа жазыңыз.",
    formPhoneError: "Нөмір дұрыс енгізілмеген.",
    formNote: "Батырманы басу арқылы сіз өтінімге жауап беру үшін деректерді өңдеуге келісесіз.",
    footerTop: "Жоғары",
  },
  en: {
    navLabel: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Website language selector",
    languageTitle: "Language",
    navItems: [
      ["About", "#about"],
      ["Services", "#services"],
      ["ESUTD", "#esutd"],
      ["Process", "#process"],
      ["Reviews", "#reviews"],
      ["Contacts", "#contacts"],
    ],
    headerCta: "Discuss accounting",
    heroEyebrow: "Accounting and taxes for businesses in Kazakhstan",
    heroTitle: "We handle the books so you can manage growth",
    heroText:
      "Support for LLPs and sole proprietors: reporting, payroll, taxes, primary documents and consultations with clear pricing from 18,000₸ per month.",
    heroPrimary: "Get an estimate",
    heroSecondary: "View services",
    heroPanelLabel: "Quick estimate",
    heroPanelKicker: "Express review",
    heroPanelTime: "15 minutes",
    heroPanelText: "for an initial task review and an approximate support budget",
    whatsapp: "Message on WhatsApp",
    aboutEyebrow: "Berestova accounting",
    aboutTitle: "Calm accounting without unnecessary bureaucracy",
    stats: [
      ["7 years", "helping entrepreneurs keep their accounting in order"],
      ["80+", "projects under support and one-time audits"],
      ["48 h", "average launch time after documents are transferred"],
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Choose your support format",
    servicesText:
      "You can hand over all accounting or close a specific task: from a declaration to rebuilding records after errors.",
    services: [
      {
        number: "01",
        title: "Full accounting support",
        text: "Monthly accounting, primary documents, taxes, payroll, reconciliations and deadline reminders.",
        price: "from 18,000₸ / month",
        action: "Request an estimate",
        featured: true,
      },
      {
        number: "02",
        title: "Tax consultation",
        text: "We review your tax regime, risks, benefits, payment accuracy and legal optimization options.",
        action: "Get a consultation",
      },
      {
        number: "03",
        title: "Reports and declarations",
        text: "We prepare and submit tax and statistics forms, and check accrued amounts.",
        action: "Submit a report",
      },
      {
        number: "04",
        title: "Accounting recovery",
        text: "We organize documents, reconcile balances, find errors and prepare a correction plan.",
        action: "Check accounting",
      },
    ],
    esutdEyebrow: "ESUTD for freight carriers",
    esutdTitle: "Complete support in the transport document system",
    esutdText:
      "Do you own a fleet or run a sole proprietorship that needs to work in the Unified Transport Document Management System? We help set up the process quickly, correctly and in full compliance with Kazakhstan law.",
    esutdServices: [
      {
        number: "01",
        title: "Focused individual consultation",
        audience: "For companies and sole proprietors with small fleets of up to 5 trucks.",
        points: [
          "A review of ESUTD from the freight carrier's practical point of view.",
          "Step-by-step answers to your questions without fluff or heavy technical terms.",
          "Analysis of common mistakes in electronic waybills and e-consignment notes.",
        ],
      },
      {
        number: "02",
        title: "Quick start: registration and role setup",
        audience: "Do not spend time on technical details - we will handle them for you.",
        points: [
          "Assistance with proper company registration in ESUTD.",
          "Setup of the personal account and organization profile.",
          "Access rights for managers, dispatchers, logistics staff and drivers.",
        ],
      },
      {
        number: "03",
        title: "Medical examination setup",
        audience: "We close one of the key issues in transport automation.",
        points: [
          "Individual review of your situation and selection of the best solution.",
          "Help with arranging waybill approval by a certified medical worker.",
          "Digital signature setup for the medical worker to legally release vehicles to the route.",
        ],
      },
    ],
    benefitsEyebrow: "Why clients choose us",
    benefitsTitle: "Solutions without heavy bureaucracy",
    benefitsText:
      "We understand small logistics businesses and offer only what your company needs here and now.",
    esutdBenefits: [
      "Narrow specialization in small logistics businesses",
      "System launch in 1-2 days",
      "Correct documents under the requirements of Kazakhstan's Ministry of Transport",
      "Individual setup for your schedule, routes and team roles",
    ],
    processEyebrow: "How we work",
    processTitle: "A transparent launch without long meetings",
    processText:
      "You share the inputs, we estimate the scope, fix the agreements and run accounting by calendar.",
    steps: [
      ["Diagnosis", "We review the tax regime, turnover, employees and current obligations."],
      ["Support plan", "We propose the scope, cost, document exchange schedule and responsible people."],
      ["Monthly control", "We keep records, warn about deadlines, answer questions and prepare reports."],
    ],
    guaranteesTitle: "What you get",
    guaranteesText:
      "Accounting is handled under contract, documents are stored in an agreed structure, and key decisions are recorded in writing.",
    guarantees: [
      "Personal accountant and backup specialist",
      "Tax deadline and payment calendar",
      "Confidentiality of data and access",
      "Monthly management overview",
    ],
    reviewsEyebrow: "2GIS reviews",
    reviewsTitle: "Clients note clear work and support",
    reviewsText: "According to the company card on 2GIS: rating 5.0",
    reviewsLink: "View on 2GIS",
    reviewsRatingLabel: "2GIS rating",
    reviews: [
      {
        author: "Enk ..",
        date: "May 20, 2026",
        label: "Verified review",
        text: "The client briefly notes the company's excellent work after a visit.",
      },
      {
        author: "Aizhan Sultanova",
        date: "February 27, 2026",
        label: "Recommendation",
        text: "The review highlights a fast and clear result, and recommends the company to other entrepreneurs.",
      },
      {
        author: "Nursat Kenasbek",
        date: "February 25, 2026",
        label: "Reports and notices",
        text: "The client thanks the team for help with reports and preparing a notice.",
      },
      {
        author: "Alexey Shipiolov",
        date: "January 13, 2026",
        label: "Accounting outsourcing",
        text: "After switching to support, the team helped organize the records and optimize the tax burden.",
      },
      {
        author: "Alexey Egorov",
        date: "January 13, 2026",
        label: "Responsible accountants",
        text: "The client notes precise work and a professional approach from the accountants.",
      },
      {
        author: "Perizat Kenzhetaeva",
        date: "January 9, 2026",
        label: "Consultations",
        text: "The review notes competent consultations, communication with the team and clear tax explanations.",
      },
    ],
    contactEyebrow: "Contacts",
    contactTitle: "Tell us what accounting task you need to close",
    contactText:
      "Leave your contacts and we will prepare an initial estimate. For a live project, the form can be connected to CRM, email or WhatsApp.",
    address: "Almaty, Tastak 1, building 11",
    gmail: "Write via Gmail",
    gmailSubject: "Accounting request",
    gmailBody: "Hello, I would like to discuss accounting support.",
    formName: "Name",
    formNamePlaceholder: "How should we address you...",
    formPhone: "Phone",
    formPhonePlaceholder: "+7 ___ ___ __ __...",
    formBusiness: "Business format",
    businessOptions: ["Sole proprietor", "LLP", "Need a consultation"],
    formTask: "Task",
    formTaskPlaceholder: "For example: I need monthly accounting...",
    formSubmit: "Send request",
    formSubmitting: "Sending...",
    formSuccess: "Your request has been sent. We will contact you soon.",
    formError: "Could not send the request. Please try later or message us on WhatsApp.",
    formPhoneError: "The phone number is incorrect.",
    formNote: "By clicking the button, you consent to data processing so we can respond to your request.",
    footerTop: "Back to top",
  },
};

const reviewsSourceUrl =
  "https://2gis.kz/almaty/search/%D0%B1%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D0%B8%D1%8F/rubricId/653/firm/70000001110395312/tab/reviews?m=76.859859%2C43.247132%2F19.22";

const reviews = [
  {
    author: "Enk ..",
    date: "20 мая 2026",
    label: "Подтвержденный отзыв",
    text: "Клиент коротко отмечает отличную работу компании после посещения.",
  },
  {
    author: "Айжан Султанова",
    date: "27 февраля 2026",
    label: "Рекомендация",
    text: "Отзыв выделяет быстрый и четкий результат, компанию рекомендуют другим предпринимателям.",
  },
  {
    author: "Нурсат Кенасбек",
    date: "25 февраля 2026",
    label: "Отчеты и уведомления",
    text: "Клиент благодарит за помощь с отчетами и подготовкой уведомления.",
  },
  {
    author: "Алексей Шипиолов",
    date: "13 января 2026",
    label: "Аутсорсинг учета",
    text: "После перехода на сопровождение команда помогла навести порядок и оптимизировать налоговую нагрузку.",
  },
  {
    author: "Алексей Егоров",
    date: "13 января 2026",
    label: "Ответственные бухгалтеры",
    text: "Клиент отмечает четкую работу и профессиональный подход бухгалтеров.",
  },
  {
    author: "Перизат Кенжетаева",
    date: "9 января 2026",
    label: "Консультации",
    text: "В отзыве отмечены грамотные консультации, связь с командой и понятные объяснения по налогам.",
  },
];

function isValidKazakhstanPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return /^7\d{10}$/.test(digits) || /^8\d{10}$/.test(digits);
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.5c0 .7-.6 1.3-1.3 1.3C10.2 21.5 2.5 13.8 2.5 4.3 2.5 3.6 3.1 3 3.8 3h3.5c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5a7.3 7.3 0 0 0-7.3 7.3c0 5.1 7.3 11.7 7.3 11.7s7.3-6.6 7.3-11.7A7.3 7.3 0 0 0 12 2.5Zm0 10.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.3 5h15.4c1 0 1.8.8 1.8 1.8v10.4c0 1-.8 1.8-1.8 1.8H4.3c-1 0-1.8-.8-1.8-1.8V6.8C2.5 5.8 3.3 5 4.3 5Zm7.7 7.2 7-4.9H5l7 4.9Zm0 2.5L4.5 9.4v7.1h15V9.4L12 14.7Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5A9.4 9.4 0 0 0 4 16.8l-1 4.7 4.8-1A9.4 9.4 0 1 0 12 2.5Zm0 2A7.4 7.4 0 0 1 19.4 12 7.4 7.4 0 0 1 8.1 18.3l-.4-.2-2.1.5.5-2.1-.3-.4A7.4 7.4 0 0 1 12 4.5Zm-3.1 3.9c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.5.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.6 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.4l-1.7-.8c-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2-1.3-.8-.7-1.3-1.6-1.4-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.4Z" />
    </svg>
  );
}

export default function Home() {
  const [language, setLanguage] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const menuToggleRef = useRef(null);
  const navPanelRef = useRef(null);
  const t = translations[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("site-language");

    if (translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("site-language", language);
  }, [language]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    function handleOutsideMenuInteraction(event) {
      const target = event.target;

      if (navPanelRef.current?.contains(target) || menuToggleRef.current?.contains(target)) {
        return;
      }

      closeMenu();
    }

    document.addEventListener("pointerdown", handleOutsideMenuInteraction);
    document.addEventListener("click", handleOutsideMenuInteraction);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideMenuInteraction);
      document.removeEventListener("click", handleOutsideMenuInteraction);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function scrollToTop(event) {
    event.preventDefault();
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeMenuFromPanelBlank(event) {
    if (event.target.closest("a, button")) {
      return;
    }

    closeMenu();
  }

  function handleLanguageChange(nextLanguage) {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = formData.get("phone");

    if (!isValidKazakhstanPhone(phone)) {
      setSubmitState("phone-error");
      return;
    }

    setSubmitState("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          business: formData.get("business"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const isSubmitting = submitState === "loading";

  return (
    <>
      <header className={`site-header ${menuOpen ? "is-open" : ""}`} id="top">
        {menuOpen ? (
          <div
            className="menu-scrim"
            aria-hidden="true"
            role="presentation"
            onClick={closeMenu}
            onPointerDown={closeMenu}
          />
        ) : null}
        <div className="header-shell">
          <a className="brand" href="#top" aria-label="Berestova accounting" onClick={scrollToTop}>
            <img
              className="brand-logo"
              src="/assets/logo-pa.png"
              alt="Berestova accounting"
              width="82"
              height="64"
            />
            <span className="brand-name">Berestova accounting</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            ref={menuToggleRef}
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <div className="nav-panel" ref={navPanelRef} onClick={closeMenuFromPanelBlank}>
            <nav className="nav" aria-label={t.navLabel}>
              {t.navItems.map(([label, href]) => (
                <a href={href} key={href} onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="header-actions">
              <a className="phone" href="tel:+77776970905">
                +7 777 697 09 05
              </a>
              <a className="header-button" href="#contacts" onClick={closeMenu}>
                {t.headerCta}
              </a>
              <div className="language-switcher" role="group" aria-label={t.languageLabel}>
                <div className="language-options">
                  {languageOptions.map((option) => (
                    <button
                      className={language === option.code ? "is-active" : ""}
                      type="button"
                      key={option.code}
                      aria-pressed={language === option.code}
                      aria-label={option.label}
                      title={option.label}
                      onClick={() => handleLanguageChange(option.code)}
                    >
                      {option.short}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1 id="hero-title">{t.heroTitle}</h1>
              <p className="hero-text">{t.heroText}</p>
              <div className="hero-actions">
                <a className="primary-button" href="#contacts">
                  {t.heroPrimary}
                </a>
                <a className="secondary-button" href="#services">
                  {t.heroSecondary}
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label={t.heroPanelLabel}>
              <span className="panel-kicker">{t.heroPanelKicker}</span>
              <strong>{t.heroPanelTime}</strong>
              <p>{t.heroPanelText}</p>
              <a
                className="contact-button whatsapp-button"
                href="https://wa.me/7776970905"
                target="_blank"
                rel="noreferrer"
              >
                <span className="button-icon">
                  <WhatsAppIcon />
                </span>
                {t.whatsapp}
              </a>
            </aside>
          </div>
        </section>

        <section className="stats section" id="about">
          <div className="section-shell stats-grid">
            <div>
              <p className="eyebrow dark">{t.aboutEyebrow}</p>
              <h2>{t.aboutTitle}</h2>
            </div>
            {t.stats.map(([value, label]) => (
              <article key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow dark">{t.servicesEyebrow}</p>
              <h2>{t.servicesTitle}</h2>
              <p>{t.servicesText}</p>
            </div>

            <div className="service-grid">
              {t.services.map((service) => (
                <article className={`service-card ${service.featured ? "featured" : ""}`} key={service.number}>
                  <div className="card-icon">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  {service.price ? <span>{service.price}</span> : null}
                  <a href="#contacts">{service.action}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="esutd section" id="esutd">
          <div className="section-shell">
            <div className="esutd-hero">
              <div>
                <p className="eyebrow">{t.esutdEyebrow}</p>
                <h2>{t.esutdTitle}</h2>
              </div>
              <p>{t.esutdText}</p>
            </div>

            <div className="esutd-grid">
              {t.esutdServices.map((service) => (
                <article className="esutd-card" key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.audience}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="esutd-bottom">
              <div>
                <p className="eyebrow dark">{t.benefitsEyebrow}</p>
                <h3>{t.benefitsTitle}</h3>
                <p>{t.benefitsText}</p>
              </div>
              <div className="esutd-benefits">
                {t.esutdBenefits.map((benefit) => (
                  <div key={benefit}>{benefit}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="section-shell process-layout">
            <div>
              <p className="eyebrow dark">{t.processEyebrow}</p>
              <h2>{t.processTitle}</h2>
              <p>{t.processText}</p>
            </div>
            <ol className="steps">
              {t.steps.map(([title, text], index) => (
                <li key={title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="guarantees section">
          <div className="section-shell guarantees-grid">
            <article>
              <h2>{t.guaranteesTitle}</h2>
              <p>{t.guaranteesText}</p>
            </article>
            <div className="guarantee-list">
              {t.guarantees.map((guarantee) => (
                <div key={guarantee}>{guarantee}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="section-shell">
            <div className="reviews-top">
              <div className="section-heading compact">
                <p className="eyebrow dark">{t.reviewsEyebrow}</p>
                <h2>{t.reviewsTitle}</h2>
                <p>{t.reviewsText}</p>
              </div>
              <a className="reviews-source" href={reviewsSourceUrl} target="_blank" rel="noreferrer">
                {t.reviewsLink}
              </a>
            </div>

            <div className="reviews-summary" aria-label={t.reviewsRatingLabel}>
              <strong>5.0</strong>
              <span>★★★★★</span>
            </div>

            <div className="review-grid">
              {t.reviews.map((review, index) => (
                <blockquote className={index > 2 ? "mobile-hidden-review" : ""} key={review.author}>
                  <div className="review-card-head">
                    <span>{review.label}</span>
                    <small>{review.date}</small>
                  </div>
                  <p>{review.text}</p>
                  <cite>{review.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contacts">
          <div className="section-shell contact-layout">
            <div>
              <p className="eyebrow">{t.contactEyebrow}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-card">
                <a className="contact-line" href="tel:+77776970905">
                  <span className="contact-icon">
                    <PhoneIcon />
                  </span>
                  <span>+7 777 697 09 05</span>
                </a>
                <a
                  className="contact-line"
                  href="https://go.2gis.com/rWbcB"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon">
                    <PinIcon />
                  </span>
                  <span>{t.address}</span>
                </a>
                <div className="contact-buttons">
                  <a
                    className="contact-button whatsapp-button"
                    href="https://wa.me/7776970905"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="button-icon">
                      <WhatsAppIcon />
                    </span>
                    {t.whatsapp}
                  </a>
                  <a
                    className="contact-button gmail-button"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=anita999-123@list.ru&su=${encodeURIComponent(
                      t.gmailSubject
                    )}&body=${encodeURIComponent(t.gmailBody)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="button-icon">
                      <MailIcon />
                    </span>
                    {t.gmail}
                  </a>
                </div>
              </div>
            </div>

            <form className="lead-form" onSubmit={handleSubmit}>
              <label>
                {t.formName}
                <input
                  type="text"
                  name="name"
                  placeholder={t.formNamePlaceholder}
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                {t.formPhone}
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.formPhonePlaceholder}
                  autoComplete="tel"
                  inputMode="tel"
                  aria-invalid={submitState === "phone-error"}
                  aria-describedby={submitState === "phone-error" ? "phone-error" : undefined}
                  onChange={() => {
                    if (submitState === "phone-error") {
                      setSubmitState("idle");
                    }
                  }}
                  required
                />
              </label>
              <label>
                {t.formBusiness}
                <select name="business" defaultValue={t.businessOptions[0]} key={language}>
                  {t.businessOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                {t.formTask}
                <textarea
                  name="message"
                  rows="4"
                  placeholder={t.formTaskPlaceholder}
                />
              </label>
              <button className="primary-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? t.formSubmitting : t.formSubmit}
              </button>
              {submitState === "success" ? (
                <p className="form-status success" role="status" aria-live="polite">
                  {t.formSuccess}
                </p>
              ) : null}
              {submitState === "error" ? (
                <p className="form-status error" role="status" aria-live="polite">
                  {t.formError}
                </p>
              ) : null}
              {submitState === "phone-error" ? (
                <p className="form-status error" id="phone-error" role="status" aria-live="polite">
                  {t.formPhoneError}
                </p>
              ) : null}
              <p className="form-note">{t.formNote}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-shell footer-shell">
          <span>© 2026 Berestova accounting</span>
          <a href="#top">{t.footerTop}</a>
        </div>
      </footer>
    </>
  );
}
