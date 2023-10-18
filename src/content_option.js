const logotext = 'ГЛАВНАЯ';
const meta = {
  title: 'Анастасия Макарова - Главная',
  description:
    'Макарова Анастасия - режиссер, сценарист, корреспондент, журналист.',
};

const introdata = {
  title: 'Макарова Анастасия',
  animated: {
    first: 'Журналист, телеведущая.'
  },
  description:
    'Журналист, телеведущая, начальник отдела коммуникаций и связей с общественностью ФГУП «ПВС» МВД России',
  your_src_url: require('~/assets/title_page.jpg'),
};

const dataabout = {
  title: 'Обо мне',
  aboutme:
    'Окончила факультет телевидения МГУ с золотой медалью. Работаю в кадре 6 лет. Большой опыт взаимодействия с политиками федерального уровня, в том числе в рамках работы в партийном СМИ на базе Государственной Думы. Регулярно прохожу релевантные интересам и профессии обучения. Есть экспертиза в вопросах корпоративных PR и GR коммуникаций. Уверенные навыки фото/видеосъемки, видеомонтажа, продюсирования.',
};
const studtimeline = [
  {
    jobtitle: 'Аспирант',
    where: 'Институт этнологии и антропологии Российской академии наук',
    where2: 'Центр гендерных исследований',
    date: '2022',
  },
  {
    jobtitle: 'Магистр',
    where: 'Московский государственный университет им. М.В. Ломоносова, Москва',
    where2: 'Высшая школа телевидения МГУ, Телевидение',
    date: '2019',
  },
  {
    jobtitle: 'Бакалавр',
    where: 'Сургутский государственный педагогический университет, Сургут',
    where2: 'Филологический, Журналистика',
    date: '2017',
  },
];

const studtimeline2 = [
  {
    jobtitle: 'Мастерство телеведущего',
    where: 'Школа Первого канала',
    date: '2023',
  },
  {
    jobtitle: 'Диджитал-маркетинг',
    where: 'Высшая школа экономики',
    date: '2021',
  },
  {
    jobtitle: 'Телерадиоведущий',
    where: "Школа радио и телевидения 'На Шаболовке'",
    date: '2020',
  },
];
const skills = [
  {
    name: 'Озвучивание, интервьюирование, редактирование, управление проектами  ',
  },
  {
    name: 'Ведение переговоров, деловая коммуникация, проведение презентаций    ',
  },
  {
    name: 'Руководство коллективом, взаимодействие с телевидением, PR первых лиц компании  ',
  },
  {
    name: 'Грамотная речь, коммуникабельность, написание пресс-релизов    ',
  },
];

const services = [
  {
    jobtitle: 'Начальник отдела коммуникаций и связей с общественностью',
    where: "ФГУП ''ПВС'' МВД России",
    date: 'Октябрь 2021 — настоящее время',
  },
  {
    jobtitle: 'PR-директор',
    where: 'OLGA SKAZKINA, fashion house moscow',
    date: 'Январь 2021 — Октябрь 2021',
  },
  {
    jobtitle: 'Специалист по связям с общественностью',
    where: 'Министерство юстиции Российской Федерации',
    date: 'Сентябрь 2020 — Сентябрь 2021',
  },
  {
    jobtitle: 'Ведущая общественно-политической программы «Открытая студия»',
    where: 'Сетевое издание «Свободная Пресса»',
    date: 'Февраль 2020 — Октябрь 2020',
  },
  {
    jobtitle: 'Корреспондент',
    where: 'Первый канал, ОАО',
    date: 'Февраль 2018 — Апрель 2019',
  },
  {
    jobtitle: 'Корреспондент',
    where:"Телеканалы (Сургут, Москва) - ООО ''Красный квадрат'' (Москва) ЛДПР-ТВ (Москва) АО Телекомпания ''СургутИнформ-ТВ'' (Сургут)",
    date: 'Ноябрь 2014 — Апрель 2019',
  },
];

const imageData = [
  {
    src: require('~/assets/1.jpg'),
  },
  {
    src: require('~/assets/2.jpg'),
  },
  {
    src: require('~/assets/3.jpg'),
  },
  {
    src: require('~/assets/5.jpg'),
  },
  {
    src: require('~/assets/4.jpg'),
  },
  {
    src: require('~/assets/6.jpg'),
  },
];

const videoData = [
  {
    src: require('~/assets/reportazh.mp4'),
  },
  {
    src: require('~/assets/showreel.mov'),
  },
];

const contactConfig = {
  YOUR_EMAIL: 'ipchalva@rambler.ru',
  YOUR_FONE: '+7(977)944-86-05',
  description:
    'Предпочитаемые способы связи - электронная почта и мессенджеры.',
  YOUR_SERVICE_ID: 'service_id',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
};
export {
  meta,
  dataabout,
  imageData,
  studtimeline,
  studtimeline2,
  skills,
  services,
  introdata,
  contactConfig,
  logotext,
  videoData,
};
