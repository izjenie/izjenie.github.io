import { inspectAuthorizationValue } from '~/universals/authorization'

export const isClientRoute = (event: import('h3').H3Event) => {
  const route = event.node.req.url || ''

  return route.startsWith('/api')
}

export const inspectAuthorizationHeader = (event: import('h3').H3Event) => {
  const authorization = getRequestHeader(event, 'Authorization')

  return inspectAuthorizationValue(authorization)
}
