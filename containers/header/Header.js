import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    height: '15%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: '100%',
    width: '30%',
    justifyContent: 'space-around',
  },
  touchableButton: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Header;
