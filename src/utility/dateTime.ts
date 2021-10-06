import { formatDuration } from "date-fns"
import { ru } from "date-fns/locale"

export const formatDurationLocale = (d: Duration) => formatDuration(d, { locale: ru })
