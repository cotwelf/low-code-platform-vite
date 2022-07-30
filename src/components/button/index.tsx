import { ResizeComponent } from '@//utils/components/resize-component';
import { ILCElementConfig } from '@//vite-env'
import React, { useEffect } from 'react'
import './test.scss'

const LCButton = (props: ILCElementConfig) => {

  useEffect(() => {
    console.log()
  }, [props.style])
  return (
    <ResizeComponent style={props.style}>
      <button id={props.id}></button>
    </ResizeComponent>
  )
}

export const getLCButton = (props: ILCElementConfig) => {
  return <LCButton {...props}/>
}
