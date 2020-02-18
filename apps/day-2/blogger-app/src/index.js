import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App></App>,
  document.querySelector('#root')
);

function App() {
  return <div>
    <Header />
  </div>;
}

function Header() {
  return <div>
    <h1>Blogger App</h1>
    <p>A simple blogging app in React!</p>
  </div>;
} 