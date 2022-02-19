import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import React from 'react'
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle : {
            backgroundColor : 'pink'
            },
            headerTintColor : 'white'
        }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Trang chủ'}} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;