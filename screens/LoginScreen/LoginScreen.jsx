import { View, Text, TextInput, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './LoginScreenStyles'
import { TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextInputComponent from '../../components/TextInput/TextInput.jsx'
import { showMessage } from 'react-native-flash-message'
import { AuthContext } from '../../navigation/AuthProvider'
import Loading from '../../components/Loading/Loading'
// import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {user, login} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(route?.params) {
            setName(route.params.email);
            setPassword(route.params.password)
        }
    }, [route])

    const onSubmit = () => {
        // login(name, passwor)
        setLoading(true)
        login(name, password, (value) => setLoading(value))
        console.log(user, login)
    }

    const handleName = (value) => {
        setName(value);
    }

    const changeScreen = (value) => {
        navigation.push(value)
    }
    // return <Loading/>

  return (
    <View style={styles.container}>
        {loading && <Loading/>} 
        <View style={styles.background}></View>
        {/* <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      /> */}

        <View style={styles.main}>
            <View style={styles.wrapIcon}>
            <Image style={styles.logo} source={require('../../assets/images/bg-1.png')} />

            </View>
            <Text style={styles.title}>ĐĂNG NHẬP</Text>
            <View style={styles.group}>
                <TextInputComponent value={name} max={30} min={6} onChange={(value) => handleName(value)} icon={false} showPass={false} title={"Tài khoản"} placeholder={"Tài khoản..."} />
                <TextInputComponent value={password} onChange={(value) => setPassword(value)} icon showPass={true} title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
            </View>
            <View style={styles.groupButton}>
                <Text onPress={onSubmit} style={styles.button}>Đăng nhập</Text>
            </View>
            <View style={styles.groupText}>
                <Text>
                    Bạn chưa có tài khoản ? 
                </Text>
                <TouchableOpacity onPress={() => changeScreen('RegisterScreen')}><Text style={styles.textRegister}>đăng ký</Text></TouchableOpacity>
            </View>
            <View style={styles.groupText}>
                <TouchableOpacity onPress={() => changeScreen('ResetScreen')}><Text style={styles.textRegister}>Quên mật khẩu</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default LoginScreen