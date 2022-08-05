import { Button, Checkbox, Descriptions, Form, Input, Layout, Menu } from '@arco-design/web-react';
import React, { useContext, useEffect, useState } from 'react'
import { IconEdit } from '@arco-design/web-react/icon';
import { formItem } from '@//utils/style-configs';
import { context } from '.';
import { IComponentConfig } from '@//vite-env';
import { components_list } from '@//components';
const FormItem = Form.Item;

const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;

export const NavRight = () => {
  const { renderList } = useContext(context)
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
    if(config && (config?.id !== currentConfig?.id)) {
      setCurrentConfig(config)
    }
  }, [renderList])
  return (
    <Sider
        collapsed={false}
        collapsible
        trigger={null}
        width={320}
        className={'nav nav-right'}
      >
        <Descriptions className={'component-info'} size='large' layout='inline-vertical' data={componentInfo}  />
        <Menu
          defaultOpenKeys={['1', '2']}
          defaultSelectedKeys={['0_1']}
          style={{ width: '100%' }}
          className="menu"
        >
          <SubMenu
            key='1'
            title='基本属性'
            className={'menu-header'}
          >
            <Form
              form={form}
              className={'form'}
              initialValues={{ name: 'name'}}
              onValuesChange={(v, vs) => {
                console.log(v, vs);
              }}
            >
              {formItem['width']({ field: 'name' })}
              <FormItem label='Username'>
                <Input placeholder='please enter your username...' />
              </FormItem>
              <FormItem label='Post'>
                <Input placeholder='please enter your post...' />
              </FormItem>
              <FormItem wrapperCol={{ offset: 5 }}>
                <Checkbox>I have read the manual</Checkbox>
              </FormItem>
              <FormItem wrapperCol={{ offset: 5 }}>
                <Button type='primary'>Submit</Button>
              </FormItem>
            </Form>
          </SubMenu>
          <SubMenu
          className={'menu-header'}
            key='2'
            title='基本样式'
          >
             <Form className={'form'}>
              <FormItem label='Username'>
                <Input placeholder='please enter your username...' />
              </FormItem>
              <FormItem label='Post'>
                <Input placeholder='please enter your post...' />
              </FormItem>
              <FormItem wrapperCol={{ offset: 5 }}>
                <Checkbox>I have read the manual</Checkbox>
              </FormItem>
              <FormItem wrapperCol={{ offset: 5 }}>
                <Button type='primary'>Submit</Button>
              </FormItem>
            </Form>
          </SubMenu>
        </Menu>
      </Sider>
  )
}
