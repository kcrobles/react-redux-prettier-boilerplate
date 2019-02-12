import { GET_ALL_NAVIANS } from '../actions/default';

const defaultState = [];

const navianosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_NAVIANS:
      const navians = action.payload.data;
      return { ...state, navians: [...navians] };
    default:
      return state;
  }
};

export default navianosReducer;