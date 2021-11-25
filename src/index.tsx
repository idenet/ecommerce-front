import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { API } from './config';
import Router from './Router';
import {Provider} from 'react-redux'
import store from './store/index';
import { history } from './store/index'
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <Router />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

