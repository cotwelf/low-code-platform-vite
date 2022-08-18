import { ComponentSchema } from '@//types/lowCodeCompo.type'
import { Message } from '@arco-design/web-react'
export const initEvents = (
  events: ComponentSchema['events'] | undefined,
  setReRender: React.Dispatch<boolean> | undefined,
  reRender: boolean | undefined
) => {
  if (events?.clickEvents && setReRender) {
    // 动态设置事件
    const clickEvents = events.clickEvents
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
    Object.keys(clickEvents).forEach((key) => {
      const eventType = key as keyof typeof clickEvents
      setCallback(eventType, clickEvents[eventType].actionType, clickEvents[eventType].val)
    })

    setReRender(!reRender)
  }
}
