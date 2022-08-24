import { ComponentName } from './lowCodeCompo.type'

// 左侧组件栏图标
export interface IPluginListIcon {
  icon: React.ReactNode
  text: string
  compKey: ComponentName
}

// react-dnd拖拽返回的item格式
export interface IDragIcon {
  compKey: ComponentName
}
