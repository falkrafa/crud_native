import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { styles } from './HeaderStyle';
const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableHighlight
          style={styles.touchableButton}
          onPress={() => navigation.navigate('Login')}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          onPress={() => navigation.navigate('Register')}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Header;
