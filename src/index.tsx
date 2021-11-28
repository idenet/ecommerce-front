import { ReduxRouter } from '@lagunovsky/redux-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AnotherStore from './AnotherStore'
// import App from './App';
// import { API } from './config';
import Router from './Router'
import { browserHistory } from './store/history'
import store from './store/index'
import './style.css'

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter store={store} history={browserHistory}>
      <AnotherStore>
        <Router />
      </AnotherStore>
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
)
