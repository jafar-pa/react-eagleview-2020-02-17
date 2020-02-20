import { posts } from '../data/store';

class PostService {
  getAll() {
    return posts;
  }

  get(id) {
    const post = posts.find(p => p.id === id);
    return post;
  }

  create(newPost) {
    posts.push(newPost);
  }

  update(post) {
    // code to update post
  }

  delete(id) {
    const index = posts.findIndex(p => p.id === id);

    if (index >= 0) {
      posts.splice(index, 1);
    }
  }
}

const serviceInstance = new PostService();
export default serviceInstance;