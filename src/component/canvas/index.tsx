import { context } from '@//views/editor'
import { IDragIcon } from '@//types/pluginList.type'
import { ComponentName } from '@//types/lowCodeCompo.type'
import { CSSProperties, useContext, useRef } from 'react'
import classNames from 'classnames'
import { useDrop } from 'react-dnd'
import { Shape } from '../shape'
import './style.scss'
import { getComponent } from '../plugins/plugins'
import { bindContextMenu, ContextMenu, hideContextMenu } from '../context-menu'

// 画布
export function Canvas() {
  const { components, setEditingCompo, clone, setReRender, setMenuPos, menuPos } = useContext(context)

  const canvasRef = useRef(null)
  // 实现拖拽的配置
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'DragIcon', //写自定义的image拖拽type
    drop: (item: IDragIcon) => (clone as (conKey: ComponentName) => void)(item.compKey),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  if (components && setEditingCompo && setReRender) {
    return (
      <div ref={canvasRef}>
        <div
          onContextMenu={(e) => bindContextMenu(e, canvasRef, setMenuPos)}
          className={classNames('canvas-wrapper', { over: isOver })}
          ref={drop}
          onClick={() => {
            if (menuPos?.length) hideContextMenu(setMenuPos)
          }}
        >
          {components.map((componentSchema, index) => {
            const schema = componentSchema
            // 根据schema的名称进行相应的渲染
            return (
              <div
                onClick={() => setEditingCompo(schema)}
                style={{ ...(schema?.style as CSSProperties), display: 'inline-block' }}
                key={`compo-${index}`}
              >
                <Shape component={schema}>{getComponent(schema)}</Shape>
              </div>
            )
          })}
          <ContextMenu></ContextMenu>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
