import { EditInputProp } from './editbase.type'

export interface IImageEditConfig {
  imgSrc: EditInputProp
}
export interface IButtonEditConfig {
  innerText: EditInputProp
  backgroundColor: EditInputProp
  color: EditInputProp
}

export type ComponentEditConfig = IImageEditConfig | IButtonEditConfig
