import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const getPost = async (dispatch, setAllPosts, setFormData, formData) => {
  await axios.get('http://10.0.2.2:8080/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.data) {
      dispatch(setAllPosts(response.data));
      setFormData({
        ...formData,
        content: '',
      });
    } else {
      console.error('Failed to fetch posts');
    }
  })
}

export const makePost = async (formData, user) => {
  const storedValue = await AsyncStorage.getItem('token');
  const token = storedValue ? JSON.parse(storedValue) : null;

  await axios.post('http://10.0.2.2:8080/posts', {
    content: formData.content,
    likes: 0,
    userId: user.id,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.data) {
      console.log('Post created successfully');
    } else {
      console.error('Failed to create post');
    }
  })
  
}

export const delPost = async (id, token) => {

  await axios.delete(`http://10.0.2.2:8080/posts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
}

export const updPost = async (id, formData, token) => {

  await axios.put(
    `http://10.0.2.2:8080/posts/${id}`,
    {content: formData.content},
    {headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }})
}
