import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategoryName } from '../util';
import postService from '../services/PostService';
import { deletePost } from '../actions/posts';

class PostDetail extends Component {
  state = {
    post: null
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const post = await postService.get(id);
      this.setState({ post });
    } catch (error) {
      console.log('Get post failed.');
      console.log('Error:', error);
    }
  }

  handleDeleteClick = async () => {
    if (window.confirm('Are you sure?')) {
      const id = this.props.match.params.id;
      await this.props.deletePost(id);
      this.props.history.push('/posts');
    }
  }

  render() {
    const post = this.state.post;
    const { categories } = this.props;

    if (!post) {
      return <div>Loading post. Please wait...</div>;
    }

    return <div className="card bg-light mb-3">
      <div className="card-header">
        <h5>
          {post.title}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          {post.body}
        </p>
        <p className="card-text">Author: <em>
          {post.author}
        </em></p>
        <p className="card-text">Category: <em>
          {getCategoryName(categories, post.category)}
        </em></p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-sm btn-outline-primary mr-1"
          type="button"
          onClick={() => this.props.history.push(`/posts/${post.id}/edit`)}
        >Edit</button>
        <button
          className="btn btn-sm btn-outline-danger mr-1"
          type="button"
          onClick={this.handleDeleteClick}
        >Delete</button>
        <button
          className="btn btn-sm btn-outline-info"
          type="button"
          onClick={() => this.props.history.goBack()}
        >Back</button>
      </div>
    </div>;
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
