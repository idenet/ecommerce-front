import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers/index';
import { createRouterMiddleware, ReduxRouterState} from '@lagunovsky/redux-react-router'
import { browserHistory } from './history';

export type State = { router: ReduxRouterState }

const store = createStore(rootReducer, applyMiddleware(createRouterMiddleware(browserHistory)))

export default store


