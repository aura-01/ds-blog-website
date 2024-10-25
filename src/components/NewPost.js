import React, { useState } from 'react';
import './NewPost.css';
import { useNavigate } from 'react-router-dom';

function NewPost({ addBlogPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Basic validation
    if (!title || !content) {
      setErrorMessage('Title and content are required.');
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      summary: content.substring(0, 100) + '...',
      image // Add image to the post object if necessary
    };

    addBlogPost(newPost);
    setSuccessMessage('Blog post submitted successfully!');
    
    // Clear the form
    setTitle('');
    setContent('');
    setImage(null);
    
    // Navigate after a brief delay to see the success message
    setTimeout(() => {
      navigate('/blogs');
    }, 1000);
  };

  return (
    <div className="new-post-container">
      <h2 className="new-post-title">Write a New Blog Post</h2>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
}

export default NewPost;
