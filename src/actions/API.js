import Constants from '../constants';

const { actionTypes, helpers } = Constants;

export const subRedditSearchStart = (dispatch) => ({
  type: actionTypes.SEARCH_API_START,
});
