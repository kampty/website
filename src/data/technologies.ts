import { ReactComponent as reactLogo } from '../assets/images/technologiesLogos/react.svg'
import { ReactComponent as nextLogo } from '../assets/images/technologiesLogos/nextjs.svg'
import { ReactComponent as preactLogo } from '../assets/images/technologiesLogos/preact.svg'
import { ReactComponent as createReactAppLogo } from '../assets/images/technologiesLogos/create-react-app.svg'
import { ReactComponent as viteLogo } from '../assets/images/technologiesLogos/vite.svg'
import { ReactComponent as javaScriptLogo } from '../assets/images/technologiesLogos/javascript.svg'
import { ReactComponent as mongoDBLogo } from '../assets/images/technologiesLogos/mongodb.svg'
import { ReactComponent as redisLogo } from '../assets/images/technologiesLogos/redis.svg'
import { ReactComponent as levelDBLogo } from '../assets/images/technologiesLogos/leveldb.svg'
import { ReactComponent as kubernetesLogo } from '../assets/images/technologiesLogos/kubernetes.svg'
import { ReactComponent as dockerLogo } from '../assets/images/technologiesLogos/docker.svg'
import { ReactComponent as nginxLogo } from '../assets/images/technologiesLogos/nginx.svg'
import { ReactComponent as apacheLogo } from '../assets/images/technologiesLogos/apache.svg'
import { ReactComponent as mysqlLogo } from '../assets/images/technologiesLogos/mysql.svg'
import { ReactComponent as postgresqlLogo } from '../assets/images/technologiesLogos/postgresql.svg'
import { ReactComponent as expressLogo } from '../assets/images/technologiesLogos/express.svg'
import { ReactComponent as fastifyLogo } from '../assets/images/technologiesLogos/fastify.svg'
import { ReactComponent as reduxLogo } from '../assets/images/technologiesLogos/redux.svg'
import { ReactComponent as tailwindLogo } from '../assets/images/technologiesLogos/tailwind.svg'
import { ReactComponent as shadcnLogo } from '../assets/images/technologiesLogos/shadcnui.svg'
import { ReactComponent as jestLogo } from '../assets/images/technologiesLogos/jest.svg'
import { ReactComponent as threejsLogo } from '../assets/images/technologiesLogos/threejs.svg'
import { ReactComponent as nodejsLogo } from '../assets/images/technologiesLogos/nodejs.svg'
import { ReactComponent as typescriptLogo } from '../assets/images/technologiesLogos/typescript.svg'
import { ReactComponent as babelLogo } from '../assets/images/technologiesLogos/babel.svg'
import { ReactComponent as materialUILogo } from '../assets/images/technologiesLogos/material-ui.svg'
import { ReactComponent as reactstrapLogo } from '../assets/images/technologiesLogos/reactstrap.svg'
import { ReactComponent as telegramBotAPILogo } from '../assets/images/technologiesLogos/telegram.svg'
import { ReactComponent as pituhonLogo } from '../assets/images/technologiesLogos/python.svg'
import { ReactComponent as phpLogo } from '../assets/images/technologiesLogos/php.svg'
import { ReactComponent as vkAPILogo } from '../assets/images/technologiesLogos/vk.svg'
import { ReactComponent as yandexAliceLogo } from '../assets/images/technologiesLogos/yandex-alice.svg'
import { ReactComponent as unityLogo } from '../assets/images/technologiesLogos/unity.svg'
import { ReactComponent as photonEngineLogo } from '../assets/images/technologiesLogos/photon-engine.svg'
import { ReactComponent as golangLogo } from '../assets/images/technologiesLogos/golang.svg'
import { ReactComponent as tauriLogo } from '../assets/images/technologiesLogos/tauri.svg'
import { ReactComponent as electronLogo } from '../assets/images/technologiesLogos/electron.svg'
import { ReactComponent as openaiLogo } from '../assets/images/technologiesLogos/openai.svg'
// import { ReactComponent as csharpLogo } from '../assets/images/technologiesLogos/csharp.svg'
import { ReactComponent as figmaLogo } from '../assets/images/technologiesLogos/figma.svg'
// import { ReactComponent as sketchLogo } from '../assets/images/technologiesLogos/sketch.svg'
import { ReactComponent as sparkArLogo } from '../assets/images/technologiesLogos/spark-ar.svg'
import { ReactComponent as webpackLogo } from '../assets/images/technologiesLogos/webpack.svg'
import { ReactComponent as rollupLogo } from '../assets/images/technologiesLogos/rollup-logo.svg'
import { ReactComponent as javaLogo } from '../assets/images/technologiesLogos/java.svg'
import { ReactComponent as reactNativeLogo } from '../assets/images/technologiesLogos/react-native.svg'
import { ReactComponent as expoLogo } from '../assets/images/technologiesLogos/expo.svg'
import { ReactComponent as swiftLogo } from '../assets/images/technologiesLogos/swift.svg'
import { ReactComponent as remixLogo } from '../assets/images/technologiesLogos/remix.svg'
import { ReactComponent as serviceWorkerLogo } from '../assets/images/technologiesLogos/workbox.svg'

// How to count projects for each technology:
// 1. Go to loop with each project, continue if any of these conditions meet:
// 2. If project stack includes key of technology
// 3. If project stack includes name of technology
// 4. If project stack includes any of aliases of technology

export default {
  react: {
    name: 'React',
    logo: reactLogo,
    startedLearning: new Date(2021, 1, 1),
    category: 'frontend'
  },
  next: {
    name: 'Next.js',
    logo: nextLogo,
    startedLearning: new Date(2021, 2, 1),
    category: 'frontend',
    aliases: ['NextJS']
  },
  vite: {
    name: 'Vite',
    logo: viteLogo,
    startedLearning: new Date(2021, 11, 25),
    category: 'frontend'
  },
  typescript: {
    name: 'TypeScript',
    logo: typescriptLogo,
    startedLearning: new Date(2021, 3, 19),
    category: 'frontend'
  },
  tailwind: {
    name: 'Tailwind',
    logo: tailwindLogo,
    startedLearning: new Date(2023, 9, 1),
    category: 'frontend',
    aliases: ['TailwindCSS']
  },
  shadcnui: {
    name: '@shadcn/ui',
    logo: shadcnLogo,
    startedLearning: new Date(2023, 8, 17),
    category: 'frontend'
  },
  materialUI: {
    name: 'Material UI',
    logo: materialUILogo,
    startedLearning: new Date(2021, 1, 24),
    category: 'frontend',
    aliases: ['MUI']
  },
  reactstrap: {
    name: 'More coming soon',
    logo: reactstrapLogo,
    startedLearning: new Date(2021, 3, 5),
    category: 'frontend'
  }
}