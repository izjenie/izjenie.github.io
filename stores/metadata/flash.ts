const useFlashStore = defineStore('metadata-flash', () => {
  const flashes = reactive(new Map())

  function hasFlash(id: string): boolean {
    return flashes.has(id)
  }

  function setFlash<T = string | object>(id: string, payload: T) {
    flashes.set(id, payload)
  }

  function getFlash<T = string | object>(id: string): ComputedRef<T> {
    return computed(() => {
      const flash = flashes.get(id)

      flashes.delete(id)

      return flash
    })
  }

  return {
    hasFlash,
    setFlash,
    getFlash,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFlashStore, import.meta.hot))
}

export default useFlashStore
