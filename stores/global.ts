interface ToasterContentType {
  type: 'info' | 'success' | 'danger' | 'warning'
  message: string
}

export const useGlobalStore = defineStore('global', () => {
  const isLoading = ref<Boolean>(false)
  const toaster = ref<ToasterContentType | undefined>()
  const getIsloading = () => isLoading.value
  const setIsLoading = (val: boolean) => {
    isLoading.value = val
  }
  const getToaster = () => toaster.value

  const setToaster = (val: ToasterContentType | undefined) => {
    toaster.value = val
  }
  return {
    getIsloading,
    setIsLoading,
    getToaster,
    setToaster,
  }
})
export default { useGlobalStore }
