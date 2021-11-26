import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App';
// import { API } from './config';
import Router from './Router'
import { Provider } from 'react-redux'
import store from './store/index'
import { browserHistory } from './store/history'

import { ReduxRouter } from '@lagunovsky/redux-react-router'

import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter
        store={store}
        history={browserHistory}
        children={<Router />}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
