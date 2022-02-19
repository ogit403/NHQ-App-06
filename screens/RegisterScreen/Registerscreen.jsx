import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './RegisterScreenStyles'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../navigation/AuthProvider';
import TextInputComponent from '../../components/TextInput/TextInput.jsx'
import Loading from '../../components/Loading/Loading';

const Registerscreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const {register} = useContext(AuthContext);

    const changeScreen = () => {
        navigation.push('LoginScreen')
    }

    const onSubmit = () => {
        setLoading(true)
        register(email, password, (value) => setLoading(value))
    }

    const handleName = (value) => {
        setEmail(value)
    }
    const handlePassword = (value) => {
        setPassword(value)
    }
    

  return (
    <View style={styles.container}>
        {loading && <Loading/>}
    <View style={styles.background}></View>
    <View style={styles.main}>
    <View style={styles.wrapIcon}>
            <Image style={styles.logo} source={require('../../assets/images/bg-1.png')} />

            </View>
        <Text style={styles.title}>ĐĂNG KÝ</Text>
        <View style={styles.group}>
        <TextInputComponent value={email} max={30} min={6} onChange={(value) => handleName(value)} icon={false} showPass={false} title={"Tài khoản"} placeholder={"Tài khoản..."} />
        <TextInputComponent value={password} onChange={(value) => handlePassword(value)} icon showPass={true} title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
        </View>
        <View style={styles.groupButton}>
            <Text onPress={onSubmit} style={styles.button}>Đăng ký</Text>
        </View>
        <View style={styles.groupText}>
            <Text>
            Bạn đã có tài khoản ?
            </Text>
                <TouchableOpacity onPress={changeScreen}><Text style={styles.textRegister}>đăng nhập</Text></TouchableOpacity>
        </View>
    </View>
</View>
  )
}

export default Registerscreen