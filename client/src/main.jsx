import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import { DrivesApp } from './DrivesApp'

import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DrivesApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
