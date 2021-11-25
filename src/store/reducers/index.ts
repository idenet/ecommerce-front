import { combineReducers } from 'redux'
import testReducer from './test.reduce';
import { connectRouter } from 'connected-react-router'


const createRootReducer = (history:History) => combineReducers({
  test: testReducer,
  router: connectRouter(history)
})

export default createRootReducer