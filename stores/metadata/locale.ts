import { isString } from '~/universals/value'

const useLocaleStore = defineStore('metadata-locale', () => {
  const locale = ref<string | undefined>()

  function changeLocale(value: string | undefined): boolean {
    if (isString(value, 2)) {
      useI18n().setLocale(value as string)
      locale.value = value

      return true
    }

    return false
  }

  return {
    changeLocale,
    locale: computed(() => locale.value),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocaleStore, import.meta.hot))
}

export default useLocaleStore
