import {React, useEffect} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../header/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeContainer = ({ navigation, route }) => {
  const { loggedIn, user, setLoggedIn, setUser } = route.params || {};

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

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <View style={styles.head}>
          <Text style={styles.headText}>Welcome {user.name}</Text>
          <TouchableOpacity style={styles.button} onPress={logout}><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>
        </View>
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
    backgroundColor: '#0f141a',
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