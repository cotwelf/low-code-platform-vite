import { EditComponentKey } from '@//types/editbase.type'
import { ComponentName, ComponentSchema, ComponentStyle, IButtonComponent } from '@//types/lowCodeCompo.type'

export const buttonSchema = (id: string, defaultStyle: ComponentStyle): ComponentSchema => {
  return {
    id,
    name: ComponentName.ButtonComponent,
    props: {
      innerText: 'button',
      ...defaultStyle,
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
        label: '颜色',
        value: 'pink',
        callback: null
      }
    },
    style: { ...defaultStyle, backgroundColor: 'pink' }
  }
}
export function getBtnComponent(schema: ComponentSchema | undefined) {
  const { props, id } = schema as IButtonComponent
  return <button key={id} style={{ height: '100%', width: '100%' }}>{props.innerText}</button>
}
