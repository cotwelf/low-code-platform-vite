// import { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
// import { useAsync } from 'react-async'
import '../component/canvas/style.scss'
import { findPage } from '../utils/strapi'
import { CSSProperties, useState } from 'react'
import { getComponent } from '../component/plugins/plugins'
import { ComponentSchema } from '../types'

// 画布
export function Preview() {
  const params = useParams()
  const [components, setComponents] = useState<ComponentSchema[]>([])

  if (params.id) {
    try {
      void findPage(+params.id).then((components) => {
        setComponents(components)
      })
    } catch (error) {
      console.log(error)
    }
  }

  if (components) {
    return (
      <div className="canvas-wrapper">
        {components.map((componentSchema, index) => {
          const schema = componentSchema
          // 根据schema的名称进行相应的渲染
          return (
            <div style={{ ...(schema?.style as CSSProperties), display: 'inline-block' }} key={`compo-${index}`}>
              {getComponent(schema)}
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div>Loading-----</div>
  }
}
