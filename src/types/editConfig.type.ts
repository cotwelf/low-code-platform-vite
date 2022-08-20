import { EditMediaInputProp, EditInputProp } from './editbase.type'
// 组件编辑器属性格式
export interface IImageEditConfig {
  imgSrc: EditMediaInputProp
}

export type IKeyofButtonEditConfig = 'innerText' | 'backgroundColor' | 'color' | 'width'
  | 'height' | 'border'
export type IButtonEditConfig = {
  [key in IKeyofButtonEditConfig]?: EditInputProp
}

export interface IVideoEditConfig {
  url: EditMediaInputProp
  poster: EditMediaInputProp
  // controlBar: EditInputProp
}

export type ComponentEditConfig = IImageEditConfig | IButtonEditConfig | IVideoEditConfig
