import React, { useState } from 'react';

const Post = ({ user, setAllPosts}) => {

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8080/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAllPosts(data);
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [formData, setFormData] = useState({
    content: '',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSub = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://10.0.2.2:8080/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: formData.content,
          likes: 0,
          userId: user.id,
        }),
      });

      if (response.ok) {
        console.log('Post created successfully');
        fetchPosts();
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    handleChange,
    handleSub,
    formData,
    fetchPosts,
  };
};

export default Post;
