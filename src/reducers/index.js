import { combineReducers } from 'redux';
import OptionReducer from './optionReducer';

export default combineReducers({
  options : OptionReducer,
});