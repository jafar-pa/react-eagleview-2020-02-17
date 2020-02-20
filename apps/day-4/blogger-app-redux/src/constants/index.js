export const categoryAll = {
  id: 'all',
  name: 'All'
};

export const apiBaseUrl = 'http://localhost:3001';

export class CategoryActions {
  static GET_CATEGORIES_BEGIN = 'GET_CATEGORIES_BEGIN'
  static GET_CATEGORIES_END = 'GET_CATEGORIES_END';
}

export class PostActions {
  static GET_POSTS_BEGIN = 'GET_POSTS_BEGIN';
  static GET_POSTS_END = 'GET_POSTS_END';
  static CREATE_POST = 'CREATE_POST';
}