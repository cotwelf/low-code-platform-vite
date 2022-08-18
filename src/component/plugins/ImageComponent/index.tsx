import { EditComponentKey } from '@//types/editbase.type'
import {
  ComponentName,
  ComponentSchema,
  ComponentStyle,
  IPictureComponent,
  PluginComponentProps
} from '@//types/lowCodeCompo.type'
import { initEvents } from '@//utils/util'
import { context } from '@//views/preview'
import { useContext, useEffect } from 'react'

export const pictureSchema = (id: string, defaultStyle: ComponentStyle): ComponentSchema => {
  return {
    id,
    name: ComponentName.PictureComponent,
    props: {
      imgSrc: '/default-pic.jpg'
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
      imgSrc: {
        name: EditComponentKey.EDIT_INPUT,
        propType: 'textarea',
        label: '图片url',
        value: '/default-pic.jpg',
        callback: null
      }
    },
    style: { ...defaultStyle }
  }
}
export const PicComponent: React.FC<PluginComponentProps> = ({ schema }) => {
  const { props, id } = schema as IPictureComponent
  const { reRender, setReRender } = useContext(context)
  const events = schema?.events
  useEffect(() => initEvents(events, setReRender, reRender), [events])
  const clickEvents = schema?.events.clickEvents
  const onClickCb = clickEvents?.onClick.callback
  const dbClickCb = clickEvents?.dbClick.callback
  return (
    <img
      key={id}
      onClick={onClickCb}
      onDoubleClick={dbClickCb}
      style={{ height: '100%', width: '100%' }}
      src={props.imgSrc}
    />
  )
}
