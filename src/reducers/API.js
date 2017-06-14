import Constants from '../constants'

const { initialState, actionTypes } = Constants;

export default (state = initialState.API, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_API_START:
      return {
        ...state,
        status: "PENDING"
      }
    default:
      return state;
  }
};
