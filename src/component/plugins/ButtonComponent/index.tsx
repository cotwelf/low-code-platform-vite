import { EditComponentKey } from '@//types/editbase.type'
import { ComponentName, ComponentSchema, ComponentStyle, IButtonComponent, PluginComponentProps } from '@//types/lowCodeCompo.type'
import { initEvents } from '@//utils/util'
import { context } from '@//views/preview'
import React from 'react'
import { useContext, useEffect } from 'react'

const defaultStyle: ComponentStyle = {
  position: 'absolute',
  top: '100px',
  left: '100px',
  width: '100px',
  height: '40px',
  zIndex: 1,
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#165dff',
  fontSize: '14px',
  border: '0',
  outline: '0',
}

export const buttonSchema = (id: string): ComponentSchema => {
  return {
    id,
    name: ComponentName.ButtonComponent,
    props: {
      innerText: 'button',
      backgroundColor: '#165dff',
      color: '#ffffff',
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
        value: 'button',
        callback: null
      },
      backgroundColor: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'color',
        label: '背景颜色',
        value: '#165dff',
        callback: null
      },
      color: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'color',
        label: '字体颜色',
        value: '#ffffff',
        callback: null
      },
      width: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'textarea',
        label: '宽度',
        value: '100px',
        callback: null
      },
      height: {
        name: EditComponentKey.EDIT_INPUT,
        type: 'style',
        propType: 'textarea',
        label: '高度',
        value: '100px',
        callback: null
      },
      // marginTop: {
      //   name: EditComponentKey.EDIT_INPUT,
      //   type: 'style',
      //   propType: 'textarea',
      //   label: '宽度',
      //   value: this.style.height || 100,
      //   callback: null
      // },
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
    <button onClick={onClickCb} onDoubleClick={dbClickCb} key={id} style={{...style, outline: 'none'}}>
      {props.innerText}
    </button>
  )
}
