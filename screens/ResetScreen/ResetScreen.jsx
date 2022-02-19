import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './ResetSreenStyles'
import TextInputComponent from '../../components/TextInput/TextInput.jsx'
import { AuthContext } from '../../navigation/AuthProvider'
import Loading from '../../components/Loading/Loading'
const ResetScreen = () => {
  const [name, setName] = useState('');
  const {sendEmail} = useContext(AuthContext)
  const [loading, setLoading] = useState(false);

  const handleName = (value) => {
    setName(value)
  }
 
  const checkEmail = () => {
    setLoading(true)
    sendEmail(name, (value) => setLoading(value))
  }

  return (
    <View style={styles.container}>
      {loading && <Loading/>}
        <View style={styles.background}></View>
        <View style={styles.main}>
            <Text style={styles.title}>Quên mật khẩu</Text>
            <View style={styles.group}>
            <TextInputComponent value={name} max={30} min={6} onChange={(value) => handleName(value)} icon={false} showPass={false} title={"Tài khoản"} placeholder={"Tài khoản..."} />
          </View>
          <View style={styles.groupButton}>
              <Text onPress={checkEmail} style={styles.button}>Xác nhận</Text>
          </View>
        </View>
    </View>
  )
}

export default ResetScreen