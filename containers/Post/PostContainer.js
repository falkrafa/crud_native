import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPosts } from '../../Reducer/postReducer';
import { getPost, makePost } from '../../Processor/PostProcessor';

const PostContainer = () => {
  const user = useSelector((state)=> state.auth.user)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    content: '',
  });
  const fetchPosts = async () => {
    try {
      await getPost(dispatch, setAllPosts, setFormData, formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSub = async () => {
    try {
      await makePost(formData, user);
      fetchPosts();
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
