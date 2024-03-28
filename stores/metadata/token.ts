import { isString } from '~/universals/value'

const useTokenStore = defineStore('metadata-token', () => {
  const token = ref<string | undefined>()

  function setToken(value: string | undefined): boolean {
    if (isString(value)) {
      token.value = value

      return true
    }

    return false
  }

  return {
    setToken,
    token: computed(() => token.value),
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTokenStore, import.meta.hot))
}

export default useTokenStore
