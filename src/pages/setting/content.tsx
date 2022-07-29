import React from 'react'
import classNames from 'classnames'
import { Layout } from '@arco-design/web-react';
const Content = Layout.Content;

export const LowCodeContent = () => {
  const isMobile = true
  return (
    <Content className={classNames('content', {pc: !isMobile, h5: isMobile, })}>
      <div className='canvas'></div>
    </Content>
  )
}
