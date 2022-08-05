import React, { useState } from 'react'
import { Layout} from '@arco-design/web-react';
import { LowCodeHeader } from './header';
import { NavLeft } from './nav-left';
import { LowCodeContent } from './content';
import { NavRight } from './nav-right';
import { IComponentConfig } from '@//vite-env';

export const context = React.createContext<Partial<{
  renderList: IComponentConfig[]
  updateRenderList: (config: IComponentConfig) => void
}>>({})

const LowCodeLayout = () => {
  const [renderList, setRenderList] = useState<Array<IComponentConfig>>([])
  const updateRenderList = (config: IComponentConfig) => {
    const tempList = renderList.map(i => {
      i.setting = false
      return i
    })
    console.log(tempList, 'tempListtempList')
    if (!tempList.some((item) => item.id === config.id)) {
      setRenderList([...tempList, config])
      return
    }
    tempList.forEach((item, index) => {
      if (item.id === config.id) {
        tempList[index] = config
      }
    })
    setRenderList(tempList)
  }

  return (
    <context.Provider value={{renderList, updateRenderList}}>
      <Layout className='low-code-layout'>
        <LowCodeHeader />
        <Layout className='low-code-container'>
          <NavLeft />
          <LowCodeContent />
          {renderList.some(i => i.setting) && <NavRight />}
        </Layout>
      </Layout>
    </context.Provider>

  )
}

export default LowCodeLayout;
