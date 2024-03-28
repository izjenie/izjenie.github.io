import { AUTH_TOKEN_NAME } from '~/data/constans'

export const useAuthedRawFetch = <T>() => {
  const authToken = useCookie(AUTH_TOKEN_NAME)
  const { onLogout } = useLogout()

  return $fetch.create<T>({
    onRequest({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${authToken.value}`,
      }
    },
    onResponseError(event) {
      if (event.response.status === 401) {
        onLogout()
      }
    },
  })
}

export const fetcher = useAuthedRawFetch()
export default { useAuthedRawFetch, fetcher }
