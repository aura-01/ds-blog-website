// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import NewPost from './components/NewPost';
import blogData from './data/blogData';
import './App.css';

function App() {
  const [posts, setPosts] = useState(blogData);

  // Function to add a new blog post
  const addBlogPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<BlogList posts={posts} />} />
            <Route path="/post/:id" element={<BlogPost posts={posts} />} />
            {/* Pass the addBlogPost function to NewPost */}
            <Route path="/new-post" element={<NewPost addBlogPost={addBlogPost} />} />
          </Routes>
        </div>
        <div className="footer"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
