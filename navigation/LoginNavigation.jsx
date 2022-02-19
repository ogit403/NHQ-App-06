import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, Registerscreen } from '../screens';
import ResetScreen from '../screens/ResetScreen/ResetScreen';
const LoginStack = createStackNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle : {
          backgroundColor : '#ffffff'
        },
        headerTintColor : '#000000',
        headerShown: false
      }}
    >
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} options={{title : 'Đăng nhập'}}/>
        <LoginStack.Screen name="RegisterScreen" component={Registerscreen} options={{title : 'Đăng xuất'}}/>
        <LoginStack.Screen name="ResetScreen" component={ResetScreen} options={{title : 'Quên mật khẩu'}}/>
    </LoginStack.Navigator>
  );
}

export default LoginStackScreen