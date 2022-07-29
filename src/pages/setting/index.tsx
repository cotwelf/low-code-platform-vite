import React from 'react'
import { Layout} from '@arco-design/web-react';
import { LowCodeHeader } from './header';
import { NavLeft } from './nav-left';
import { LowCodeContent } from './content';
import { NavRight } from './nav-right';

const LowCodeLayout = () => {
  return (
    <Layout className='low-code-layout'>
      <LowCodeHeader />
      <Layout className='low-code-container'>
        <NavLeft />
        <LowCodeContent />
        <NavRight />
      </Layout>
    </Layout>
  )
}

export default LowCodeLayout;
