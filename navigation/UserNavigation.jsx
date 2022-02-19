import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, InfoScreen, RoomScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './HomeNavigation';
import roomStackScreen from './RoomNavigation';
import InfoStackScreen from './InfoNavigation';
const UserStack = createBottomTabNavigator();

const UserStackScreen = () => {
  return (
        <UserStack.Navigator
        initialRouteName={'User'}
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
            case 'HomeStackScreen':
                iconName = focused ? 'ios-home' : 'ios-home-outline'
                break;
            case 'RoomStackScreen':
                iconName = focused ? 'ios-timer' : 'ios-timer-outline'
                break;
            case 'InfoStackScreen':
                iconName = focused ? 'ios-heart' : 'ios-heart-outline'
                break;
            default:
                break;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle : {
            backgroundColor : 'pink',
            height : 65,
            paddingBottom : 10
        },
        tabBarLabelStyle : {
            fontSize : 13
        },
        headerShown: false
        })}
    >
        <UserStack.Screen name="HomeStackScreen" component={HomeStackScreen} options={{title : 'Trang chủ'}} />
        <UserStack.Screen name="RoomStackScreen" component={roomStackScreen} options={{title : 'Phòng'}} />
        <UserStack.Screen name="InfoStackScreen" component={InfoStackScreen} options={{title : 'Thông tin'}} />
    </UserStack.Navigator>
  );
}

export default UserStackScreen