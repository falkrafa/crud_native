import React, {useEffect} from 'react';
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
import ProfileContainer from './ProfileContainer';
import { styles } from './ProfileStyle';

const Profile = () => {

  const { user, userPost, modalVisible, setModalVisible, selectedPostId, formData, setFormData, deletePost, updatePost, openUpdateModal, getUserPost } = ProfileContainer();
  useEffect(() => {
    getUserPost();
  }, []);
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

export default Profile