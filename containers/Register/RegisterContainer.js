import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RegisterLogic from './Register';
import * as ImagePicker from 'expo-image-picker';

const RegisterContainer = () => {
  const { formData, validationErrors, handleChange, handleSubmit,} = RegisterLogic();

  const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result.assets[0]);
      handleChange('profilePicture', result.assets[0]);

  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('name', value)}
          value={formData.name}
          placeholder="Name"
        />
        <Text style={styles.errorText}>{validationErrors.name}</Text>

        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('email', value)}
          value={formData.email}
          placeholder="Email"
        />
        <Text style={styles.errorText}>{validationErrors.email}</Text>

        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange('password', value)}
          value={formData.password}
          placeholder="Password"
          secureTextEntry
        />
        <Text style={styles.errorText}>{validationErrors.password}</Text>

        <TouchableOpacity style={styles.button} onPress={pickImage}><Text style={styles.buttonText}>Open gallery</Text></TouchableOpacity>
        {formData.profilePicture && (
          <View>
            <View style={{height: 10}}></View><Text style={{color: '#fff'}}>Selected image:</Text>
            <Image source={{ uri: formData.profilePicture.uri }} style={{ width: 200, height: 200 }} />
          </View>
        )}
        <Text style={styles.errorText}>{validationErrors.profilePicture}</Text>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141d26',
  },
  formContainer: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#192734',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#192734',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#38444d',
    color: '#fff',
  },
  
  
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1da1f2',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterContainer;
