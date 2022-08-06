import React, { useState } from 'react'
import './style.scss'

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
    e.stopPropagation()
    e.preventDefault()
    if (e.clientY === clientInfo.y && e.clientX === clientInfo.x) {
      return
    } else if (dragging) {
      const tempClientInfo = { ... clientInfo}
      const xDiff = e.clientX - tempClientInfo.x
      const yDiff = e.clientY - tempClientInfo.y
      console.log('handleMoving', clientInfo, e.clientX, e.clientY, xDiff, yDiff)
      setClientInfo({ x: e.clientX, y: e.clientY })
      onMoving({xDiff, yDiff})
    }
  }
  const handleMoveStart = (e: React.MouseEvent) => {
    e.target.parentNode.style.zIndex = '999'
    if (onMoveStart) {
      onMoveStart()
    }
    setClientInfo({ x: e.clientX, y: e.clientY })
    setDragging(true)
  }
  const handleMoveEnd = (e: React.MouseEvent) => {
    e.target.parentNode.style.zIndex = ''
    if (onMoveEnd) {
      onMoveEnd({xDiff: 0, yDiff: 0})
    }
    setClientInfo({ x: e.clientX, y: e.clientY })
    setDragging(false)
  }
  return (
    <div
      className='drag-box'
      onMouseDown={handleMoveStart}
      onMouseMove={handleMoving}
      onMouseLeave={handleMoveEnd}
      onMouseUp={handleMoveEnd}
    >
      {children}
    </div>
  )
}
