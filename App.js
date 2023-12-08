import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeContainer from './containers/home/HomeContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterContainer from './containers/Register/RegisterContainer';
import LoginContainer from './containers/login/LoginContainer';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedLoggedIn = await AsyncStorage.getItem('loggedIn');
        const storedUser = await AsyncStorage.getItem('user');

        if (storedLoggedIn) {
          setLoggedIn(true);
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    retrieveData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#141d26',
          },
        }}>
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Register" component={RegisterContainer} />
        <Stack.Screen name="Login" component={LoginContainer} initialParams={{ setLoggedIn, setUser }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
