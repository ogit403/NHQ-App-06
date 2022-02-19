import { View, Text } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import styles from './UserInRoomStyle'
import { ScrollView, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { useRoute } from '@react-navigation/native';
import { userModal } from '../../model/userModal';
import { FlatList } from 'react-native';

const UserInRoom = () => {
  const route = useRoute();
  const [data, setData] = useState([]);
  const isStart = useRef(true)
  console.log('route', route.params.roomName)

  useLayoutEffect(() => {
      if(isStart.current) {
        const result = userModal.listUserOnline(route.params.roomName, (value) => setData(value))
      }

      return () => {
        isStart.current = false
      }
  }, [])

  const renderData = ({item}) => {
    return (
        <View style={styles.item}>
            <View style={styles.wrapImage}>
                <Image style={styles.image} source={{uri: item.img}} />
            </View>
            <View style={styles.wrapInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.wrapOnline}>
                <MaterialIcons name="online-prediction" size={24} color="green" />
                <Text style={styles.online}>Online</Text>
              </View>
            </View>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default UserInRoom