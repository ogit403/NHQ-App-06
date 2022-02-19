import { View, Text } from 'react-native'
import React from 'react'
import AuthProvider from './AuthProvider'
import MyTabs from '.'

const MyRoute = () => {
  return (
    <AuthProvider>
        <MyTabs/>
    </AuthProvider>
  )
}

export default MyRoute