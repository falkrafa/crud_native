import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RegisterLogic from './RegisterContainer';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './RegisterStyle';

const Register = ({ navigation }) => {
  const { formData, validationErrors, handleChange, handleSubmit,} = RegisterLogic({ navigation });

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
          placeholderTextColor = '#aab8c2'
        />
        <Text style={styles.errorText}>{validationErrors.name}</Text>

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
          placeholderTextColor = '#aab8c2'
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

export default Register;
