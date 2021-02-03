import { combineReducers } from 'redux';

import userReducer from './userReducer';
import repositoryReducer from './repositoryReducer';

const rootReducer = combineReducers({
  user: userReducer,
  repository: repositoryReducer
});

export default rootReducer;