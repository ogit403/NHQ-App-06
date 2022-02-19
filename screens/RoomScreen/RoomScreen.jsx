import { View, Text, Image } from 'react-native'
import React, { useCallback } from 'react'
import styles from './RoomScreenStyles'
import { TouchableOpacity } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { userModal } from '../../model/userModal'

let data = [
  {id: 1, name: 'Ai My', img: require('../../assets/images/hinh-1.jpg')},
  {id: 2, name: 'Mai Thao', img: require('../../assets/images/hinh-02.jpg')},
  {id: 3, name: 'Van Trang', img: require('../../assets/images/hinh-03.jpg')},
  {id: 4, name: 'Thanh Thanh', img: require('../../assets/images/hinh-08.jpg')},
  {id: 5, name: 'Hong Nhu', img: require('../../assets/images/hinh-09.jpg')},
]

const RoomScreen = () => {
  const navigation = useNavigation();

  const changeScreen = (name, id) => {
    navigation.push('ChatScreen', {name, id})
  }

  useFocusEffect(
      useCallback(() => {
          const result = userModal.disConnect();

        return () => {
            result
        }

      }, [])
  )

  const renderData = ({item}) => {
    return (
      <TouchableOpacity onPress={() => changeScreen(item.name, item.id)} style={styles.item}>
        <Image style={styles.image} source={item.img} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <FlatList
          data={data}
          renderItem={renderData}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
      
    </View>
  )
}

export default RoomScreen