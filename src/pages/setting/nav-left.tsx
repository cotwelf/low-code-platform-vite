import { Card, Layout, Menu, Tree } from '@arco-design/web-react';
import { treeData } from '../../../public/test-data'
import React from 'react'

const SubMenu = Menu.SubMenu;
const { Grid } = Card;
const Sider = Layout.Sider;

export const NavLeft = () => {
  return (
    <Sider
        collapsed={false}
        collapsible
        trigger={null}
        width={260}
        className={'nav nav-left'}
      >
        <Menu
          defaultOpenKeys={['1', '2']}
          defaultSelectedKeys={['0_3']}
          style={{ width: '100%' }}
          className="menu"
        >
          <SubMenu
            key='1'
            title='组件列表'
            className={'menu-header'}
          >
            <Card bordered={false} className="component-list">
          {new Array(7).fill(null).map((_, index) => {
          const hoverable = index % 2 === 0;
          return (
            <Grid
              key={index}
              hoverable={hoverable}
              style={{
                width: '50%',
              }}
            >
              <Card
                style={{ width: '100%' }}
                bordered={false}
              >
                图片组件
              </Card>
            </Grid>
          );
        })}
      </Card>
          </SubMenu>
          <SubMenu
          className={'menu-header'}
            key='2'
            title='页面结构'
          >
            <Tree
              defaultSelectedKeys={['0-0-1']}
              draggable={true}
              treeData={treeData} showLine={true}
              className={'dom-tree'}
            >

            </Tree>
          </SubMenu>
        </Menu>
      </Sider>
  )
}
