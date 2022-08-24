import { EditMediaInputProp, EditInputProp } from './editbase.type'
// 右侧栏编辑器属性
export interface IImageEditConfig {
  imgSrc: EditMediaInputProp
}

export type IKeyofButtonEditConfig = 'innerText' | 'backgroundColor' | 'color' | 'width' | 'height' | 'borderRadius'
export type IButtonEditConfig = {
  [key in IKeyofButtonEditConfig]?: EditInputProp
}

export type IKeyofVideoEditConfig = 'url' | 'poster'
export type IVideoEditConfig = {
  [key in IKeyofVideoEditConfig]: EditMediaInputProp
}
