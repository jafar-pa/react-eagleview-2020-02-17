import { CategoryActions } from '../constants';
import categoryService from '../services/CategoryService';

export const beginGetCategories = () => {
  return dispatch => {
    return categoryService.getAll()
      .then(categories => {
        dispatch(endGetCategories(categories));
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
}

export const endGetCategories = categories => {
  return {
    type: CategoryActions.GET_CATEGORIES_END,
    payload: categories
  };
};
