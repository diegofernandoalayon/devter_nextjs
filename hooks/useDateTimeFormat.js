const LANGUAGES = {
  DEFAULT_LANGUAGE: 'es-ES'
}

const isDateTimeFormatSupported =
  typeof Intl !== 'undefined' && Intl.DateTimeFormat

export const formatDate = (timestamp, { language = LANGUAGES.DEFAULT_LANGUAGE }) => {
  const date = new Date(timestamp)
  if (!isDateTimeFormatSupported) {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    return date.toLocaleDateString(language, options)
  }
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  return new Intl.DateTimeFormat(language, options).format(date)
}
export default function useDateTimeFormat (timestamp) {
  return formatDate(timestamp, { language: LANGUAGES.DEFAULT_LANGUAGE })
}
