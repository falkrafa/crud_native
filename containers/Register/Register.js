import React, { useState } from 'react';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import * as Yup from 'yup';

const RegisterLogic = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePicture: null,
  });

  const [validationErrors, setValidationErrors] = useState({});
  const formDataWithFile = new FormData();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const getFileNameFromUri = (uri) => {
    const pathArray = uri.split('/');
    const fileName = pathArray[pathArray.length - 1];
    return fileName;
  };
  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
  
      formDataWithFile.append('name', formData.name);
      formDataWithFile.append('email', formData.email);
      formDataWithFile.append('password', formData.password);
  
      if (formData.profilePicture) {
        const fileName = getFileNameFromUri(formData.profilePicture.uri);
        const fileType = fileName.split('.')[1];
        formDataWithFile.append('profilePicture', {
          name: `profilePicture.${fileType}`,
          type: `image/${fileType}`,
          uri: formData.profilePicture.uri,
        });
      }

  
      const response = await fetch('http://10.0.2.2:8080/users', {
        method: 'POST',
        body: formDataWithFile,
      });
  
      if (response.ok) {
        console.log('Registration successful');
        navigation.navigate('Login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      if (error && error.inner) {
        const errors = {};
        error.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        setValidationErrors(errors);
      } else {
        console.error('Error during validation:', error);
      }
    }
  };  

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    formData,
    validationErrors,
    handleChange,
    handleSubmit,
  };
};

export default RegisterLogic;
