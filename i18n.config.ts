import fallback from './i18n/fallback'

// https://vue-i18n.intlify.dev/api/general.html#createi18n
export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: fallback.locale,
}))
