// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  app: {
    head: {
      script: [{ src: 'https://widgets.sociablekit.com/instagram-feed-private/widget.js', async: true, defer: true }],
    },
  },
  modules: [
    '@vueuse/nuxt'
  ],
})
