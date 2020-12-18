import React from 'react'
import {render} from 'react-dom'
import reportWebVitals from './reportWebVitals'
import {App} from './components/App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './redux/store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
