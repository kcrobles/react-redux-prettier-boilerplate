import { DEFAULT_ACTION } from '../actions/default';

const defaultState = [];

const defaultReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case DEFAULT_ACTION:
    default:
      return { ...state, ...action.payload };
  }
};

export default defaultReducer;
