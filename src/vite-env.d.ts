/// <reference types="vite/client" />

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

// --组件库--
export interface IComponentItem {
  id: string // 组件 id，唯一
  type: string
  label: string // 左侧组件按钮上显示的文字
  getComponent: (props?: IComponentConfig) => JSX.Element
  defaultConfig: IComponentConfig // 默认配置
}

// --组件配置（in renderList）--
export interface IComponentConfig {
  id: string
  componentId: string // 对应组件库的组件 id
  name?: string
  class?: string
  style: React.CSSProperties
  attributes?: IAttributes
  innerText?: string
  parentid?: string
  childrens?: string[]
  setting?: boolean
}
