import React, { useEffect, useState } from 'react';
import Home from './containers/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './containers/Register/Register';
import Login from './containers/login/Login';
import Profile from './containers/Profile/Profile';
import { Provider } from 'react-redux';
import store from './Reducer/store';

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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

