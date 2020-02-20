import { PostActions } from '../constants';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case PostActions.GET_POSTS_END:
      return [...action.payload];

    case PostActions.CREATE_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default postsReducer;
