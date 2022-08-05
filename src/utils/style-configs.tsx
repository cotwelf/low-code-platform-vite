import { Form, FormInstance, Input, Popover } from '@arco-design/web-react';
import { ChromePicker } from 'react-color'
import React, { useState } from 'react'
import { IStyleProperties } from '../vite-env';
const FormItem = Form.Item;

interface IFormItemProps {
  field: string
  key?: string
  value?: IStyleProperties
  form?: FormInstance
}
export interface IFormItem {
  [key: string]: (props: IFormItemProps) => React.ReactNode
}

const ColorPicker: React.FC<{field: string, color: string, form?: FormInstance}> = (props) => {
  const [pickedColor, setPickedColor] = useState(props.color)
  const handleColor = (hex: string) => {
    if (!props.form) {
      return
    }
    props.form.setFieldValue(props.field, hex)
    setPickedColor(hex)
  }
  return (
    <Popover
      trigger='click'
      content={
        <ChromePicker
          color={pickedColor}
          onChangeComplete={({hex} : {hex: string}) => handleColor(hex)}
        />
      }
    >
      <div className='pick-color' style={{ background: pickedColor }}></div>
    </Popover>
  )
}
export const formItem: IFormItem = {
  width: (props: IFormItemProps) => {
    const { field, key } = props
    return <FormItem label='宽度' field={field} key={key}>
      <Input addAfter='px' />
    </FormItem>
  },
  height: (props: IFormItemProps) => {
    const { field, key } = props
    return <FormItem label='高度' field={field} key={key}>
    <Input addAfter='px'/>
  </FormItem>
  },
  color: (props: IFormItemProps) => {
    const { field, key, value, form } = props
    return <FormItem label='文字颜色' field={field} key={key}>
    <Input className='no-padding' addAfter={
      value && <ColorPicker color={value.toString()} form={form} field={field} />
    }/>
  </FormItem>
  },
}
