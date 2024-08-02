import { combineReducers } from 'redux';
import sneakerReducer from './sneakerReducer'; 

const rootReducer = combineReducers({
  sneakers: sneakerReducer,
});

export default rootReducer;
