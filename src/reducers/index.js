import { combineReducers } from 'redux';
import FlagReducer from './flagReducer';

export default combineReducers({
  flag: FlagReducer  
});