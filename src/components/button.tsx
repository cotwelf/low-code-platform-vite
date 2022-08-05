import { Resizer } from '@//utils/components/resize-box/resizer';
import { IComponentConfig } from '@//vite-env'
import React from 'react'

const DEFAULT_CONFIG = {
  id: '',
  componentId: 'lc_button',
  name: '按钮组件',
  innerText: '按钮文字',
  style: {
    left: '0',
    top: '0',
    width: '100px',
    height: '100px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#00000030',
    paddingTop: '10px',
    paddingRight: '20px',
    paddingBottom: '10px',
    paddingLeft: '20px'
  }
}

const LCButton: React.FC<IComponentConfig> = (props) => {
  return (
    <Resizer componentConfig={props}>
      <button id={props.id} style={props.style}>{props.innerText}</button>
    </Resizer>
  )
}

const getLCButton = (props: IComponentConfig = DEFAULT_CONFIG) => {
  return <LCButton {...props}/>
}
export default {
  id: 'lc_button',
  type: 'button',
  label: '按钮组件',
  getComponent: getLCButton,
  defaultConfig: DEFAULT_CONFIG,
}
