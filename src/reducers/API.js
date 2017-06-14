import Constants from '../constants'
import Types from '../constants/actionTypes';

const { initialState } = Constants;

export default (state = initialState.API, action) => {
  switch (action.type) {
    case Types.SEARCH_API_START:
      return {
        ...state,
        status: "PENDING"
      }
    default:
      return state;
  }
};
