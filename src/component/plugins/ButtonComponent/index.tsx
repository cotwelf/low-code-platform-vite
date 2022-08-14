import { EditComponentKey } from '@//types/editbase.type'
import { ComponentName, ComponentSchema, IButtonComponent } from '@//types/lowCodeCompo.type'
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
    event: {
      type: '',
      componentId: []
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
export function getBtnComponent(schema: ComponentSchema | undefined) {
  const { props, id } = schema as IButtonComponent
  const style = {
    height: '100%',
    width: '100%',
    backgroundColor: props.backgroundColor,
    color: props.color,
  }
  return <button key={id} style={style}>{props.innerText}</button>
}
