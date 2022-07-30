import { ResizeBox } from '@arco-design/web-react';
import React from 'react';


const TriggerContent = function ({ className }: {
  className: string
}) {
  return (
    <div className={`resizebox-demo-custom-trigger ${className}`}>
      <div className='resizebox-demo-custom-trigger-line' />
    </div>
  );
};

export const ResizeComponent = ({ style, children } : {
  style: React.HTMLAttributes<HTMLDivElement>
  children: React.ReactNode
}) => {
  return (
    <ResizeBox
      directions={['right', 'bottom']}
      style={style}
      resizeTriggers={{
        right: <TriggerContent className='resizebox-demo-custom-trigger-vertical' />,
        bottom: <TriggerContent className='resizebox-demo-custom-trigger-horizontal' />,
      }}
    >
      {children}
    </ResizeBox>
  )
}
