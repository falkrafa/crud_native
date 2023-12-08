import React, { useState } from 'react';
import * as Yup from 'yup';

const LoginLogic = ({ navigation }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [validationErrors, setValidationErrors] = useState({
        email: '',
        password: '',
      });
    
      const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
      });
    
      const handleChange = (name, value) => {
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (setLoggedIn, setUser) => {
        try {
          await validationSchema.validate(formData, { abortEarly: false });
    
          const response = await fetch('http://10.0.2.2:8080/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setLoggedIn(true);
            setUser(data.user);
            navigation.navigate('Home', { loggedIn: true, user: data.user, setLoggedIn, setUser });

          } else {
            console.error('Login failed', data.message);
          }
        } catch (error) {
          if (error instanceof Yup.ValidationError) {
            const errors = {};
            error.inner.forEach((e) => {
              errors[e.path] = e.message;
            });
            setValidationErrors(errors);
          } else {
            console.error('Error during login', error);
          }
        }
      };
      return { formData, validationErrors, handleChange, handleSubmit };
};

export default LoginLogic;