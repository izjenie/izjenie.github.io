import type { GetSiteSettingResponseType } from '~/fetcher/type'

interface InformationType {
  [key: string]: string
  address: string
  phone: string
  email: string
}
export const useFooter = async () => {
  const { setToaster } = useGlobalStore()
  const { data, pending } = await useFetch<GetSiteSettingResponseType>('/api/site_setting', {
    server: false,
    onResponseError({ response }) {
      setToaster({ type: 'danger', message: response._data.error })
    },
  })

  return {
    isLoading: pending,
    about: computed(() => data.value?.message.site_setting?.about ?? '-'),
    information: computed<InformationType>(() => ({
      address: data.value?.message.site_setting?.address ?? '-',
      phone: data.value?.message.site_setting?.phone ?? '-',
      email: data.value?.message.site_setting?.email ?? '-',
    })),
    logo: computed(() => data.value?.message.site_setting?.logo ?? '/image/global/logo-infraco.png'),
    informationHref: computed<InformationType>(() => ({
      address: '/',
      phone: `tel:${data.value?.message.site_setting?.phone}` ?? '/',
      email: `mailto:${data.value?.message.site_setting?.email}` ?? '/',
    })),
  }
}

export default { useFooter }
