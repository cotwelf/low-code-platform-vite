import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import { Layout } from '@arco-design/web-react';
import { context } from './index'
import { components_list } from '@//components';
import { IComponentConfig } from '@//vite-env';
import { DragBox } from '@//utils/components/drag-box/drag-box';
import { splitAfterNumber } from '@//utils';
const Content = Layout.Content;

export const LowCodeContent = () => {
  const { renderList, updateRenderList } = useContext(context)
  const [canvasActive, setCanvasActive] = useState(false)
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
        <div
          className={classNames('canvas', {active: canvasActive || (renderList && renderList.some(i => i.setting))})}
        >
          {renderList && renderList.length > 0 && renderList.map((item: IComponentConfig) => (
            <DragBox
              onMoving={({xDiff, yDiff}) => {
                const prevTop = splitAfterNumber(item.style.top)
                const prevLeft = splitAfterNumber(item.style.left)
                if (!prevLeft.unit || !prevTop.unit) {
                  return
                }
                const style = {...item.style}
                style.top = `${prevTop.value + yDiff}${prevTop.unit}`
                style.left = `${prevLeft.value + xDiff}${prevLeft.unit}`
                console.log(style,'style')
                const currentItem: IComponentConfig = {...item, style: style}
                handleUpdate(currentItem)
              }}
              onMoveStart={() => setCanvasActive(true)}
              key={item.id}
            >
              {renderComponent(item)}
            </DragBox>
          ))}
        </div>
    </Content>
  )
}
