import AsyncStorage from "@react-native-async-storage/async-storage";

export const getPost = async (dispatch, setAllPosts, setFormData, formData) => {
    const response = await fetch('http://10.0.2.2:8080/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setAllPosts(data));
        setFormData({
          ...formData,
          content: '',
        });
    } else {
        console.error('Failed to fetch posts');
    }
}

export const makePost = async (formData, user) => {
  const storedValue = await AsyncStorage.getItem('token');
  const token = storedValue ? JSON.parse(storedValue) : null;
  const response = await fetch('http://10.0.2.2:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      content: formData.content,
      likes: 0,
      userId: user.id,
    }),
  });

  if (response.ok) {
    console.log('Post created successfully');
  } else {
    console.error('Failed to create post');
  }
}

export const delPost = async (id, token) => {
  await fetch(`http://10.0.2.2:8080/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
}

export const updPost = async (id, formData, token) => {
  await fetch(`http://10.0.2.2:8080/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      content: formData.content,
    }),
  });
}