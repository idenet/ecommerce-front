import { combineReducers } from 'redux'
import {
  createRouterReducer,
  ReduxRouterState,
} from '@lagunovsky/redux-react-router'
import { browserHistory } from '../history'
import authReducer, { AuthState } from './auth.reducer'

export interface AppState {
  router: ReduxRouterState
  auth: AuthState
}

const createRootReducer = combineReducers({
  auth: authReducer,
  router: createRouterReducer(browserHistory),
})

export default createRootReducer
