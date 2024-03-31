import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { DrivesApp } from './DrivesApp'

import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DrivesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
