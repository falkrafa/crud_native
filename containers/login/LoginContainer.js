import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch} from 'react-redux';
import { setLoggedIn, setUser} from '../../Reducer/authReducer';
import { auth } from '../../Processor/auth';

const LoginLogic = ({ navigation }) => {
    const dispatch = useDispatch();

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
    
      const handleSubmit = async () => {
        try {
          await validationSchema.validate(formData, { abortEarly: false });
          await auth(formData, navigation, dispatch, setLoggedIn, setUser);
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