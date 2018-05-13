import { DEFAULT_ACTION } from '../actions/default';

const defaultState = [];

const defaultReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      const message = action.payload.message
        ? action.payload.message
        : 'ACTION ERROR';
      console.log(message);
      return { ...state, ...action.payload };
    case 'OTHER_ACTION':
      return state;
    default:
      return state;
  }
};

export default defaultReducer;
