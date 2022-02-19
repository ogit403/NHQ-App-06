import { View, Text } from 'react-native'
import React, {createContext, useState} from 'react'
import { auth } from '../firebase'
import { showMessage } from "react-native-flash-message";
import { useNavigation } from '@react-navigation/native'
export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    return (
        <AuthContext.Provider
        value={{
            user,
            login: async (email, password, setLoading) => {
                
                await auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    setUser(user)
                    setLoading(false)
                })
                .catch((error) => {
                    showMessage({
                        message: "Tài khoản hoặc mật khẩu không đúng",
                        type: "warning",
                    });
                    setLoading(false)
                });
            },
            register: async (email, password,setLoading) => {
                console.log(email, password)
                await auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    userCredential.user.updateProfile({
                    displayName: "Nguyen Hong Quan",
                    photoURL: "https://firebasestorage.googleapis.com/v0/b/appchatmain.appspot.com/o/default%2Fcus.jpg?alt=media&token=7cd2314d-e09c-45e6-a39a-43186a360a2b"
                    })
                    .then(() => {
                        console.log('thanh cong')
                        setLoading(false);
                        navigation.navigate('LoginScreen', {email, password})
                    })
                    .catch((error) => {
                        console.log('loi')
                        setLoading(false)
                    });  
                })
                .catch((error) => {
                    setLoading(false)
                    showMessage({
                        message: "Tài khoản hoặc mật khẩu không hợp lệ",
                        type: "warning",
                    });
                    
                });
            },
            sendEmail: async (email, setLoading) => {
                await auth.sendPasswordResetEmail(email)
                .then((user) => {
                  // Password reset email sent!
                  // ..
                  setLoading(false)
                  showMessage({
                    message: `Tin nhắn xác thực đã được gửi về email ${email}`,
                    type: "success",
                    });
                    navigation.navigate('LoginScreen', {email, password: ''})
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // ..
                  setLoading(false)
                });
            },
            logout: async () => {
                await auth.signOut().then(() => {
                    setUser(null);
                }).catch(() => {})
            },
            updateInfo: async (name, setName) => {
                await auth.currentUser.updateProfile({
                    displayName: name,
                    }).then(() => {
                    setName(auth.currentUser.displayName)
                    // ...
                    console.log('thanh cong')
                    }).catch((error) => {
                    // An error occurred
                    // ...
                    });  
            }
        }}
    >
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider


