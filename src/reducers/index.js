import { combineReducers } from 'redux';
import API from './API';
import topic from './topic'

const rootReducer = combineReducers({
  API,
  topic,
});

export default rootReducer;
