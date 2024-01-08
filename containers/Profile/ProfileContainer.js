import React, { useState, useEffect } from 'react';
import PostContainer from '../Post/PostContainer';
import { useSelector } from 'react-redux';

const ProfileContainer = () => {

  const [userPost, setUserPost] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { fetchPosts } = PostContainer();
  const [formData, setFormData] = useState({
    content: '',
  })

  const getUserPost = async () => {
    const response = await fetch(`http://10.0.2.2:8080/posts/user/${user.id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUserPost(data);
  };
  useEffect(() => {
    getUserPost();
  }, []);

  const deletePost = async (id) => {
    const response = await fetch(`http://10.0.2.2:8080/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data) {
      getUserPost();
      fetchPosts();
    }
  };

  const updatePost = async (id) => {
    const response = await fetch(`http://10.0.2.2:8080/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: formData.content,
      }),
    });
    const data = await response.json();
    if (data) {
      getUserPost();
      fetchPosts();
      setModalVisible(false);
    }
  };

  const openUpdateModal = (id) => {
    const selectedPost = userPost.find((post) => post.id === id);
    setFormData({ content: selectedPost.content });
    setSelectedPostId(id);
    setModalVisible(true);
  };

  return {
    userPost,
    user,
    modalVisible,
    formData,
    selectedPostId,
    deletePost,
    updatePost,
    openUpdateModal,
    setModalVisible,
    setFormData,
  };
};

export default ProfileContainer;