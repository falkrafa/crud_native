import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import PostContainer from '../Post/PostContainer';
import { useSelector } from 'react-redux';
import { styles } from './PostAreaStyle';

const PostArea = () => {
  const allPosts = useSelector((state) => state.post.allPosts);
  const { fetchPosts } = PostContainer();

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

export default PostArea;
