import Constants from '../constants'

const { API } = Constants.initialState;

export default (state = API, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
