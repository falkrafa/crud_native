import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';

const PostAreaContainer = () => {
  const allPosts = useSelector((state) => state.post.allPosts);
  const { fetchPosts } = Post();

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPost = ({ item }) => (
    <View key={item.id} style={styles.Posts}>
      <View style={styles.Posthead}>
        <Image source={{ uri: `http://10.0.2.2:8080/${item.User.profilePicture}` }} style={styles.image} />
        <Text style={styles.PostName}>{item.User.name}</Text>
      </View>
      <Text style={styles.PostContent}>{item.content}</Text>
      <Text style={styles.PostContent}>{item.likes} likes</Text>
    </View>
  );

  return (
    <>
      <Text style={styles.HeadText}>All posts</Text>
      {allPosts.length > 0 ? (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={{ width: '100%' }}
            data={allPosts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPost}
          />
        </SafeAreaView>
      ):<Text style={styles.erro}>No posts yet</Text>}
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },  
  HeadText: {
    fontSize: 25,
    color: '#1da1f2',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
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
  erro:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  PostName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1da1f2',
    marginLeft: 10,
  },
  PostContent: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  image:{
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  Posthead:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default PostAreaContainer;
