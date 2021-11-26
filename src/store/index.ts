import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from './reducers'
import {
  createRouterMiddleware,
  ReduxRouterState,
} from '@lagunovsky/redux-react-router'
import { browserHistory } from './history'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

export type State = { router: ReduxRouterState }

const routerMiddleware = createRouterMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(routerMiddleware, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
