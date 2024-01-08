import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#141d26',
    },
    formContainer: {
      width: '80%',
      borderRadius: 10,
      padding: 20,
      backgroundColor: '#192734',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      height: 40,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: '#192734',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#38444d',
      color: '#fff',
    },
    
    
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#1da1f2',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });