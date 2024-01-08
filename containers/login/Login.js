import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import LoginLogic from './LoginContainer';
import { styles } from './LoginStyle';

const Login = ({ navigation }) => {
  const { formData, validationErrors, handleChange, handleSubmit } = LoginLogic({
    navigation,
  });

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('email', value)}
          value={formData.email}
          placeholder="Email"
          placeholderTextColor = '#aab8c2'
        />
        <Text style={styles.errorText}>{validationErrors.email}</Text>

        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('password', value)}
          value={formData.password}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor = '#aab8c2'
        />
        <Text style={styles.errorText}>{validationErrors.password}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
