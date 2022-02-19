
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation'
import { Provider } from 'react-redux'
import FlashMessage from "react-native-flash-message";
import MyRoute from './navigation/routers';
import { StatusBar, LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

LogBox.ignoreLogs(['Setting a timer'])

export default function App() {
  return (
<PaperProvider>
      <NavigationContainer>
        {/* <MyTabs /> */}
        <StatusBar hidden={true}/>
        <MyRoute/>
        <FlashMessage position="top" /> 
      </NavigationContainer>
</PaperProvider>

   
  );
}
