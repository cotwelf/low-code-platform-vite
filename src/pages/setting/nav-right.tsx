import { Button, Checkbox, Descriptions, Form, Input, Layout, Menu } from '@arco-design/web-react';
import React from 'react'
import { IconEdit } from '@arco-design/web-react/icon';
const FormItem = Form.Item;

const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;

export const NavRight = () => {
  const componentInfo = [
    {
      label: '图片组件',
      value: <React.Fragment>
        <span>图片 1</span>
        <IconEdit className='edit hightlight' />
      </React.Fragment>,
    },
    {
      label: 'ID',
      value: <span className='hightlight'>APTX4869</span>,
    }
  ]
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
