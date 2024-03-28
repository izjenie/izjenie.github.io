import VueSecureHTML from 'vue-html-secure'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.config.globalProperties.$safeHTML = VueSecureHTML.safeHTML
  vueApp.config.globalProperties.$escapeHTML = VueSecureHTML.escapeHTML
  vueApp.config.globalProperties.$removeHTML = VueSecureHTML.removeHTML
  vueApp.use(VueSecureHTML)
})
