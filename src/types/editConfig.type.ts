import { EditImageInputProp, EditInputProp } from './editbase.type'
// 组件编辑器属性格式
export interface IImageEditConfig {
  imgSrc: EditImageInputProp
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
