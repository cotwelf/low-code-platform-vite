// 右侧编辑栏的base组件属性
export enum EditComponentKey {
  EDIT_INPUT = 'a-input',
  EDIT_BUTTON = 'a-button',
  EDIT_IMAGE_INPUT = 'a-image-input'
}

export interface EditInputProp {
  name: EditComponentKey.EDIT_INPUT
  propType: string
  label: string
  value: string
  callback: null | ((val: string) => void)
}

export interface EditImageInputProp {
  name: EditComponentKey.EDIT_IMAGE_INPUT
  label: string
  callback: null | ((val: string) => void)
}

export type EditComponentProps = EditInputProp | EditImageInputProp

export type EditConfig = {
  editConfig: EditComponentProps
}
