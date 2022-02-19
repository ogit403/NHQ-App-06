import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './HomeScreenStyles'
import { showMessage, hideMessage } from "react-native-flash-message";

const HomeScreen = () => {

  // useEffect(() => {
  //   showMessage({
  //     message: "Simple message",
  //     type: "info",
  //   });
  // }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen