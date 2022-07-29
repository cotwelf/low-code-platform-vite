import { Button, Descriptions, Layout } from '@arco-design/web-react';
import { IconEdit } from '@arco-design/web-react/icon';
import React, { useEffect, useState } from 'react'

const Header = Layout.Header;

const emptyNode = () => <span className='empty'>未设置</span>
const DEFAULT_PAGE_INFO = [
  {
    label: '页面标题',
    value: emptyNode(),
  },
  {
    label: '平台',
    value: emptyNode(),
  }
]

export const LowCodeHeader = () => {
  const [ pageInfo, setPageInfo ] = useState(DEFAULT_PAGE_INFO)
  useEffect(() => {
    setPageInfo(DEFAULT_PAGE_INFO)
  },[])
  return (
    <Header className='header'>
      <div className='page-info'>
        <Descriptions colon=' :' size='large' layout='inline-horizontal' data={pageInfo}  />
        <IconEdit className='edit' />
      </div>
      <div className='btn-group'>
        <Button type='primary'>保存</Button>
        <Button type='secondary'>发布</Button>
      </div>
    </Header>
  )
}
