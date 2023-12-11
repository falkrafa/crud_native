import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Post from './Post'

const PostContainer = ({ user, setAllPosts }) => {

  const { handleChange, handleSub, formData } = Post({ user, setAllPosts })

  return (
    <View style={styles.container}> 
      <Text style={styles.Text}>Make a Post</Text>
        <TextInput style={styles.TextInput} placeholder="Title" multiline={true} numberOfLines={4} placeholderTextColor = '#aab8c2' value={formData.content} onChangeText={(value) => handleChange('content', value)}/>
        <TouchableOpacity style={styles.button} onPress={handleSub}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#192734',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
        padding: 20,
    },
    Text: {
        color: '#1da1f2',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    TextInput:{
        height: 60,
        width: 250,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#192734',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#38444d',
        color: '#fff',
    },
    button: {
        backgroundColor: '#1da1f2',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
        width: 250,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },

    })

export default PostContainer