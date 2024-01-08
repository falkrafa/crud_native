import React, { useState, useEffect } from 'react';
import PostContainer from '../Post/PostContainer';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profileProcessor } from '../../Processor/ProfileProcessor';
import { delPost, updPost } from '../../Processor/PostProcessor';

const ProfileContainer = () => {

  const [userPost, setUserPost] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { fetchPosts } = PostContainer();
  const [formData, setFormData] = useState({
    content: '',
  })

  const getUserPost = async () => {
    const storedValue = await AsyncStorage.getItem('token');
    const token = storedValue ? JSON.parse(storedValue) : null;
    await profileProcessor(setUserPost, token, user.id);
  };

  const deletePost = async (id) => {
    const storedValue = await AsyncStorage.getItem('token');
    const token = storedValue ? JSON.parse(storedValue) : null;
    await delPost(id, token);
    await getUserPost();
    await fetchPosts();
  };

  const updatePost = async (id) => {
    const storedValue = await AsyncStorage.getItem('token');
    const token = storedValue ? JSON.parse(storedValue) : null;
    await updPost(id, formData, token);
    await getUserPost();
    await fetchPosts();
    setModalVisible(false);
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
    getUserPost,
  };
};

export default ProfileContainer;