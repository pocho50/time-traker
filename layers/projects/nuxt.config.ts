// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['../shared'],
  imports: {
    dirs: ['./repository', './schemas'],
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
    ],
    experimental: {
      localeDetector: 'localeDetector.ts',
    },
  },
});
