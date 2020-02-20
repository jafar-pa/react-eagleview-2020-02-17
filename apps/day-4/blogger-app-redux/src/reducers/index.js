import { combineReducers } from 'redux';

import categoriesReducer from './categories';
import postsReducer from './posts';

const appReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer
});

export default appReducer;
