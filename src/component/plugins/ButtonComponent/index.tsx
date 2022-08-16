import { EditComponentKey } from '@//types/editbase.type'
import { ComponentName, ComponentSchema, IButtonComponent } from '@//types/lowCodeCompo.type'
import { context } from '@//views/preview'
import { Message } from '@arco-design/web-react'
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
// 因为函数组件传递属性只能使用props,所以用BtnProps来接收schema,如果不是FC组件，使用useEffect会报错
interface BtnProps {
  schema: ComponentSchema | undefined
}
export const BtnComponent: React.FC<BtnProps> = ({ schema }) => {
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
  useEffect(() => {
    if (events?.clickEvents && setReRender) {
      // 动态设置事件
      const onClickProps = events.clickEvents.onClick
      const setCallback = (eventType: keyof typeof events.clickEvents, actionType: string, val: string) => {
        events.clickEvents[eventType]
        switch (actionType) {
          case 'alert':
            events.clickEvents[eventType].callback = () => {
              Message.warning(val)
            }
            break
          case 'openUrl':
            events.clickEvents[eventType].callback = () => {
              window.open(val, '_blank', 'noopener,noreferrer')
            }
            events.clickEvents[eventType].val = val
            break
          case 'null':
            events.clickEvents[eventType].callback = undefined
            events.clickEvents[eventType].val = ''
            break
        }
      }
      setCallback('onClick', onClickProps.actionType, onClickProps.val)
      setReRender(!reRender)
    }
  }, [events?.clickEvents.onClick.val, events?.clickEvents.dbClick.val, events])
  const clickEvents = schema?.events.clickEvents
  const onClickCb = clickEvents?.onClick.callback
  const dbClickCb = clickEvents?.dbClick.callback

  return (
    <button onClick={onClickCb} onDoubleClick={dbClickCb} key={id} style={style}>
      {props.innerText}
    </button>
  )
}
