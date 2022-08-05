import { Form, Input } from '@arco-design/web-react';
import React from 'react'
const FormItem = Form.Item;

export interface IFormItem {
  [key: string]: (props: {
    field: string
  }) => React.ReactNode
}
export const formItem: IFormItem = {
  width: (props: {
    field: string
  }) => {
    const { field } = props
    console.log(props,'props')
    return <FormItem label='宽度' field={field}>
    <Input addAfter='px'/>
  </FormItem>
  },
  height: (props: {
    field: string
  }) => {
    const { field } = props
    return <FormItem label='高度' field={field}>
    <Input addAfter='px'/>
  </FormItem>
  },
}
