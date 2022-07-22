export const parsedate = (date: string) => {
  return new Date(date).toLocaleTimeString()
}