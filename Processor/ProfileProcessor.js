import axios from "axios";

export const profileProcessor = async (setUserPost, token, id) => {

  await axios.get(`http://10.0.2.2:8080/posts/user/${id}`, { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }}).then((response)=>{
    if(response.data){
      setUserPost(response.data);
    }else{
      console.error('Failed to fetch posts');
    }
  })
}