import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Overview of Redux',
    body: 'Provides an introduction to Redux',
    author: 'Hari',
    category: 'redux'
  },
  {
    id: 2,
    title: 'An introduction to React',
    body: 'A blog post that provides an overview of React',
    author: 'Ram',
    category: 'react'
  }
];

// const post = {
//   id: 1,
//   title: 'Overview of Redux',
//   body: 'Provides an introduction to Redux',
//   author: 'Hari',
//   category: 'redux'
// };

// const post2 = {
//   id: 2,
//   title: 'An introduction to React',
//   body: 'A blog post that provides an overview of React',
//   author: 'Ram',
//   category: 'react'
// };

// const renderPosts = () => {
//   const elements = [];

//   for (let i = 0; i < posts.length; i++) {
//     elements.push(<div>
//       <div>
//         Title: {posts[i].title}
//       </div>
//       <div>
//         Body: {posts[i].body}
//       </div>
//       <div>
//         Author: {posts[i].author}
//       </div>
//       <div>
//         Category: {posts[i].category}
//       </div>
//       <hr />
//     </div>);
//   }

//   return elements;
// }

const renderPosts = () => {
  const elements = posts.map(p => <div key={p.id}>
    <hr />
    <div>
      Title: {p.title}
    </div>
    <div>
      Body: {p.body}
    </div>
    <div>
      Author: {p.author}
    </div>
    <div>
      Category: {p.category}
    </div>
  </div>);

  return elements;
}

const Posts = () => {
  return <div>
    <h3>Posts</h3>
    {renderPosts()}
  </div>;
};

export default Posts;
