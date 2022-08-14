import { context } from '@//App'
import { IButtonEditConfig } from '@//types/editConfig.type'
import { IButtonComponent } from '@//types/lowCodeCompo.type'
import { Form } from '@arco-design/web-react'
import { useContext, useEffect } from 'react'
import { getEditComponent } from '../../edit-component/base'
// import { EditInputProp } from './editbase.type'
// 获取并配置 button 组件的编辑栏
export const ButtonConfigComponents = () => {
  const { editingCompo, reRender, setReRender } = useContext(context)
  // const [formItems, setFormItems] = useState<Array<JSX.Element>>([])
  const btnCompo = editingCompo as IButtonComponent
  const editorConfig = btnCompo.editConfig
  const formItems: JSX.Element[] = []

  useEffect(() => {
    console.log(editingCompo,formItems, 'editingCompo')
  })
  // 遍历config动态生成修改部分
  let key: keyof IButtonEditConfig
  for (key in editorConfig) {
    const configItem = editorConfig[key]
    configItem.value = btnCompo.props[key]
    // 配置回调函数
    const callback = (val: string) => {
      btnCompo.props[key] = val
      // 修改render使得页面数据刷新
      setReRender?.(() => {
        console.log('页面更新成功')
        return !reRender
      })
    }
    configItem.callback = callback
    const formItem = getEditComponent(configItem, key)
    formItems.push(formItem)
  }

  return <Form>{formItems}</Form>
}
