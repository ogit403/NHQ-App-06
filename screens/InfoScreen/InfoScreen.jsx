import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './InfoScreenStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../navigation/AuthProvider'
import TextInputComponent from '../../components/TextInput/TextInput.jsx'
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { userModal } from '../../model/userModal';
import * as ImagePicker from 'expo-image-picker';
import imgPicker from '../../lib/imagePicker';
import { showMessage } from 'react-native-flash-message';
import { ProgressBar, Colors } from 'react-native-paper';
import SkeletonContent from 'react-native-skeleton-content';
import { AntDesign } from '@expo/vector-icons'; 
const InfoScreen = () => {
  const {user, logout, updateInfo} = useContext(AuthContext)
  const {displayName, email, photoURL} = user;
  const [fullname, setFullName] = useState(displayName) 
  const [name, setName] = useState(displayName) 
  const [imageUser, setImageUser] = useState(photoURL);
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkPass, setCheckPass] = useState(false);
  const [image, setImage] = useState(null);
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  useEffect(() => {
    setVisible(false);
    setPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setCheckPass(false);
  }, [checkPass])

  const handleLog = () =>{
    logout();
  }

  const handleImage = async () => {
    console.log('name')
    imgPicker((value) => setLoading(value), setImageUser);
  }

  const handleName = (value) => {
    setName(value)
    // console.log('value')
  }

  const handleChangeName = () => {
    updateInfo(name, setFullName)
  }

  const onSubmit = () => {
    if(password && newPassword && confirmPassword) {


      userModal.changePassword(password, newPassword, confirmPassword, setCheckPass);
    }
    else {
      showMessage({
        message: `Vui lòng nhập đầy đủ thông tin`,
        type: "danger",
    });
    }
  }
  console.log(loading);

  return (
    <View style={styles.container}>
        
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
              <Text style={styles.titlePassword}>Cập nhật mật khẩu</Text>
            <TextInputComponent value={password} max={30} min={6} onChange={(value) => setPassword(value)} icon showPass title={"Mật khẩu cũ"} placeholder={"Mật khẩu cũ..."} />
            <TextInputComponent value={newPassword} max={30} min={6} onChange={(value) => setNewPassword(value)} icon showPass title={"Mật khẩu mới"} placeholder={"Mật khẩu mới..."} />
            <TextInputComponent value={confirmPassword} max={30} min={6} onChange={(value) => setConfirmPassword(value)} icon showPass title={"Xác nhận mật khẩu mới"} placeholder={"Xác nhận mật khẩu mới..."} />
            <View style={styles.groupButton}>
                <Text onPress={onSubmit} style={styles.button}>Cập nhật</Text>
            </View>
            </Modal>
          </Portal>
        <View style={styles.background}></View>
        <View style={styles.groupImage}s>
          <View style={styles.wrapImage}>
            {
              !loading ?
              (<>
              <Image style={styles.image} source={{uri: imageUser}} />
            <Text onPress={handleImage} style={styles.iconImage}>
            <Ionicons name='add-circle' size={36} color="#ffffff" />
            </Text></>)
            : (
              <SkeletonContent
              containerStyle={{justifyContent: 'center', alignItems: 'center' }}
              isLoading={true}
              layout={[
                { key: 'someId', width: 130, height: 130, marginBottom: 6, borderRadius: 500 },
              ]}
            >
              <Text style={styles.normalText}>Your content</Text>
            </SkeletonContent>
  )
            }
          </View>
          <Text style={styles.titleImage}>{fullname}</Text>
        </View>
        <View style={styles.groupChange}>
            <Text onPress={handleChangeName} style={styles.textChange}>Thay đổi thông tin</Text>
            <Text style={styles.iconLogOut}>
            <Ionicons onPress={handleLog} name="add-circle" size={30} color="#ffffff" />
            {/* <AntDesign onPress={handleLog} name="rightcircleo" size={30} color="white" /> */}
            </Text>
        </View>
        <View style={styles.group}>
              <TextInputComponent value={name} max={30} min={6} onChange={(value) => handleName(value)} icon={false} showPass={false} title={"Họ và tên"} placeholder={"Họ và tên..."} />
                <TextInputComponent value={email} editor icon={false} showPass={false} title={"Email"} placeholder={"Email..."} />
              <TextInputComponent value="*********" editor icon={false}  showPass={false} title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
        </View>
        <View style={styles.groupText}>
            <TouchableOpacity onPress={() => setVisible(true)}><Text style={styles.textRegister}>Thay đổi mật khẩu</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default InfoScreen