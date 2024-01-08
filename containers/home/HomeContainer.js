import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUser } from "../../Reducer/authReducer";  
import AsyncStorage from "@react-native-async-storage/async-storage";
const HomeContainer = ({navigation}) => {  
  
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      dispatch(setLoggedIn(false));
      dispatch(setUser(null));
      AsyncStorage.clear();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  return {logout}
}

export default HomeContainer;