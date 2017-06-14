import Constants from '../constants';

const {
  actionTypes,
  // helpers 
} = Constants;

export const selectTopic = (topic) => ({
  type: actionTypes.SELECT_TOPIC,
  topic
})
