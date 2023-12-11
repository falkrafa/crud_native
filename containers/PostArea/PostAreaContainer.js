import {React, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Post from '../Post/Post'

const PostAreaContainer = ({ user, allPosts, setAllPosts }) => {

  const { fetchPosts} = Post({ user, setAllPosts })

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.HeadText}>All posts</Text>
      {allPosts.length > 0 ? (
        allPosts.map((post) => (
          <View key={post.id} style={styles.Posts}>
            <Text>{post.User.name}</Text>
            <Text>{post.content}</Text>
            <Text>{post.likes}</Text>
          </View>
        ))
      ) : (
        <Text>No posts</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 20,
  },
  HeadText: {
    fontSize: 25,
    color: '#1da1f2',
    fontWeight: 'bold',
  },
  Posts: {
    width: '100%',
    height: 'fit-content',
    backgroundColor: '#192734',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    padding: 20,
  },
});

export default PostAreaContainer;
