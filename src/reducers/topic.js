import Constants from '../constants';

const {
  actionTypes,
  initialState,
} = Constants;

  /* SELECT_TOPIC:
   * sets the whole 'data' in the Store.
   * (we can map specific properties 'permalink' to props when we need them)
   */
export default (state = initialState.topic, action) => {
  switch(action.type) {
    case actionTypes.SELECT_TOPIC:
      return {
        ...state,
        topic: action.topic.data,
      }
    default:
      return state;
  }
};
