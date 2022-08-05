export * from './toggle-modal'

export const splitAfterNumber = (str?: string) => {
  if (!str) {
    return {
      value: str,
    }
  }
  const value = parseInt(str)
  if (value.toString() === 'NaN') {
    return {
      value: str,
    }
  }
  const unit = str.replace(value.toString(), '')
  return {
    value,
    unit
  }
}
