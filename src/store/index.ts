import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import createRootReducer from "./reducers";
import { createRouterMiddleware, ReduxRouterState } from '@lagunovsky/redux-react-router'
import { browserHistory } from "./history";

export type State = { router: ReduxRouterState }

const routerMiddleware = createRouterMiddleware(browserHistory)


const store = createStore(createRootReducer, composeWithDevTools(applyMiddleware(routerMiddleware)))

export default store


