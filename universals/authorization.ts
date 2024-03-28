// this utility can be used on client or server
import { isString } from './value'

export const basicAuth = (username: string, password: string) => {
  const value = btoa(`${username}:${password}`)

  return `Basic ${value}`
}

export const bearerToken = (token: string, type: string = 'Bearer') => {
  const tokenType = type.length > 0 ? type : 'Bearer'

  return `${tokenType} ${token}`
}

export const inspectAuthorizationValue = (authorization: any) => {
  const [type, value] = isString(authorization) ? (authorization as string).split(' ') : []

  return {
    hasType: (expected: string = '') => {
      const expectedTypeLength = expected.length

      if (isString(type, expectedTypeLength > 0 ? expectedTypeLength : 1)) {
        return type.toLocaleLowerCase() === expected.toLocaleLowerCase()
      }

      return false
    },
    getType: () => type,
    hasValue: () => isString(value, 1),
    getValue: () => value,
    getHeaderValue: () => authorization,
  }
}
