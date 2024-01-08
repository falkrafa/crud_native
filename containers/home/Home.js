import {React, useEffect, useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Header from '../header/Header'
import Post from '../Post/Post';
import PostArea from '../PostArea/PostArea';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './HomeStyles';
import HomeContainer from './HomeContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({ navigation }) => {

  const { logout } = HomeContainer({navigation})
  const user = useSelector((state)=> state.auth.user)
  const loggedIn = useSelector((state)=> state.auth.loggedIn)
  const Profile = () => {
    navigation.navigate('Profile');
  }
  return (
    <View style={styles.container}>
      {loggedIn ? (
        <>
          <View style={styles.head}>
            <TouchableOpacity onPress={Profile} style={styles.btn}>
              <Image source={{ uri: `http://10.0.2.2:8080/${user.profilePicture}` }} style={styles.image} />
              <Text style={styles.headText}>{user.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={logout}><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>
          </View>
          <Post/>
          <PostArea/>
        </>
      ) : (
        <Header navigation={navigation}/>
      )}
    </View>
  );
};

export default Home