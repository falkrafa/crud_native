import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUser } from "../../Reducer/authReducer";  
const HomeContainer = ({navigation}) => {  
  
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      dispatch(setLoggedIn(false));
      dispatch(setUser(null));
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  return {logout}
}

export default HomeContainer;