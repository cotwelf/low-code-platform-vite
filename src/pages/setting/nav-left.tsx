import { Card, Collapse, Layout, Tree } from '@arco-design/web-react';
import { treeData } from '../../../public/test-data'
import { components_list } from '@//components';
import React, { useContext } from 'react'
import { IComponentConfig, IComponentItem } from '@//vite-env';
import { context } from '.';

const { Grid } = Card;
const Sider = Layout.Sider;
const CollapseItem = Collapse.Item;

export const NavLeft = () => {
  const { renderList, updateRenderList } = useContext(context)
  // 添加组件库里的组件到 content，初始化数据，开始配置
  const addToRenderList = (componentItem: IComponentItem) => {
    if (!updateRenderList || !renderList) {
      return
    }
    const config:IComponentConfig = {
      ...componentItem.defaultConfig,
      id: Date.now().toString(16).toLocaleUpperCase(),
      componentId: componentItem.id,
      setting: true,
    }
    updateRenderList(config)
  }
  return (
    <Sider
        collapsed={false}
        collapsible
        trigger={null}
        width={260}
        className={'nav nav-left'}
      >
        <Collapse
          defaultActiveKey={['components', 'structure']}
          expandIconPosition='right'
        >
          <CollapseItem header='组件列表' name={'components'}>
          <Card
            bordered={false}
            className="component-list"
          >
            {components_list.map((component, index) => (
              <Grid
                key={`${index}${component.label}`}
                hoverable={true}
                style={{
                  width: '50%',
                  textAlign: 'center',
                }}
              >
                <Card
                  style={{ width: '100%' }}
                  bordered={false}
                  onClick={() => addToRenderList(component)}
                  draggable="true"
                  onDragEnd={() => addToRenderList(component)}
                >
                  {component.label}
                </Card>
              </Grid>
            ))}
          </Card>
          </CollapseItem>
          <CollapseItem header='页面结构' name={'structure'}>
            <Tree
              defaultSelectedKeys={['0-0-1']}
              draggable={true}
              treeData={treeData} showLine={true}
              className={'dom-tree'}
              >
              </Tree>
          </CollapseItem>
        </Collapse>
      </Sider>
  )
}
