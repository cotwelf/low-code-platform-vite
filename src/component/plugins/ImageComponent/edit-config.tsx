import { context } from '@//App'
import { IImageEditConfig } from '@//types/editConfig.type'
import { IPictureComponent } from '@//types/lowCodeCompo.type'
import { Form } from '@arco-design/web-react'
import { useContext, useEffect, useState } from 'react'
import { getEditComponent } from '../../edit-component/base'
// import { EditInputProp } from './editbase.type'
// 获取并配置image组件的编辑栏
export const ImageConfigComponents = () => {
  const { editingCompo, reRender, setReRender } = useContext(context)
  const [formItems, setFormItems] = useState<Array<JSX.Element>>([])

  useEffect(() => {
    if (!editingCompo?.editConfig) {
      return
    }
    const imgCompo = { ...editingCompo } as IPictureComponent
    const editorConfig: IImageEditConfig = { ...imgCompo.editConfig }
    let tempFormItems: JSX.Element[] = []
    // 遍历config动态生成修改部分
    let key: keyof IImageEditConfig
    for (key in editorConfig) {
      const configItem = editorConfig[key]
      configItem.value = imgCompo.props[key]
      // 配置回调函数
      const callback = (val: string) => {
        imgCompo.props[key] = val
        // 修改render使得页面数据刷新
        setReRender?.(() => {
          console.log('页面更新成功')
          return !reRender
        })
      }
      configItem.callback = callback
      const formItem = getEditComponent(configItem, key)
      tempFormItems = [...tempFormItems, formItem]
    }
    setFormItems(tempFormItems)
  }, [editingCompo?.editConfig])

  return <Form>{formItems}</Form>
}
