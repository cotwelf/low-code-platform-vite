export interface IPicFormat {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  path: null
  size: number
  url: string
  width: number
}
interface IFormats {
  large: IPicFormat
  medium: IPicFormat
  small: IPicFormat
}

export interface IResponseImages {
  formats: IFormats
  name: string
  mime: string
}
