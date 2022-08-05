import React, { useContext } from 'react'
import classNames from 'classnames'
import { Layout } from '@arco-design/web-react';
import { context } from './index'
import { components_list } from '@//components';
import { IComponentConfig } from '@//vite-env';
// import { useEffect } from 'react';
const Content = Layout.Content;

export const LowCodeContent = () => {
  const { renderList, updateRenderList } = useContext(context)
  const isMobile = true
  const renderComponent = (config: IComponentConfig)  => {
    const component = components_list.filter((i) => i.id === config.componentId)[0]
    return component.getComponent(config)
  }
  const handleUpdate = (config: IComponentConfig) => {
    if (!updateRenderList) {
      return
    }
    const newConfig = {...config}
    newConfig.setting = true
    updateRenderList(newConfig)
  }
  return (
    <Content className={classNames('content', {pc: !isMobile, h5: isMobile, })}>
        <div className='canvas'>
          {renderList && renderList.length > 0 && renderList.map((item) => (
            <div key={item.id} onClick={() => handleUpdate(item)}>
              {renderComponent(item)}
            </div>
          ))}
        </div>
    </Content>
  )
}
