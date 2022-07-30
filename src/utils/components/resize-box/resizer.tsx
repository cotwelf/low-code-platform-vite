import { ResizeBox } from '@arco-design/web-react';
import React, { useRef, useState } from 'react';
import './style.scss'

const TriggerContent = function ({ className }: {
  className: string
}) {
  return (
    <div className={`resizebox-demo-custom-trigger ${className}`}>
      <div className='resizebox-demo-custom-trigger-line' />
    </div>
  );
};

export const Resizer = ({ width, height, children } : {
  width: string
  height: string
  children: React.ReactNode
}) => {
  const [ currentWidth, setCurrentWidth ] = useState(width)
  const [ currentHeight, setCurrentHeight ] = useState(height)
  const boxRef = useRef()

  const resizeEnd = () => {
    console.log(currentWidth, currentHeight)
  }
  return (
    <ResizeBox
      directions={['right', 'bottom']}
      className="resizer"
      ref={boxRef}
      onMovingEnd={resizeEnd}
      style={{width: `calc(${currentWidth} - 2px)`, height: `calc(${currentHeight} - 2px)`}}
      onMoving={(e, size) => {
        console.log(size)
        setCurrentWidth(`${size.width}px`)
        setCurrentHeight(`${size.height}px`)
      }}
      resizeTriggers={{
        right: <TriggerContent className='resizebox-demo-custom-trigger-vertical' />,
        bottom: <TriggerContent className='resizebox-demo-custom-trigger-horizontal' />,
      }}
    >
      {children}
    </ResizeBox>
  )
}
