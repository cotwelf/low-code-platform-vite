export * from './toggle-modal'

export const splitAfterNumber = (str?: string) => {
  if (!str) {
    return
  }
  const number = parseInt(str)
  const unit = str.replace(number.toString(), '')
  return {
    number,
    unit
  }
}
