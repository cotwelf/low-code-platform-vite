import { EditConfig, EditInputProp } from '@//types'
import { Input } from '@arco-design/web-react'

// 采用输入框编辑
export const AInput: React.FC<EditConfig> = ({ editConfig }) => {
  const inputEditConfig = editConfig as EditInputProp
  return (
    <Input
      type={inputEditConfig.propType}
      value={inputEditConfig.value}
      onChange={(val) => {
        if (inputEditConfig.callback) {
          inputEditConfig.value = val
          inputEditConfig.callback(val)
        }
      }}
    ></Input>
  )
}
