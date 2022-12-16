import en from './lang/en.js';
import zhHant from './lang/zh-Hant.js';

export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/i18n',
    '@nuxtjs/i18n-edge',
    '@vueuse/nuxt',
  ],
  tailwindcss: {
    viewer: false,
  },
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: false || {
      useCookie: true,
      cookieKey: 'lang',
      redirectOn: 'root',
    },
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'zh-Hant',
        iso: 'zh-Hant-HK',
        name: '中文',
      },
    ],
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: ['en'],
      messages: {
        'en': en,
        'zh-Hant': zhHant,
      },
    },
  },
  experimental: {
    payloadExtraction: false,
  },
});
