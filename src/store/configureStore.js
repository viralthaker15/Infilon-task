// ========================== IMPORT ===========================
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import tableReducer from '../reducers/tableReducer';

//==================== CODE ====================================

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //for redux dev tools


const middleware = [];
middleware.push(thunk);
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

//store creation
const store = createStore(
  combineReducers({ table: tableReducer }),
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
//The inner function receives the store methods dispatch and getState as parameters.