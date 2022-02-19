import { View, Text } from 'react-native'
import React from 'react'
import styles from './LoadingStyle'
import { Image } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.main}>
        <Image style={styles.loading} source={require('../../assets/images/loading.gif')} />
        <Image style={styles.image} source={require('../../assets/images/hinh-02.jpg')} />

        </View>
    </View>
  )
}

export default Loading