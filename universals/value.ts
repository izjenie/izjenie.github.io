// this utility can be used on client or server

import _get from 'lodash-es/get'
import _has from 'lodash-es/has'
import _isEmpty from 'lodash-es/isEmpty'
import _isString from 'lodash-es/isString'
import _isNumber from 'lodash-es/isNumber'
import _toNumber from 'lodash-es/toNumber'

// value type check
export const isNil = (value: any) => [undefined, null].includes(value)
export const isEmpty = (value: any) => isNil(value) || _isEmpty(value)
export const isNull = (value: any) => value === null
export const isUndef = (value: any) => value === undefined
export const isNumber = (value: any) => _isNumber(value)
export const isNumeric = (value: any) => Number.isNaN(value) || _isNumber(value)
export const isString = (value: any, minimumLength: number = 0) => _isString(value) && value.length >= minimumLength
export const isArray = (value: any) => Array.isArray(value)

// ensure deterministic value
export const ensureString = (value: any, minimumLength: number = 0, defaultValue = ''): string => {
  if (isString(value, minimumLength)) return value

  return defaultValue
}

export const ensureNumber = (value: any, defaultValue = NaN): number => {
  if (isNumeric(value)) return _toNumber(value)

  return defaultValue
}

export const ensureInteger = (value: any, radix: number = 10, defaultValue = NaN): number => {
  if (isNumeric(value)) {
    if (typeof value === 'string' || value instanceof Number) return parseInt(value.toString(), radix)
    if (typeof value === 'number') return parseInt(value.toString(), radix)
  }

  return defaultValue
}

export const ensureFloat = (value: any, defaultValue = NaN): number => {
  if (isNumeric(value)) {
    if (typeof value === 'string' || value instanceof Number) return parseFloat(value.toString())
    if (typeof value === 'number') return value * 1.0
  }

  return defaultValue
}

export function ensureArray<T = any>(value: any, defaultValue: Array<T> = []): Array<T> {
  return isArray(value) ? value : defaultValue
}

// object inspection
export const objectHas = _has
export const objectGet = _get

export const objectData = <T = any>(obj: T) => ({
  has(path: string) {
    return _has(obj, path)
  },
  get(path: string, defaultValue = undefined) {
    return _get(obj, path, defaultValue) || defaultValue
  },
  getString(path: string, minimumLength: number = 0, defaultValue = '') {
    return ensureString(_get(obj, path), minimumLength, defaultValue)
  },
  getNumber(path: string, defaultValue = NaN) {
    return ensureNumber(_get(obj, path), defaultValue)
  },
  getInteger(path: string, radix: number = 10, defaultValue = NaN) {
    return ensureInteger(_get(obj, path), radix, defaultValue)
  },
  getFloat(path: string, defaultValue = NaN) {
    return ensureFloat(_get(obj, path), defaultValue)
  },
  getArray<A>(path: string, defaultValue: Array<A> = []): Array<A> {
    return ensureArray(_get(obj, path), defaultValue)
  },
})
