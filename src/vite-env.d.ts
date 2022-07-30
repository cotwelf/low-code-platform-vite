import { COMPONENT_NAME } from './utils/const';
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export interface ILCElementConfig {
  id: string
  name?: COMPONENT_NAME.LCBUTTON
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
