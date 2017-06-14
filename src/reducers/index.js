import { combineReducers } from 'redux';
import API from './API';
import overlay from './overlay'
import topic from './topic'

const rootReducer = combineReducers({
  API,
  overlay,
  topic,
});

export default rootReducer;
