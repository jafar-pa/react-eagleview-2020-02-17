import React, { Component } from 'react';

import Categories from './Categories';
import PostDetail from './PostDetail';

import { posts, categoryAll } from '../data/store';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      posts: posts,
      selectedCategory: categoryAll
    };

    // this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  // handleCategorySelect(category) {
  //   this.setState({ selectedCategory: category });
  // }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  }

  render() {
    console.log('render() invoked..');

    const posts = this.state.posts;
    const selectedCategory = this.state.selectedCategory;

    const filteredPosts = selectedCategory.id === 'all'
      ? posts
      : posts.filter(p => p.category === selectedCategory.id);

    return <div className="row">
      <div className="col-3">
        <Categories onCategorySelect={this.handleCategorySelect} />
      </div>

      <div className="col">
        <h3>Posts</h3>
        <div>Selected Category: {selectedCategory.name}</div>
        {filteredPosts.length > 0
          ? filteredPosts.map(p => <PostDetail key={p.id} post={p} />)
          : <div className="alert alert-info">No posts for the selected category.</div>
        }
      </div>
    </div>;
  }

}

export default Posts;
