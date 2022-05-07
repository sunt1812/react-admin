import React from 'react'
import ReactDOM from 'react-dom'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
import Layout from './components/layout/Layout'
import { AppProvider } from './context/context'


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Layout/>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
