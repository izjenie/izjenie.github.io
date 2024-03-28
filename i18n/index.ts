import type { LocaleObject } from '#i18n'

export const localeDefault = process.env.LOCALE_DEFAULT || 'id'

export const availableLocales: Array<LocaleObject> = [
  {
    code: 'id',
    iso: 'id-ID',
    file: 'id.json',
    name: 'Bahasa Indonesia',
  },
  {
    code: 'en',
    iso: 'en-US',
    file: 'en.json',
    name: 'English',
  },
]
