import { PostActionTypes } from '../constants';
import postService from '../services/PostService';

export const getPosts = () => {
  return async dispatch => {
    try {
      const posts = await postService.getAll();
      dispatch(setPosts(posts));
    } catch (e) {
      console.log('Get posts failed.');
      console.log('Error:', e);
    }
  };
};

const setPosts = posts => {
  return {
    type: PostActionTypes.SET_POSTS,
    payload: posts
  };
};

export const createPost = post => {
  return async dispatch => {
    try {
      const newPost = await postService.create(post);
      dispatch(setCreatedPost(newPost));
    } catch (e) {
      console.log('Create post failed.');
      console.log('Error:', e);
    }
  };
};

const setCreatedPost = post => {
  return {
    type: PostActionTypes.SET_CREATED_POST,
    payload: post
  };
};

export const deletePost = id => {
  return async dispatch => {
    try {
      await postService.delete(id);
      dispatch(removeDeletedPost(id))
    } catch (e) {
      console.log('Delete post failed.');
      console.log('Error:', e);
    }
  };
};

const removeDeletedPost = id => {
  return {
    type: PostActionTypes.REMOVE_DELETED_POST,
    payload: parseInt(id)
  };
};