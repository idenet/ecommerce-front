import { combineReducers } from 'redux'
import testReducer from './test.reduce';
import { createRouterReducer, ReduxRouterState } from '@lagunovsky/redux-react-router'
import { browserHistory } from '../history';

export interface AppState {
  router: ReduxRouterState
}

const createRootReducer = combineReducers({
  test: testReducer,
  router: createRouterReducer(browserHistory)
})

export default createRootReducer