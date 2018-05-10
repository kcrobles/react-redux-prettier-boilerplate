import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
// import { createStore, compose, applyMiddleware } from 'react-redux';
import thunk from 'redux-thunk';
import defaultReducer from '../reducers/defaultReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(
    combineReducers({
      default: defaultReducer
    }),
    // applyMiddleware(thunk)
    composeEnhancers(applyMiddleware(thunk))
  );
