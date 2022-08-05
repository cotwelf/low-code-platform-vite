import { Collapse, Descriptions, Form, Layout } from '@arco-design/web-react';
import React, { useContext, useEffect, useState } from 'react'
import { IconEdit } from '@arco-design/web-react/icon';
import { context } from '.';
import { IComponentConfig, IStyleProperties } from '@//vite-env';
import { components_list } from '@//components';
import { formItem } from '@//utils/style-configs';

const CollapseItem = Collapse.Item;

const Sider = Layout.Sider;

export const NavRight = () => {
  const { renderList, updateRenderList } = useContext(context)
  const [currentConfig, setCurrentConfig] = useState<IComponentConfig | null>(null)
  const [form] = Form.useForm()
  const componentInfo = [
    {
      label: components_list.find(i => i.id === currentConfig?.componentId)?.label,
      value: <React.Fragment>
        <span>{currentConfig?.name}</span>
        <IconEdit className='edit hightlight' />
      </React.Fragment>,
    },
    {
      label: 'ID',
      value: <span className='hightlight'>{currentConfig?.id}</span>,
    }
  ]
  useEffect(() => {
    const config = renderList?.find(i => i.setting)
    if(config) {
      setCurrentConfig(config)
      form.setFieldsValue(config.style)
    }
  }, [renderList])
  if (!currentConfig || !updateRenderList) {
    return null
  }
  const handleValue = (value: IStyleProperties) => {
    if (JSON.stringify(value) !== JSON.stringify(currentConfig.style)) {
      updateRenderList({...currentConfig, style: value, setting: true})
    }
  }
  return (
    <Sider
        collapsed={false}
        collapsible
        trigger={null}
        width={320}
        className={'nav nav-right'}
      >
        <Descriptions className={'component-info'} size='large' layout='inline-vertical' data={componentInfo}  />
        <Collapse
          defaultActiveKey={'name2'}
          expandIconPosition='right'
        >
          <CollapseItem header='基本属性' name={'name2'}>
            <Form
              form={form}
              className={'form'}
              onValuesChange={(v, vs) => handleValue(vs)}
            >
              {Object.keys(currentConfig.style).map((key, index) => {
                return formItem[key] ? (
                  formItem[key]({field: key, value: currentConfig.style[key], key: `${index}${key}`, form: form})
                ): null
              })}
          </Form>
          </CollapseItem>
        </Collapse>
      </Sider>
  )
}
