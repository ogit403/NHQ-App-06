import { createStackNavigator } from '@react-navigation/stack';
import { RoomScreen } from '../screens';
import React from 'react'
import ChatSreen from '../screens/ChatScreen/ChatSreen';
import UserInRoom from '../screens/UserInRoom/UserInRoom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const roomStack = createStackNavigator();

const roomStackScreen = () => {
  const navigation = useNavigation();

  const changeScreen = (value) => {
      navigation.navigate(value, {})
      // console.log(navigation)
  }

  const goUserInRoom = (value) => {
    console.log('value', value)
    navigation.navigate('UserInRoomScreen', {roomName: value})
  }

  return (
    <roomStack.Navigator
        screenOptions={{
            headerStyle : {
            backgroundColor : 'pink'
            },
            headerTintColor : 'white'
        }}
    >
      <roomStack.Screen name="RoomScreen" component={RoomScreen} 
      options={{title: 'Phòng trò chuyện',
        headerLeft: () => {return  <Ionicons style={{marginLeft: 5}} onPress={() => changeScreen('HomeStackScreen')} name='home' size={24} color="#ffffff" />},
        headerRight: () => {return <Ionicons style={{marginRight: 5}} onPress={() => changeScreen('InfoStackScreen')}  name='ios-heart' size={24} color="#ffffff" />}
      }}/>
      <roomStack.Screen name="ChatScreen" component={ChatSreen} 
      options={({route}) => ({title: route.params.name,
        headerRight: () => {return <Ionicons style={{marginRight: 5}} onPress={() => goUserInRoom(`${route.params.name}-${route.params.id}`)}  name='ios-heart' size={24} color="#ffffff" />}
      })}/>
      <roomStack.Screen name="UserInRoomScreen" component={UserInRoom} options={{title: 'Phòng trò chuyện'}}/>
    </roomStack.Navigator>
  );
}

export default roomStackScreen;