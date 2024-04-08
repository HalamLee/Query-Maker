// https://nuxt.com/docs/api/configuration/nuxt-config

import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-svgo', '@element-plus/nuxt'],
  css: ['~/assets/scss/_global.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kavoon&family=Knewave&family=Noto+Sans+KR&display=swap',
        },
      ],
    },
  },
  svgo: {
    svgo: true,
    defaultImport: 'component',
  },
})
