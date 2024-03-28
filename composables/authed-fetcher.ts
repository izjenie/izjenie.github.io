import type { UseFetchOptions } from 'nuxt/app'

import { AUTH_TOKEN_NAME } from '~/data/constans'

export const useAuthedFetch = <T>(url: string, params: Omit<UseFetchOptions<T>, 'onRequest'>) => {
  const authToken = useCookie(AUTH_TOKEN_NAME)
  const { onLogout } = useLogout()
  const opts: UseFetchOptions<T> = {
    key: url,
    ...params,
    onRequest({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${authToken.value}`,
      }
    },
    onResponseError(event) {
      if (event.response.status === 401) {
        onLogout()
        return
      }
      if (params && params.onResponseError && typeof params.onRequestError === 'function') {
        const onResponseError = params.onRequestError as Function
        onResponseError(event)
      }
    },
  }
  return useFetch(url, opts)
}

export default { useAuthedFetch }
