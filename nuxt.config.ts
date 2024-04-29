// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
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
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
        },
      ],
    },
  },
  svgo: {
    svgo: true,
    defaultImport: 'component',
  },
})
