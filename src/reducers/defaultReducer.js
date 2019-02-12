import { DEFAULT_ACTION, GET_ALL_NAVIANS } from '../actions/default';

const defaultState = [];

const defaultReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      const message = action.payload.message;
      console.log(message);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default defaultReducer;
