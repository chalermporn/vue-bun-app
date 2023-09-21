import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const VITE_APP_HOST_NAME = process.env.VITE_APP_HOST_NAME
const VITE_APP_HOST_NAME_PORT = process.env.VITE_APP_HOST_NAME_PORT

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  server: {
    https: false,
    host: VITE_APP_HOST_NAME,
    port: Number(VITE_APP_HOST_NAME_PORT),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


// import { fileURLToPath, URL } from 'node:url'

// import vueJsx from '@vitejs/plugin-vue-jsx'

// import vue from '@vitejs/plugin-vue'
// import { defineConfig, loadEnv } from 'vite'
// export default defineConfig(({ mode }) => {
//   const {
//     VITE_APP_HOST_NAME,
//     VITE_APP_HOST_NAME_PORT,
//   } = loadEnv(mode, process.cwd(), '')
//   return {
//     plugins: [
//       vue(),
//       vueJsx(),
//     ],
//     server: {
//       https: false,
//       host: VITE_APP_HOST_NAME,
//       port: Number(VITE_APP_HOST_NAME_PORT),
//     },
//     resolve: {
//       alias: {
//         '@': fileURLToPath(new URL('./src', import.meta.url)),
//       },
//     }
//   }
// })
