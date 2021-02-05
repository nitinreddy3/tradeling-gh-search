import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import repositoryReducer from './repository/repositoryReducer';

const rootReducer = combineReducers({
  user: userReducer,
  repository: repositoryReducer
});

export default rootReducer;