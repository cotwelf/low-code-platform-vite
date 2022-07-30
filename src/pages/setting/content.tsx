import React from 'react'
import classNames from 'classnames'
import { Layout } from '@arco-design/web-react';
import { IComponentItem } from '@//vite-env';
const Content = Layout.Content;

export const LowCodeContent = ({ renderList, updateRenderList }: {
  renderList: IComponentItem[]
  updateRenderList: (ele: IComponentItem) => void
}) => {
  const isMobile = true
  console.log(renderList)
  console.log(updateRenderList)
  return (
    <Content className={classNames('content', {pc: !isMobile, h5: isMobile, })}>
        <div className='canvas'>
          {renderList.length > 0 && renderList.map((item) => (
            <div key={item.id}>
              {item.getComponent(item.config)}
            </div>
          ))}
        </div>
    </Content>
  )
}
