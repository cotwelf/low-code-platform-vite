/**
 * plugin的基本编辑器组件
 * 通过editConfig.name来获取相应编辑器
 * 例如a-input编辑器
 *        propType：input类型
 *        label:所修改的属性
 *        value:input的值
 *        callback:修改值后的回调函数
 */

import { EditComponentKey, EditComponentProps } from '@//types/editbase.type'
import { Form } from '@arco-design/web-react'
import { AImageInput } from './edit-imgInput'
import { AInput } from './edit-input'
import { AVideoInput } from './edit-videoInput'
const FormItem = Form.Item

export const getEditComponent = (editConfig: EditComponentProps, keyVal: string): JSX.Element => {
  switch (editConfig.name) {
    case EditComponentKey.EDIT_INPUT: {
      return (
        <FormItem key={keyVal} label={editConfig.label}>
          {<AInput editConfig={editConfig} />}
        </FormItem>
      )
    }
    case EditComponentKey.EDIT_IMAGE_INPUT: {
      return (
        <FormItem key={keyVal} label={editConfig.label}>
          {<AImageInput editConfig={editConfig} />}
        </FormItem>
      )
    }
    case EditComponentKey.EDIT_VIDEO_INPUT: {
      return (
        <FormItem key={keyVal} label={editConfig.label}>
          {<AVideoInput editConfig={editConfig} />}
        </FormItem>
      )
    }
    default:
      return <FormItem key="null" label="空属性"></FormItem>
  }
}
