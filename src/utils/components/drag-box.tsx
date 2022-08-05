import React, { useState } from 'react'

interface IPosition {
  xDiff: number // X 方向增量
  yDiff: number // Y 方向增量
}
interface IDragBoxProps {
  onMoving: (p: IPosition) => void
  onMoveEnd?: (p: IPosition) => void
  onMoveStart?: (p?: IPosition) => void
  children: React.ReactNode
}
export const DragBox: React.FC<IDragBoxProps> = ({ onMoving, onMoveEnd, onMoveStart, children }) => {
  const [dragging, setDragging] = useState(false)
  const [clientInfo, setClientInfo] = useState({x: 0, y: 0})
  const handleMoving = (e: React.MouseEvent) => {
    if (dragging) {
      // const tempDiff = {...diff}
      // setDiff({xDiff: tempDiff.xDiff - e.clientX, yDiff: tempDiff.yDiff - e.clientY})
      const tempClientInfo = { ... clientInfo}
      setClientInfo({ x: e.clientX, y: e.clientY })
      onMoving({xDiff: e.clientX - tempClientInfo.x, yDiff: e.clientY - tempClientInfo.y})
    }
  }
  return (
    <div
      onMouseDown={(e: React.MouseEvent) => {
        if (onMoveStart) {
          onMoveStart()
        }
        setClientInfo({ x: e.clientX, y: e.clientY })
        setDragging(true)
      }}
      onMouseMove={handleMoving}
      onMouseUp={() => {
        if (onMoveEnd) {
          onMoveEnd({xDiff: 0, yDiff: 0})
        }
        setDragging(false)
      }}
    >
      {children}
    </div>
  )
}
