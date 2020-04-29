import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import pageSettingsReducer from './pageSettingsReducer';
import userReducer from './userReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  userParametrs: userReducer,
  errors: errorsReducer,
  articlesParametrs: articlesReducer,
  pageSettings: pageSettingsReducer,
});