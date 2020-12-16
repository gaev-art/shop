import React from 'react'
import {render} from 'react-dom'
import reportWebVitals from './reportWebVitals'
import {App} from './components/App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
