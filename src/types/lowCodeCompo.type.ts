//定义plugin属性结构
import { IButtonEditConfig, IImageEditConfig, IVideoEditConfig } from './editConfig.type'

// 枚举所有的组件
export enum ComponentName {
  PictureComponent = 'PictureComponent',
  ButtonComponent = 'ButtonComponent',
  VideoComponent = 'VideoComponent'
}

//组件样式数据
export interface ComponentStyle {
  position?: string
  top?: string
  left?: string
  width?: string
  height?: string
  zIndex?: number
  textAlign?: string
  color?: string
  backgroundColor?: string
  fontSize?: string
  backgroundImage?: string
  border?: string
  outline?: string
  borderRadius?: string
}

export interface IEventProps {
  type: string[]
  clickEvents: {
    onClick: {
      callback: React.MouseEventHandler<HTMLElement> | undefined
      actionType: string
      val: string
    }
    dbClick: {
      callback: React.MouseEventHandler<HTMLElement> | undefined
      actionType: string
      val: string
    }
  }
}

export interface IPictureComponent {
  id: string
  name: ComponentName.PictureComponent
  props: {
    imgSrc: string
  }
  events: IEventProps
  // 编辑器的属性
  editConfig: IImageEditConfig
  style: ComponentStyle
}
export interface IButtonComponent {
  id: string
  name: ComponentName.ButtonComponent
  props: {
    [innerText: string]: string
  }

  events: IEventProps
  // 编辑器的属性
  editConfig: IButtonEditConfig
  style: ComponentStyle
}

export interface IVideoComponent {
  id: string
  name: ComponentName.VideoComponent
  props: {
    url: string
    poster: string
    // controlBar: boolean
  }
  events: IEventProps
  // 编辑器的属性
  editConfig: IVideoEditConfig
  style: ComponentStyle
}

// 将所有组件的数据联合起来
export type ComponentSchema = IPictureComponent | IButtonComponent | IVideoComponent

// 因为函数组件传递属性只能使用props,所以用BtnProps来接收schema,如果不是FC组件，使用useEffect会报错
export interface PluginComponentProps {
  schema: ComponentSchema | undefined
}
