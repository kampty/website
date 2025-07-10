import sessionJsLogo from '@/assets/images/projectsLogos/session-js.png'

/* Scopes: 
 * 1 = created in one day
 * 2 = under a week
 * 3 = under a month
 * 4 = under a year
 * 5 = more than a year
 */

export const technologies = {
  web: ['React', 'NextJS', 'AMP', 'GraphQL', 'MaterialUI', 'Reactstrap', 'Bootstrap', 'less', 'React-redux', 'Redux-toolkit', 'next-i18next', 'react-reveal', 'rtk-query', 'React-admin', 'React-router', 'Jest', 'ThreeJS', 'React-three-fiber', 'Vite', 'Preact', 'webpack', 'rollup', 'babel', 'Mapbox', 'Browser Extension', 'workbox', 'Service Worker', 'TailwindCSS', '@shadcn/ui', 'Remix', 'IndexedDB'],
  mobile: ['React Native', 'Android', 'Expo', 'React-native-paper'],
  backend: ['NodeJS', 'Bun', 'TypeScript', 'Express', 'Fastify', 'Elysia', 'SignalR', 'streamlink', 'ffmpeg', 'Kubernetes', 'Python', 'PHP', 'bee-queue', 'Vanilla JS', 'Telegram MTProto', 'Ruby on Rails', 'puppeteer'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'LevelDB', 'sqlite'],
  design: ['Figma', 'Sketch', 'Figma Plugin API', 'Figma REST API'],
  gameDev: ['Unity', 'C#', 'Photon Engine', 'Scratch API', 'Turbowarp'],
  bots: ['VK API', 'VK-IO', 'Telegram Bot API', 'VK API', 'Telegram Gaming Platform', 'Яндекс.Диалоги API'],
  devOps: ['Docker', 'Kata containers', 'bee-queue', 'nginx', 'FastCGI', 'apache', 'Tor Hidden Service'],
  ai: ['markovify', 'GPT', 'OpenAI Moderation', 'OpenAI Whisper'],
  payments: ['YooKassa', 'QIWI p2p'],
  software: ['Go', 'giu', 'imgui', 'JavaScript', 'Tauri', 'Electron', 'Java', 'phpDevelStudio', 'Swift', 'SwiftUI'],
  modeling: ['Spark AR', 'Blender'],
  other: ['McDonalds API', 'uCoz CMS', 'DuckDuckGo API', 'OBS Plugins', 'Clarifai API', 'Cloudflare API', 'OpenStreetMap API', 'C++'],
} as const

type ValueOf<T> = T[keyof T]
type Technology = ValueOf<typeof technologies>[number]

export type Project = {
  name: string
  stack: Technology[]
  supported?: boolean | 'partially'
  dates: {
    devStart: string
    release?: string
    abandon?: string
  }
  scope: 1 | 2 | 3 | 4 | 5
  description: {
    'ru-RU': string
    _DEFAULT_: string
  }
  unpublic?: boolean
  hidden?: boolean
  logo?: string
  tags?: ('personalsite' | 'order')[]
  links?: string[]
  category: 'game/windows10'
  | 'game/android'
  | 'website'
  | 'website/darknet'
  | 'bot/telegram'
  | 'bot/reddit'
  | 'bot/yandex_alice'
  | 'bot/vk'
  | 'figma_plugin'
  | 'npmjs_library'
  | 'app'
  | 'personalsite'
  | 'order'
  | 'figma_plugin'
  | 'npmjs_library'
  | 'developer_tool'
  | 'instagram_mask'
  | 'chrome_extension'
  | 'stream'
  | 'minecraft_map'
  | 'programming_language'
  | 'widget'
  | 'robot'
  | 'utility'
  | 'other'
  id: string
}

const projects: Project[] = [
  {
    name: 'Coming soon',
    stack: [
      'React', 'NextJS', 'next-i18next', 'TypeScript',
      'Service Worker', 'workbox', 'YooKassa', 'sqlite',
      '@shadcn/ui', 'React-redux', 'Redux-toolkit', 'NodeJS',
      'webpack', 'TailwindCSS'
    ],
    supported: true,
    dates: {
      devStart: '27 January 2024',
      release: '29 January 2024'
    },
    scope: 3,
    description: {
      'ru-RU': 'Test',
      _DEFAULT_: 'Test',
    },
    unpublic: false,
    hidden: false,
    logo: sessionJsLogo,
    links: [
      'https://ons.sessionbots.directory'
    ],
    category: 'website',
    id: 'ons-registry'
  },
  {
    name: 'UwU',
    stack: [
      'React', 'Remix', 'TypeScript',
      'React-redux', 'Redux-toolkit', 'NodeJS',
      'TailwindCSS', 'Redis',
      'OpenAI Moderation'
    ],
    supported: true,
    dates: {
      devStart: '27 January 2024',
      release: '29 January 2024'
    },
    scope: 2,
    description: {
      'ru-RU': 'Test',
      _DEFAULT_: 'Test',
    },
    unpublic: true,
    hidden: false,
    logo: sessionJsLogo,
    links: [
      'https://floofbite.com',
      'https://floofbite.com',
    ],
    category: 'website',
    id: 'session-bots-directory'
  },
  {
    name: 'Lorem ipsum',
    stack: [
      'Vanilla JS'
    ],
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 1,
    description: {
      'ru-RU': 'Сайт c плохим интерфейсом, для поста на реддите',
      _DEFAULT_: 'Website with a bad interface, made for a post on reddit',
    },
    unpublic: false,
    hidden: true,
    links: [
      'https://floofbite.com'
    ],
    category: 'website',
    id: 'bad-ux-support-form'
  },
  {
    name: 'Test project',
    stack: [
      'Java'
    ],
    dates: {
      devStart: '2020',
      abandon: '2020'
    },
    scope: 2,
    description: {
      'ru-RU': 'Приложение',
      _DEFAULT_: 'Application',
    },
    unpublic: false,
    hidden: false,
    category: 'app',
    tags: [
      'order'
    ],
    id: 'pgi'
  },
  {
    name: 'Nikita-bot',
    stack: [
      'Python',
      'markovify'
    ],
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2020'
    },
    scope: 1,
    description: {
      'ru-RU': '123',
      _DEFAULT_: '123',
    },
    unpublic: false,
    hidden: false,
    category: 'website',
    id: 'nikita-bot'
  },
  {
    name: 'В чем разница?',
    stack: [
      'Vanilla JS'
    ],
    supported: false,
    dates: {
      devStart: '2018',
      release: '2018',
      abandon: '2018'
    },
    scope: 1,
    description: {
      'ru-RU': 'HTML.',
      _DEFAULT_: 'HTML.',
    },
    unpublic: false,
    hidden: false,
    category: 'website',
    id: 'eng'
  },
  {
    name: 'qqsh',
    stack: [
      'phpDevelStudio',
      'PHP'
    ],
    dates: {
      devStart: '2016',
      abandon: '2016'
    },
    scope: 1,
    description: {
      'ru-RU': 'Игра',
      _DEFAULT_: 'Game'
    },
    unpublic: false,
    hidden: false,
    category: 'game/windows10',
    id: 'qqsh'
  },
]

export default projects