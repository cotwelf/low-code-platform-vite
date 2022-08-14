import { context } from '@//App'
import { IButtonComponent } from '@//types/lowCodeCompo.type'
import { Form } from '@arco-design/web-react'
import { useContext, useEffect, useState } from 'react'
import { getEditComponent } from '../../edit-component/base'
// import { EditInputProp } from './editbase.type'
// 获取并配置 button 组件的编辑栏
export const ButtonConfigComponents = () => {
  const { editingCompo, reRender, setReRender } = useContext(context)
  const [ formItems, setFormItems ] = useState<Array<JSX.Element>>([])
  const btnCompo = { ...editingCompo } as IButtonComponent

  useEffect(() => {
    const editorConfig = btnCompo.editConfig
    const tempFormItem: JSX.Element[] = []
    // 遍历 config 动态生成修改部分
    Object.keys(editorConfig).forEach((key: keyof typeof editorConfig) => {
      const configItem = editorConfig[key]
      configItem.value = btnCompo.props[key]
      configItem.callback = (val: string) => {
        btnCompo.props[key] = val
        // 修改render使得页面数据刷新
        setReRender?.(() => {
          return !reRender
        })
      }
      const formItem = getEditComponent(configItem, key)
      tempFormItem.push(formItem)
    })
    setFormItems(tempFormItem)
  }, [JSON.stringify(editingCompo?.editConfig)])


  return <Form>{formItems}</Form>
}
