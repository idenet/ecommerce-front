import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { API } from './config';
import Router from './Router';
import {Provider} from 'react-redux'
import store from './store/index';
import { ReduxRouter } from '@lagunovsky/redux-react-router'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter history={ history }>
      <Router />
      </ReduxRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

