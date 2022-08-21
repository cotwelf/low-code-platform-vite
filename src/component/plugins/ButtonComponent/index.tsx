import { EditComponentKey } from '@//types/editbase.type'
import { ComponentName, ComponentSchema, ComponentStyle, IButtonComponent, PluginComponentProps } from '@//types/lowCodeCompo.type'
import { initEvents } from '@//utils/util'
import { context } from '@//views/preview'
import React from 'react'
import { useContext, useEffect } from 'react'

const defaultStyle: ComponentStyle = {
  position: 'absolute',
  width: '100px',
  height: '40px',
  zIndex: 1,
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#165dff',
  fontSize: '14px',
  border: '0',
  outline: '0',
  borderRadius: '4px',
}

export const buttonSchema = (id: string): ComponentSchema => {
  return {
    id,
    name: ComponentName.ButtonComponent,
    props: {
      innerText: 'button',
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
        type: 'attribute',
        propType: 'textarea',
        label: '按钮文字',
        callback: null
      },
      backgroundColor: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'color',
        label: '背景颜色',
        callback: null
      },
      color: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'color',
        label: '字体颜色',
        callback: null
      },
      width: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'textarea',
        label: '宽度',
        callback: null
      },
      height: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'textarea',
        label: '高度',
        callback: null
      },
      borderRadius: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'textarea',
        label: '圆角',
        callback: null
      },
    },
    style: { ...defaultStyle }
  }
}

export const BtnComponent: React.FC<PluginComponentProps> = ({ schema }) => {
  const { props, id, style } = schema as IButtonComponent
  const styleObj = {
    // ...style,
    height: '100%',
    width: '100%',
    backgroundColor: style.backgroundColor,
    color: style.color,
    cursor: 'pointer',
    borderRadius: style.borderRadius,
    border: '0',
    outline: '0',
  }
  const { reRender, setReRender } = useContext(context)
  const events = schema?.events
  // 初始化加载自定义事件
  useEffect(() => initEvents(events, setReRender, reRender), [events])
  const clickEvents = schema?.events.clickEvents
  const onClickCb = clickEvents?.onClick.callback
  const dbClickCb = clickEvents?.dbClick.callback

  return (
    <button onClick={onClickCb} onDoubleClick={dbClickCb} key={id} style={styleObj}>
      {props.innerText}
    </button>
  )
}
