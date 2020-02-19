import React, { Component } from 'react';

import { categoryAll } from '../constants';
import categoryService from '../services/CategoryService';

class Categories extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    const categories = categoryService.getAll();
    this.setState({ categories });
  }

  render() {
    const categoriesWithAll = [categoryAll, ...this.state.categories];

    return <div>
      <h3>Categories</h3>

      <div className="list-group">
        {categoriesWithAll.map(c => <button onClick={() => this.props.onCategorySelect(c)}
          key={c.id} type="button" className="list-group-item list-group-item-action">
          {c.name}
        </button>)}
      </div>
    </div>;
  }
}

export default Categories;
