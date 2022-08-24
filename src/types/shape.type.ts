import { ComponentSchema } from './lowCodeCompo.type'

/**
 * component:shape包裹的plugin
 * children: plugin组件
 */
export interface IFCShapeProps {
  component: ComponentSchema
  children: JSX.Element
}

export interface IShapeCommonStyle {
  top: number
  left: number
  width: number
  height: number
}
