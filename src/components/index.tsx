import { IComponentItem } from '../vite-env'
import { getLCButton } from './button/index'
import * as DEFAULT_CONFIG from './button/default-config.json'

export const components_list: IComponentItem[] = [
  {
    name: '按钮组件',
    config: DEFAULT_CONFIG,
    getComponent: getLCButton
  },
  {
    name: '按钮组件 1',
    config: DEFAULT_CONFIG,
    getComponent: getLCButton
  }
]
