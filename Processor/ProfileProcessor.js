export const profileProcessor = async (setUserPost, token, id) => {
    const response = await fetch(`http://10.0.2.2:8080/posts/user/${id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUserPost(data);
}