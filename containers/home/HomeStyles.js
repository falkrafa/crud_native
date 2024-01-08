import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#141d26',
      display: 'flex',
      alignItems: 'center',
    },
    head: {
      width: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#192734',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop: 10,
      height: 100,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 30,
      padding: 20,
    },
    button: {
      backgroundColor: '#1da1f2',
      paddingVertical: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    headText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 50,
      objectFit: 'cover',
    },
    btn:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 90,
      justifyContent: 'space-between',
    }
  });