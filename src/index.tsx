import './index.css'
import 'antd/dist/antd.min.css'

import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
/* eslint-disable react/no-render-return-value */
import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { store } from './redux/_store'

export function rerenderTree() {
  return ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
    document.getElementById('root')
  )
}

rerenderTree()

store.subscribe(rerenderTree)
