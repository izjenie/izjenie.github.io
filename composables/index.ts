import { useIntersectionObserver } from '@vueuse/core'
import { AUTH_TOKEN_NAME } from '~/data/constans'

export const useToggle = () => {
  const isOpen = ref(false)
  const setToggle = () => (isOpen.value = !isOpen.value)
  return { isOpen, setToggle }
}

export const useModal = () => {
  const isOpen = ref(false)
  const closeModal = () => {
    isOpen.value = false
  }

  const openModal = () => {
    isOpen.value = true
  }
  return { isOpen, closeModal, openModal }
}

export const useLogout = () => {
  const authToken = useCookie(AUTH_TOKEN_NAME)
  const onLogout = () => {
    authToken.value = undefined
    navigateTo('/login')
  }
  return {
    onLogout,
  }
}

export const useRenderOnVisible = () => {
  const isVisible = ref(false)
  const elementRef = ref<HTMLDivElement | null>(null)
  useIntersectionObserver(elementRef, ([{ isIntersecting }]) => {
    if (!isVisible.value && isIntersecting) {
      isVisible.value = true
    }
  })
  const getElementRef = (el: unknown) => (elementRef.value = el as HTMLDivElement)
  return {
    isVisible,
    getElementRef,
  }
}

interface UseCopyToClipboardProps {
  value: string | number
  label: string
}

export const useCopyToClipboard = ({ value, label }: UseCopyToClipboardProps) => {
  const { setToaster } = useGlobalStore()

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value.toString() ?? '')

    setToaster({ type: 'success', message: `${label} berhasil disalin` })
  }

  return {
    handleCopyToClipboard,
  }
}

export default { useToggle, useLogout, useRenderOnVisible, useCopyToClipboard }
