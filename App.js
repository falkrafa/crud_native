import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeContainer from './containers/home/HomeContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterContainer from './containers/Register/RegisterContainer';
import LoginContainer from './containers/login/LoginContainer';
import ProfileContainer from './containers/Profile/ProfileContainer';
import { Provider } from 'react-redux';
import store from './Reducer/store';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setUser } from './Reducer/authReducer';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {
              backgroundColor: '#141d26',
            },
          }}>
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="Register" component={RegisterContainer} />
          <Stack.Screen name="Login" component={LoginContainer}/>
          <Stack.Screen name="Profile" component={ProfileContainer}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
