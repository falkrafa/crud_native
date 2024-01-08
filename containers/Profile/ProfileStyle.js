import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#141d26',
      display: 'flex',
      alignItems: 'center',
    },
    userInfos:{
      display: 'flex',
      marginTop: 10,
      alignItems: 'center',
    },
    userContainer:{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    image:{
      width: 200,
      height: 200,
      borderRadius: 100,
      marginTop: 10,
    },
    infoText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1da1f2',
    },
    title:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1da1f2',
      marginTop: 10,
    },
    erro:{
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
    },
    postContainer:{
      width: 350,
      flex: 1,
      alignItems: 'center',
      padding: 10,
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
    PostContent: {
      fontSize: 16,
      color: '#fff',
      marginTop: 10,
    },
    button: {
      backgroundColor: '#1da1f2',
      borderRadius: 8,
      padding: 5,
      marginTop: 10,
      width: 70,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: '#192734',
      borderRadius: 8,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#1da1f2',
    },
    input: {
      height: 100,
      borderColor: 'white',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      color: 'white',
    },
    buttonContainer:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '55%',
    }
  });