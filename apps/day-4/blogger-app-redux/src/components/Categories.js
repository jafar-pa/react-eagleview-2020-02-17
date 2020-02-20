import React from 'react';
import { connect } from 'react-redux';

import { categoryAll } from '../constants';

const Categories = props => {
  const categoriesWithAll = [categoryAll, ...props.categories];

  return <div>
    <h3>Categories</h3>

    <div className="list-group">
      {categoriesWithAll.map(c => <button onClick={() => props.onCategorySelect(c)}
        key={c.id} type="button" className="list-group-item list-group-item-action">
        {c.name}
      </button>)}
    </div>
  </div>;
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, null)(Categories);
