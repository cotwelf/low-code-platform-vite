import { COMPONENT_NAME } from './utils/const';
/// <reference types="vite/client" />

enum ICOMPONENT_NAME {
  LCBUTTON = COMPONENT_NAME.LCBUTTON,
  LCIMAGE = COMPONENT_NAME.LCIMAGE,
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export interface ILCElementConfig {
  id: string
  name?: ICOMPONENT_NAME
  style: HTMLAttributes<HTMLDivElement>
  innerText: string
  parentid?: string
  childrens?: string[]
}

export interface IComponentItem {
  id?: string
  name: string
  getComponent: (props: ILCElementConfig) => JSX.Element
  config?: ILCElementConfig
}
