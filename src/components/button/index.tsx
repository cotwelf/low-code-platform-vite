import { Resizer } from '@//utils/components/resize-box/resizer';
import { ILCElementConfig } from '@//vite-env'
import React from 'react'
import * as DEFAULT_CONFIG from './default-config.json'


const LCButton: React.FC<ILCElementConfig> = (props) => {
  return (
    <Resizer width={props.style.width?.toString() || ''} height={props.style.height?.toString() || ''}>
      <button id={props.id} style={props.style}>{props.innerText}</button>
    </Resizer>
  )
}

export const getLCButton = (props: ILCElementConfig = DEFAULT_CONFIG) => {
  return <LCButton {...props}/>
}
