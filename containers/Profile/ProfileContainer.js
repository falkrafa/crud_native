import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
const ProfileContainer = ({ user }) => {
  return (
    <View style={styles.container}>
        <View style={styles.head}>
            <Text style={styles.headText}>Welcome {user.name}</Text>
            <Image style={styles.image} source={`http://10.0.2.2:8080/${user.profilePicture}`}/>
        </View>
        <View style={styles.body}>
            <Text style={styles.bodyText}>Email: {user.email}</Text>
        </View>
    </View>
  )
}

export default ProfileContainer