// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
  ],
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
})
