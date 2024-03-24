import Vant from '@vant/nuxt';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [Vant],
  css: ['~/assets/scss/_global.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kavoon&family=Knewave&display=swap',
        },
      ],
    },
  },
});
