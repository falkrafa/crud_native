import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      height: '15%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      height: '100%',
      width: '30%',
      justifyContent: 'space-around',
    },
    touchableButton: {
      backgroundColor: '#3498db',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
  });