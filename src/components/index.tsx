import { IComponentItem } from '../vite-env'
import { getLCButton } from './button/index'
import * as DEFAULT_CONFIG from './button/default-config.json'

export const components_list: IComponentItem[] = [
  {
    label: '按钮组件',
    type: 'button',
    config: DEFAULT_CONFIG,
    getComponent: getLCButton
  },
  {
    label: '按钮组件 1',
    type: 'button',
    config: DEFAULT_CONFIG,
    getComponent: getLCButton
  }
]
