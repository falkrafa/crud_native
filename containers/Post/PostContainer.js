import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPosts } from '../../Reducer/postReducer';

const PostContainer = () => {
  const user = useSelector((state)=> state.auth.user)
  const token = useSelector((state)=> state.auth.token)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    content: '',
  });
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
        dispatch(setAllPosts(data));
        setFormData({
          ...formData,
          content: '',
        });
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSub = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8080/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
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

export default PostContainer;
