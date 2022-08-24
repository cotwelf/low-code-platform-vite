// 右侧编辑栏的编辑器组件属性
/**
 * name:编辑器名称
 * label:属性名称
 * callback:回调修改组件的值
 */
export enum EditComponentKey {
  EDIT_INPUT = 'a-input',
  EDIT_IMAGE_INPUT = 'a-image-input',
  EDIT_VIDEO_INPUT = 'a-video-input'
}

export interface EditInputProp {
  name: EditComponentKey.EDIT_INPUT
  type?: 'attribute' | 'style'
  propType: string
  label: string
  value?: string
  callback: null | ((val: string) => void)
}

export interface EditMediaInputProp {
  name: EditComponentKey.EDIT_IMAGE_INPUT | EditComponentKey.EDIT_VIDEO_INPUT
  label: string
  callback: null | ((val: string) => void)
}

export type EditComponentProps = EditInputProp | EditMediaInputProp

export type EditConfig = {
  editConfig: EditComponentProps
}
