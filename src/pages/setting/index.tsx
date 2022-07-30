import React, { useState } from 'react'
import { Layout} from '@arco-design/web-react';
import { LowCodeHeader } from './header';
import { NavLeft } from './nav-left';
import { LowCodeContent } from './content';
import { NavRight } from './nav-right';
import { IComponentItem } from '@//vite-env';

const LowCodeLayout = () => {
  const [renderList, setRenderList] = useState<Array<IComponentItem>>([])
  const updateRenderList = (element: IComponentItem) => {
    setRenderList([...renderList, element])
  }
  return (
    <Layout className='low-code-layout'>
      <LowCodeHeader />
      <Layout className='low-code-container'>
        <NavLeft updateRenderList={updateRenderList} />
        <LowCodeContent renderList={renderList} updateRenderList={updateRenderList} />
        <NavRight />
      </Layout>
    </Layout>
  )
}

export default LowCodeLayout;
