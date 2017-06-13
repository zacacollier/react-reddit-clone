import { combineReducers } from 'redux';

const initialState = {
  API: {
    status: 'idle',
  },
};

const API = (state = initialState.API, action) => {
  switch(action.type) {
    default:
    return state
  }
};

const rootReducer = combineReducers({
  API,
});

export default rootReducer;
