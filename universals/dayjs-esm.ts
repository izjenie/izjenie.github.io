// this utility can be used on client or server

import dayjs from 'dayjs/esm'
import dayjsPluginUtc from 'dayjs/esm/plugin/utc'
import dayjsPluginTimeZone from 'dayjs/esm/plugin/timezone'

dayjs.extend(dayjsPluginUtc)
dayjs.extend(dayjsPluginTimeZone)

export default dayjs
