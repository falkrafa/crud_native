import {React, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Post from '../Post/Post'

const PostAreaContainer = ({ user, allPosts, setAllPosts }) => {

  const { fetchPosts} = Post({ user, setAllPosts })

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <><Text style={styles.HeadText}>All posts</Text><ScrollView contentContainerStyle={styles.container}>
      {allPosts.length > 0 ? (
        allPosts.map((post) => (
          <View key={post.id} style={styles.Posts}>
            <Text style={styles.PostName}>{post.User.name}</Text>
            <Text style={styles.PostContent}>{post.content}</Text>
            <Text style={styles.PostContent}>{post.likes} likes</Text>
          </View>
        ))
      ) : (
        <Text style={styles.erro}>No posts yet</Text>
      )}
    </ScrollView></>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    display: 'flex',
    alignItems: 'center',
    height: 'fit-content',
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
  },
  PostContent: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
});

export default PostAreaContainer;
