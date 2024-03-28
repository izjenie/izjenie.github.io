import type { GetProfileResponseType } from '~/fetcher/type'

export const useProfileButton = async () => {
  const { setToaster } = useGlobalStore()
  const { data } = await useAuthedFetch<GetProfileResponseType>('/api/profile', {
    server: false,
    onResponseError({ response }) {
      setToaster({ type: 'danger', message: response._data.error })
    },
  })

  return {
    name: computed(() => data.value?.message.name ?? '-'),
    position: computed(() => data.value?.message.division_user?.name ?? '-'),
    imageUrl: computed(() => data.value?.message.avatar ?? '/icon/ic-user.svg'),
  }
}

export default { useProfileButton }
