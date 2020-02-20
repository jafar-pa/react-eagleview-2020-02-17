import { CategoryActions } from '../constants';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CategoryActions.GET_CATEGORIES_END:
      return [...action.payload];

    default:
      return state;
  }
};

export default categoriesReducer;
