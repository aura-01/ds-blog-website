// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

function BlogPost({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{post.summary}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Render HTML content */}
    </div>
  );
}

export default BlogPost;
