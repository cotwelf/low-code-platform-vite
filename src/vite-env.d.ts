import { COMPONENT_NAME } from './utils/const';
/// <reference types="vite/client" />

// enum ICOMPONENT_NAME {
//   LCBUTTON = COMPONENT_NAME.LCBUTTON,
//   LCIMAGE = COMPONENT_NAME.LCIMAGE,
// }

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export interface IAttributes {
  src?: string
  innerText?: string
  disabled?: boolean
  type?: string
  alt?: string
  title?: string
}
export interface ILCElementConfig {
  id: string
  name?: COMPONENT_NAME.LC_BUTTON | COMPONENT_NAME.LC_IMAGE
  style: React.CSSProperties
  innerText: string
  parentid?: string
  childrens?: string[]
}

export interface IComponentItem {
  id?: string
  type: 'button' | 'img' | 'div'
  label: string
  getComponent: (props?: ILCElementConfig) => JSX.Element
  config?: ILCElementConfig
  attributes?: IAttributes
}
