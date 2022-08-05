import { context } from '@//pages/setting';
import { IComponentConfig } from '@//vite-env';
import { ResizeBox } from '@arco-design/web-react';
import React, { useContext, useRef } from 'react';
import './style.scss'

interface IResizer {
  componentConfig: IComponentConfig
  children: React.ReactNode
}
const TriggerContent = function ({ className }: {
  className: string
}) {
  return (
    <div className={`resizebox-demo-custom-trigger ${className}`}>
      <div className='resizebox-demo-custom-trigger-line' />
    </div>
  );
};

export const Resizer: React.FC<IResizer> = ({ componentConfig, children }) => {
  const { updateRenderList } = useContext(context)

  const boxRef = useRef()
  const onUpdateSize = ({width, height} : {width: number, height: number}) => {
    const newConfig = {...componentConfig}
    newConfig.style = {...newConfig.style, width, height}
    if (updateRenderList) {
      updateRenderList(newConfig)
    }
  }
  return (
    <ResizeBox
      directions={['right', 'bottom']}
      className="resizer"
      ref={boxRef}
      style={{
        width: `calc(${componentConfig.style.width} - 2px)`,
        height: `calc(${componentConfig.style.height} - 2px)`
      }}
      onMoving={(e, size) => onUpdateSize({ width: size.width, height: size.height })}
      resizeTriggers={{
        right: componentConfig.setting ? <TriggerContent className='resizebox-demo-custom-trigger-vertical' /> : <span />,
        bottom: componentConfig.setting ? <TriggerContent className='resizebox-demo-custom-trigger-horizontal' /> : <span />,
      }}
    >
      {children}
    </ResizeBox>
  )
}
