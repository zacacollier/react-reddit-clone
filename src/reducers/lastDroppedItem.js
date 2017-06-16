import Constants from '../constants';

const {
  actionTypes,
  initialState,
} = Constants;

export default (state = initialState.lastDroppedItem, action) => {
  switch (action.type) {
    case actionTypes.SET_LAST_DROPPED_ITEM:
      return {
        ...state,
        lastDroppedItem: action.topic,
      };
    default:
      return state;
  }
}
