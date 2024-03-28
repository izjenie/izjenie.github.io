// this dayjs plugin, depends on:
// - 'dayjs/esm/plugin/localeData'
// - 'dayjs/esm/plugin/localizedFormat'

import { type PluginFunc, Dayjs } from 'dayjs/esm'

type HumanDayMode = 'initial' | 'minimal' | 'short' | 'long'
type HumanMonthMode = 'short' | 'long'

const plugin: PluginFunc = (_, c: typeof Dayjs) => {
  const proto = c.prototype

  proto.humanDays = function humanDays(mode: HumanDayMode = 'long', startMonday = false): Array<string> {
    const localeData = this.localeData()
    let weekdays: Array<string> = []

    switch (mode) {
      case 'initial':
        weekdays = localeData.weekdaysMin().map((d) => d.slice(0, 1))
        break
      case 'minimal':
        weekdays = localeData.weekdaysMin()
        break
      case 'short':
        weekdays = localeData.weekdaysShort()
        break
      case 'long':
      default:
        weekdays = localeData.weekdays()
    }

    if (startMonday) {
      return [...weekdays.slice(1), ...weekdays.slice(0, 1)]
    }

    return weekdays
  }
  proto.humanMonths = function humanMonths(mode: HumanMonthMode = 'long'): Array<string> {
    const localeData = this.localeData()
    let monthNames: Array<string> = []

    switch (mode) {
      case 'short':
        monthNames = localeData.monthsShort()
        break
      case 'long':
      default:
        monthNames = localeData.months()
    }

    return monthNames
  }
  proto.humanDate = function humanDate(withDay: false): string {
    return this.format(withDay ? 'dddd, LL' : 'LL')
  }
  proto.humanTime = function humanDate(withSeconds: false): string {
    return this.format(withSeconds ? 'LTS' : 'LT')
  }
  proto.humanDateTime = function humanDateTime(withDay: false) {
    return this.format(withDay ? 'LLLL' : 'LLL')
  }
}

export default plugin

declare module 'dayjs/esm' {
  interface Dayjs {
    humanDays(mode?: HumanDayMode, startMonday?: boolean): Array<string>
    humanMonths(mode?: HumanMonthMode): Array<string>
    humanDate(withDay?: boolean): string
    humanTime(withSecond?: boolean): string
    humanDateTime(withDay?: boolean): string
  }
}
