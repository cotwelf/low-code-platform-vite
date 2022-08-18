import { EditComponentKey } from '@//types/editbase.type'
import { ComponentName, ComponentSchema, IButtonComponent, PluginComponentProps } from '@//types/lowCodeCompo.type'
import { initEvents } from '@//utils/util'
import { context } from '@//views/preview'
import React from 'react'
import { useContext, useEffect } from 'react'
import { defaultStyle } from '../plugins'

export const buttonSchema = (id: string): ComponentSchema => {
  return {
    id,
    name: ComponentName.ButtonComponent,
    props: {
      innerText: 'button',
      backgroundColor: '#165dff',
      color: '#ffffff'
    },
    events: {
      type: ['alert', 'openUrl', 'null'],
      clickEvents: {
        onClick: {
          callback: undefined,
          actionType: 'null',
          val: ''
        },
        dbClick: {
          callback: undefined,
          actionType: 'null',
          val: ''
        }
      }
    },
    editConfig: {
      innerText: {
        name: EditComponentKey.EDIT_INPUT,
        propType: 'textarea',
        label: '按钮文字',
        value: 'button',
        callback: null
      },
      backgroundColor: {
        name: EditComponentKey.EDIT_INPUT,
        propType: 'color',
        label: '背景颜色',
        value: '#165dff',
        callback: null
      },
      color: {
        name: EditComponentKey.EDIT_INPUT,
        propType: 'color',
        label: '字体颜色',
        value: '#ffffff',
        callback: null
      }
    },
    style: { ...defaultStyle }
  }
}

export const BtnComponent: React.FC<PluginComponentProps> = ({ schema }) => {
  const { props, id } = schema as IButtonComponent
  const style = {
    height: '100%',
    width: '100%',
    backgroundColor: props.backgroundColor,
    color: props.color,
    cursor: 'pointer'
  }
  const { reRender, setReRender } = useContext(context)
  const events = schema?.events
  // 初始化加载自定义事件
  useEffect(() => initEvents(events, setReRender, reRender), [events])
  const clickEvents = schema?.events.clickEvents
  const onClickCb = clickEvents?.onClick.callback
  const dbClickCb = clickEvents?.dbClick.callback

  return (
    <button onClick={onClickCb} onDoubleClick={dbClickCb} key={id} style={style}>
      {props.innerText}
    </button>
  )
}
