// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ posts }) {
  const previewPosts = posts.slice(0, 2); // Show first 2 posts on homepage

  return (
    <div className="container">
      <h1>Welcome to DS Blog</h1>
      <p>Explore recent posts below.</p>
      <div className="posts-preview">
        {previewPosts.map(post => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} />
            <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
      <Link to="/blogs" className="view-all-btn">View All Posts</Link>
    </div>
  );
}

export default Home;
