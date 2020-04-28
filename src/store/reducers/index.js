import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import pageSettingsReducer from './pageSettingsReducer';
import userReducer from './userReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  user: userReducer,
  errors: errorsReducer,
  articles: articlesReducer,
  pageSettings: pageSettingsReducer,
});