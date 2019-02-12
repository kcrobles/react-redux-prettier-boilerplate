export const DEFAULT_ACTION = 'DEFAULT_ACTION';
export const GET_ALL_NAVIANS = 'GET_ALL_NAVIANS';

const URL = 'http://localhost:4040/';

export const defaultAction = () => ({
  type: DEFAULT_ACTION,
  payload: {
    message: 'Hello from console'
  }
});

export const getAll = (navians = []) => ({
  type: GET_ALL_NAVIANS,
  payload: {
    data: [...navians]
  }
});

export const getAllAsync = () => dispatch => fetch(URL, {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json'})  
  }).then(response => {
    return response.json().then(res => {
      dispatch(getAll(res.data));
    });
  });