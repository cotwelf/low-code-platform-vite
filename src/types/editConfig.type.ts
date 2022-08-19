import { EditMediaInputProp, EditInputProp } from './editbase.type'
// 组件编辑器属性格式
export interface IImageEditConfig {
  imgSrc: EditMediaInputProp
}
export interface IButtonEditConfig {
  innerText: EditInputProp
  backgroundColor: EditInputProp
  color: EditInputProp
}

export interface IVideoEditConfig {
  url: EditMediaInputProp
  poster: EditMediaInputProp
  // controlBar: EditInputProp
}

export type ComponentEditConfig = IImageEditConfig | IButtonEditConfig | IVideoEditConfig
