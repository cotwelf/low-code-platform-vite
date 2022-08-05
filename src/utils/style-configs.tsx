import { Form, Input } from '@arco-design/web-react';
import React from 'react'
const FormItem = Form.Item;

export const formItem = {
  width: (props) => <FormItem label='宽度'>
    <Input placeholder={props.toString()} {...props} />
  </FormItem>,
  height: (props) => <FormItem label='高度'>
  <Input placeholder='please enter your username...' {...props} />
</FormItem>,
}
