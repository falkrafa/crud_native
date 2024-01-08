import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      width: 350,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: 10,
    },  
    HeadText: {
      fontSize: 25,
      color: '#1da1f2',
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 10,
    },
    Posts: {
      width: '100%',
      height: 'fit-content',
      backgroundColor: '#192734',
      borderWidth: 1,
      borderColor: '#38444d',
      borderRadius: 8,
      padding: 20,
      wordWrap: 'break-word',
      marginBottom: 10,
    },
    erro:{
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
    },
    PostName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1da1f2',
      marginLeft: 10,
    },
    PostContent: {
      fontSize: 16,
      color: '#fff',
      marginTop: 10,
    },
    image:{
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    Posthead:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }
  });