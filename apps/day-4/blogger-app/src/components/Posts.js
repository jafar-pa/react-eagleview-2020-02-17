import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Categories from './Categories';

import { categoryAll } from '../constants';
import postService from '../services/PostService';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      posts: [],
      selectedCategory: categoryAll
    };

    // this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  // handleCategorySelect(category) {
  //   this.setState({ selectedCategory: category });
  // }

  componentDidMount() {
    const posts = postService.getAll();
    this.setState({ posts });
  }

  handlePostDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      postService.delete(id);

      // Option #1
      // const posts = postService.getAll();
      // this.setState({ posts });

      // Option #2
      this.setState((prevState) => {
        const updatedPosts = prevState.posts.filter(p => p.id !== id);
        return {
          posts: updatedPosts
        };
      });
    }
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  }

  renderPosts(posts) {
    return <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(p =>
          <tr key={p.id}>
            <td>{p.title}</td>
            <td>{p.author}</td>
            <td>{p.category}</td>
            <td>
              <div className="btn-group btn-group-sm">
                <Link className="btn btn-info" to={`/posts/${p.id}`} >View</Link>
                <Link className="btn btn-warning" to={`/posts/${p.id}/edit`}>Edit</Link>
                <button className="btn btn-danger" onClick={() => this.handlePostDelete(p.id)}>Delete</button>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>;
  }

  render() {
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
          ? this.renderPosts(filteredPosts)
          : <div className="alert alert-info">No posts for the selected category.</div>
        }
      </div>
    </div>;
  }

}

export default Posts;
