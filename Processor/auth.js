import AsyncStorage from "@react-native-async-storage/async-storage";

export const auth = async(formData, navigation, dispatch, setLoggedIn, setUser) => {
    const response = await fetch('http://10.0.2.2:8080/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data) {
    await AsyncStorage.setItem('token', JSON.stringify(data.token));
    dispatch(setUser(data.user));
    dispatch(setLoggedIn(true));
    navigation.navigate('Home');
    } else {
    console.error('Login failed', data.message);
    }
}