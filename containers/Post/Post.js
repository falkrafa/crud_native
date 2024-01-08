import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import PostContainer from './PostContainer'
import { styles } from './PostStyle'

const Post = () => {

  const { handleChange, handleSub, formData } = PostContainer()

  return (
    <View style={styles.container}> 
      <Text style={styles.Text}>Make a Post</Text>
        <TextInput style={styles.TextInput} placeholder="Title" multiline={true} numberOfLines={4} placeholderTextColor = '#aab8c2' value={formData.content} onChangeText={(value) => handleChange('content', value)}/>
        <TouchableOpacity style={styles.button} onPress={() => handleSub()}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
    </View>
  )
}

export default Post;