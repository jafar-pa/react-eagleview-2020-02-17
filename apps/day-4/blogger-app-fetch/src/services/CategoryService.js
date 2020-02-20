import { categories } from '../data/store';

class CategoryService {
  getAll() {
    return categories;
  }

  get(id) {
    const category = categories.find(c => c.id === id);
    return category;
  }
}

export default new CategoryService();
