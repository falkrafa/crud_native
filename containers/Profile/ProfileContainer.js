import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';

const ProfileContainer = () => {
  const [userPost, setUserPost] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { fetchPosts } = Post();
  const [formData, setFormData] = useState({
    content: '',
  });

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
      const newPosts = userPost.filter((post) => post.id !== id);
      setUserPost(newPosts);
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

  const renderPost = ({ item }) => (
    <View key={item.id} style={styles.Posts}>
                <Text style={styles.PostContent}>{item.content}</Text>
                <Text style={styles.PostContent}>{item.likes} likes</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => openUpdateModal(item.id)}
                  >
                    <Text style={styles.buttonText}>Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => deletePost(item.id)}
                  >
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
  );
  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.userContainer}>
          <Text style={styles.title}>User Profile</Text>
          <View style={styles.userInfos}>
            <Text style={styles.infoText}>Name: {user.name}</Text>
            <Text style={styles.infoText}>Email: {user.email}</Text>
          </View>
          <Image source={{ uri: `http://10.0.2.2:8080/${user.profilePicture}` }} style={styles.image} />
        </View>
      ) : null}
      {userPost.length > 0 ? (
        <>
          <Text style={styles.title}>User Posts</Text>
          <SafeAreaView style={styles.postContainer}>
            <FlatList style={{ width: '100%' }}
              data={userPost}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderPost}
              />
          </SafeAreaView>
        </>
      ) : (
        <>
          <Text style={styles.title}>User Posts</Text>
          <Text style={styles.erro}>No posts yet</Text>
        </>
      )}
      {modalVisible ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Update Post</Text>
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={4}
                value={formData.content}
                onChangeText={(text) => setFormData({ content: text })}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => updatePost(selectedPostId)}
              >
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#141d26',
    display: 'flex',
    alignItems: 'center',
  },
  userInfos:{
    display: 'flex',
    marginTop: 10,
    alignItems: 'center',
  },
  userContainer:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
  },
  infoText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1da1f2',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1da1f2',
    marginTop: 10,
  },
  erro:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  postContainer:{
    width: 350,
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  Posts: {
    width: '100%',
    height: 'fit-content',
    backgroundColor: '#192734',
    borderWidth: 1,
    borderColor: '#38444d',
    borderRadius: 8,
    padding: 20,
    wordWrap: 'break-word',
    marginBottom: 10,
  },
  PostContent: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#1da1f2',
    borderRadius: 8,
    padding: 5,
    marginTop: 10,
    width: 70,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#192734',
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1da1f2',
  },
  input: {
    height: 100,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'white',
  },
  buttonContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '55%',
  }
})

export default ProfileContainer