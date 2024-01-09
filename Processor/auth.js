import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const auth = async(formData, navigation, dispatch, setLoggedIn, setUser) => {
    await axios.post('http://10.0.2.2:8080/users/login', formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (response.data) {
            AsyncStorage.setItem('token', JSON.stringify(response.data.token));
            dispatch(setUser(response.data.user));
            dispatch(setLoggedIn(true));
            navigation.navigate('Home');
        } else {
            console.error('Login failed', response.data.message);
        }
    })
}

export const register = async(formDataWithFile, navigation) => {
    await axios.post('http://10.0.2.2:8080/users', formDataWithFile, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then((response) => {
        if (response.data) {
            console.log('Registration successful');
            navigation.navigate('Login');
        } else {
            console.error('Registration failed');
        }
    })
}