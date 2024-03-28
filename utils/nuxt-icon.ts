/* eslint-disable import/prefer-default-export */

import { Icon } from '#components'

export function createNuxtIcon(name: string, size?: string | number) {
  return h(Icon, {
    name,
    size: size ? `${size}` : '',
  })
}
