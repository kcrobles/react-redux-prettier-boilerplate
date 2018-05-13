import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import defaultReducer from '../reducers/defaultReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(
    combineReducers({
      defaultReducer
    }),
    // applyMiddleware(thunk)
    composeEnhancers(applyMiddleware(thunk))
  );
