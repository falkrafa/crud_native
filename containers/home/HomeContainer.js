import {React, useEffect, useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../header/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostContainer from '../Post/PostContainer';
import PostAreaContainer from '../PostArea/PostAreaContainer';

const HomeContainer = ({ navigation, route }) => {
  const { loggedIn, user, setLoggedIn, setUser } = route.params || {};
  const [allPosts, setAllPosts] = useState([]);
  const userId = user?.id;
  useEffect(() => {
    navigation.setParams({ setLoggedIn, setUser });
  }, [navigation, setLoggedIn, setUser]);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('loggedIn');
      await AsyncStorage.removeItem('user');
      setLoggedIn(false);
      setUser(null);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const Profile = () => {
    navigation.navigate('Profile', { setAllPosts: setAllPosts });
  }

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <>
          <View style={styles.head}>
            <TouchableOpacity onPress={Profile}>
              <Text style={styles.headText}>Welcome {user.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={logout}><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>
          </View>
          <PostContainer user={user} setAllPosts={setAllPosts}/>
          <PostAreaContainer user={user} allPosts = {allPosts} setAllPosts={setAllPosts}/>
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
  }
});


export default HomeContainer