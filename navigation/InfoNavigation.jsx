import { createStackNavigator } from '@react-navigation/stack';
import { InfoScreen } from '../screens';
import React from 'react'
const InfoStack = createStackNavigator();

const InfoStackScreen = () => {
  return (
    <InfoStack.Navigator
        screenOptions={{
            headerStyle : {
            backgroundColor : 'pink'
            },
            headerTintColor : 'white'
        }}
    >
      <InfoStack.Screen name="InfoScreen" component={InfoScreen} options={{title: 'Thông tin'}}/>
    </InfoStack.Navigator>
  );
}

export default InfoStackScreen;