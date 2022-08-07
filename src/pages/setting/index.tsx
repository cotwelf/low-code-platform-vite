import React, { useState } from 'react'
import { Layout} from '@arco-design/web-react';
import { LowCodeHeader } from './header';
import { NavLeft } from './nav-left';
import { LowCodeContent } from './content';
import { NavRight } from './nav-right';
import { IComponentConfig, IPageInfo } from '@//vite-env';

export const context = React.createContext<Partial<{
  renderList: IComponentConfig[]
  updateRenderList: (config: IComponentConfig, force?: boolean) => void
  pageInfo: IPageInfo | null
  setPageInfo: React.Dispatch<React.SetStateAction<IPageInfo | null>>
}>>({})

const LowCodeLayout = () => {
  const [ renderList, setRenderList ] = useState<Array<IComponentConfig>>([])
  const [ pageInfo, setPageInfo ] = useState<IPageInfo | null>(null)
  const updateRenderList = (config: IComponentConfig) => {
    let tempList = renderList.map(i => {
      i.setting = false
      return i
    })

    if (!tempList.some((item) => item.id === config.id)) {
      setRenderList([...tempList, config])
      return
    }
    tempList = tempList.map((item) => {
      if (item.id === config.id) {
        return config
      }
      return item
    })
    console.log(tempList, 'renderList')
    setRenderList(tempList)
  }
  return (
    <context.Provider value={{renderList, updateRenderList, pageInfo, setPageInfo}}>
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
