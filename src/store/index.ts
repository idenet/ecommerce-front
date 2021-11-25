import { applyMiddleware, createStore } from "redux";
import createRootReducer from './reducers/index';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory  } from "history";


export const history = createBrowserHistory()

const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware(history)))

export default store


