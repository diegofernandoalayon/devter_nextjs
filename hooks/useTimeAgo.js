import { useEffect, useState } from 'react'
import { formatDate } from './useDateTimeFormat'

const isRelativeTimeFormatSupported =
typeof Intl !== 'undefined' && Intl.RelativeTimeFormat

const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]
const getDateDiffs = timestamp => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}
export default function useTimeAgo (timestamp) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))
  // const { value, unit } = getDateDiffs(timestamp)
  useEffect(() => {
    if (isRelativeTimeFormatSupported) {
      const interval = setInterval(() => {
        const newTimeAgo = getDateDiffs(timestamp)
        setTimeago(newTimeAgo)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [timestamp])

  if (!isRelativeTimeFormatSupported) {
    return formatDate(timestamp)
  }
  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' }) // para usar la forma de formatear propia de la plataforma
  const { value, unit } = timeago
  return rtf.format(value, unit) // formateamos el tiempo indicando value y unit
}
