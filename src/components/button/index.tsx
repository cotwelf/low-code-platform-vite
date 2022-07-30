import { Resizer } from '@//utils/components/resize-box/resizer';
import { ILCElementConfig } from '@//vite-env'
import React, { useEffect } from 'react'

const LCButton = (props: ILCElementConfig) => {

  useEffect(() => {
    console.log()
  }, [props.style])
  return (
    <Resizer width={props.style.width} height={props.style.height}>
      <button id={props.id} style={props.style}>{props.innerText}</button>
    </Resizer>
  )
}

export const getLCButton = (props: ILCElementConfig) => {
  return <LCButton {...props}/>
}
