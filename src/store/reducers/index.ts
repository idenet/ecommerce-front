import { combineReducers } from 'redux'
import testReducer from './test.reduce';
import { createRouterReducer } from '@lagunovsky/redux-react-router'
import { browserHistory } from './../history';

const RootReducer = combineReducers({
  test: testReducer,
  router: createRouterReducer(browserHistory)
})

export default RootReducer