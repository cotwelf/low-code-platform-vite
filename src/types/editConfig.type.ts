import { EditInputProp } from './editbase.type'

export interface IImageEditConfig {
  imgSrc: EditInputProp
}
export interface IButtonEditConfig {
  innerText: EditInputProp
  backgroundColor: EditInputProp
  color: EditInputProp
}

export interface IVideoEditConfig {
  url: EditInputProp
  poster: EditInputProp
  // controlBar: EditInputProp
}

export type ComponentEditConfig = IImageEditConfig | IButtonEditConfig | IVideoEditConfig
