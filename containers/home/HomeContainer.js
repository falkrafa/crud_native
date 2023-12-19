import {React, useEffect, useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Header from '../header/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostContainer from '../Post/PostContainer';
import PostAreaContainer from '../PostArea/PostAreaContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setUser } from '../../Reducer/authReducer';

const HomeContainer = ({ navigation }) => {
  const user = useSelector((state)=> state.auth.user)
  const loggedIn = useSelector((state)=> state.auth.loggedIn)
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      dispatch(setLoggedIn(false));
      dispatch(setUser(null));
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

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
          <PostContainer/>
          <PostAreaContainer/>
        </>
      ) : (
        <Header navigation={navigation}/>
      )}
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
  head: {
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#192734',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
    height: 100,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    padding: 20,
  },
  button: {
    backgroundColor: '#1da1f2',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    objectFit: 'cover',
  },
  btn:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    justifyContent: 'space-between',
  }
});


export default HomeContainer