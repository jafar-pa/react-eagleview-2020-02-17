import { PostActions } from '../constants';

export const beginGetPosts = () => {
  return {
    type: PostActions.GET_POSTS_BEGIN
  };
};

export const endGetPosts = posts => {
  return {
    type: PostActions.GET_POSTS_END,
    payload: posts
  }
}

export const createPost = post => {
  return {
    type: PostActions.CREATE_POST,
    payload: post
  };
};
