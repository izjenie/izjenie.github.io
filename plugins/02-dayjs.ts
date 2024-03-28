import dayjsEsm from '~/universals/dayjs-esm'
// locales related
import dayjsPluginLocaleDate from 'dayjs/esm/plugin/localeData'
import dayjsPluginLocaleFormat from 'dayjs/esm/plugin/localizedFormat'
import dayjsPluginUpdateLocale from 'dayjs/esm/plugin/updateLocale'
// custom
import dayjsCustomPluginHuman from './dayjs-plugins/human'

export default defineNuxtPlugin(() => {
  dayjsEsm.extend(dayjsPluginLocaleDate)
  dayjsEsm.extend(dayjsPluginLocaleFormat)
  dayjsEsm.extend(dayjsPluginUpdateLocale)
  dayjsEsm.extend(dayjsCustomPluginHuman)

  return {
    provide: {
      dayjs: dayjsEsm,
      dayjsTz: dayjsEsm.tz,
    },
  }
})
