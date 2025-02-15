import { createRoot } from 'react-dom/client'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import App from './App'
import './style/index.scss'
import { Preview } from './views/preview'
import { Editor } from './views/editor'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(
  <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/editor/1'}></Navigate>} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  </DndProvider>
)
