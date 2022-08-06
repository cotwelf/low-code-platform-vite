import { context } from '@//pages/setting';
import { IComponentConfig } from '@//vite-env';
import { ResizeBox } from '@arco-design/web-react';
import React, { useContext } from 'react';
import './style.scss'

interface IResizer {
  componentConfig: IComponentConfig
  children: React.ReactNode
}

const TriggerContent = ({ className }: {
  className: string
}) => <div className={`resizebox-trigger ${className}`} />

export const Resizer: React.FC<IResizer> = ({ componentConfig, children }) => {
  const { updateRenderList } = useContext(context)

  // const boxRef = useRef()
  const onUpdateSize = ({ width, height } : {width: number, height: number}) => {
    const newConfig = {...componentConfig, setting: true}
    newConfig.style = {...newConfig.style, width: `${width}px`, height: `${height}px`}
    if (updateRenderList) {
      updateRenderList(newConfig)
    }
  }
  return (
    <ResizeBox
      directions={['right', 'bottom']}
      className="resizer"
      onMoving={(e, size) => onUpdateSize({ width: size.width, height: size.height })}
      resizeTriggers={{
        right: componentConfig.setting ? <TriggerContent className='vertical' /> : <span />,
        bottom: componentConfig.setting ? <TriggerContent className='horizontal' /> : <span />,
      }}
    >
      {children}
    </ResizeBox>
  )
}
