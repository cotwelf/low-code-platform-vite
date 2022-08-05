import { Card, Layout, Menu, Tree } from '@arco-design/web-react';
import { treeData } from '../../../public/test-data'
import { components_list } from '@//components';
import React, { useContext } from 'react'
import { IComponentConfig, IComponentItem } from '@//vite-env';
import { context } from '.';
// import { DragDropContext, Draggable } from 'react-beautiful-dnd';

const SubMenu = Menu.SubMenu;
const { Grid } = Card;
const Sider = Layout.Sider;

// const getItemStyle = (isDragging: any, draggableStyle: any) => ({
//   // some basic styles to make the items look a bit nicer
//   // userSelect: "none",
//   // padding: grid * 2,
//   // margin: `0 ${grid}px 0 0 `,

//   // 拖拽的时候背景变化
//   background: isDragging ? 'lightgreen' : '#ffffff',

//   // styles we need to apply on draggables
//   ...draggableStyle
// });

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
        <Menu
          defaultOpenKeys={['1', '2']}
          style={{ width: '100%' }}
          className="menu"
        >
          <SubMenu
            key='1'
            title='组件列表'
            className={'menu-header'}
          >
            <Card bordered={false} className="component-list">
              {components_list.map((component, index) => (
                <Grid
                  key={`${index}${component.label}`}
                  hoverable={true}
                  style={{
                    width: '50%',
                  }}
                >
                    {/* <Draggable draggableId={`${index}${component.name}`} index={1}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          // style={getItemStyle(
                          //   !snapshot.isDraggingOver,
                          //   provided.draggableProps.style
                          // )}
                        > */}
                          <Card
                            style={{ width: '100%' }}
                            bordered={false}
                            onClick={() => addToRenderList(component)}
                          >
                            {component.label}
                          </Card>
                        {/* </div>
                      )}
                      </Draggable> */}
                </Grid>
              ))}
            </Card>
          {/* </DragDropContext> */}
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
