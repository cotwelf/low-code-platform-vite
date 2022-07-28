import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import LowCodeLayout from './pages/setting'
import './style/index.scss'
import '@arco-design/web-react/dist/css/arco.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LowCodeLayout />
  </React.StrictMode>
)
