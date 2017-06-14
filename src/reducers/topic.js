import Constants from '../constants';

const {
  actionTypes,
  initialState,
 } = Constants;

export default (state = initialState.topic, action) => {
  switch(action.type) {
    case actionTypes.SELECT_TOPIC:
      return {
        ...state,
        topic: action.topic
      }
    default:
      return state;
  }
};
