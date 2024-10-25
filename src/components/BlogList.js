// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

function BlogList({ posts }) {
  return (
    <div className="container">
      <h2>All Blog Posts</h2>
      <div className="all-posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} />
            <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
            <p>{post.description}</p>
            <p className="summary">{post.summary}</p> {/* Display the summary */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
