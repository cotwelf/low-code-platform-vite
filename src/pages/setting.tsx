import { useEffect, useState } from 'react'
import { Layout, Menu, Message } from '@arco-design/web-react';
import { IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import classNames from 'classnames';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const LowCodeLayout = () => {
  const [ collapsed, setCollapsed ] = useState(false)
  const [ pageTitle, setPageTitle ] = useState('')

  const handleCollapsed = () => setCollapsed(!collapsed)

  useEffect(() => {
    setPageTitle('2233')
  }, [])
  return (
    <Layout className='low-code-layout'>
      <Header className='header'>
        <div className={classNames('page-name', {empty: !pageTitle})}>{ pageTitle || '请设置页面标题' }</div>
      </Header>
      <Layout>
      <Sider
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        collapsible
        trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        breakpoint='xl'
      >
        <Menu
          defaultOpenKeys={['1']}
          defaultSelectedKeys={['0_3']}
          onClickMenuItem={(key) =>
            Message.info({
              content: `You select ${key}`,
              showIcon: true,
            })
          }
          style={{ width: '100%' }}
        >
          <SubMenu
            key='4'
            title={
              <span>
                <IconCalendar />
                Navigation 4
              </span>
            }
          >
            <MenuItem key='4_1'>Menu 1</MenuItem>
            <MenuItem key='4_2'>Menu 2</MenuItem>
            <MenuItem key='4_3'>Menu 3</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default LowCodeLayout;
