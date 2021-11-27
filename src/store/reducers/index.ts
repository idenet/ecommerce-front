import {
  createRouterReducer,
  ReduxRouterState,
} from '@lagunovsky/redux-react-router'
import { combineReducers } from 'redux'
import { browserHistory } from '../history'
import authReducer, { AuthState } from './auth.reducer'
import categoryReducer, { CategoryState } from './category.reducer'

export interface AppState {
  router: ReduxRouterState
  auth: AuthState
  category: CategoryState
}

const createRootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  router: createRouterReducer(browserHistory),
})

export default createRootReducer
