import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './TextInput'
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextInputComponent = ({value, editor, showPass, title, placeholder, icon, onChange}) => {
  const [click, setClick] = useState(showPass);

  const obj = {
    autoCapitalize: 'none',
    secureTextEntry: icon ? click : false,
    title,
    placeholder,
  }

  const handleClick = () => {
    let newClick = click;
    setClick(!newClick);
  }

  return (
    <>   
    <View style={styles.groupInput}>
        <Text style={styles.titleInput}>{obj.title}</Text>
        <View style={styles.wrapInput}>
            <TextInput editable={editor ? false : true} value={value} onChangeText={(value) => onChange(value)} autoCapitalize={obj.autoCapitalize} secureTextEntry={obj.secureTextEntry} style={styles.contentInput} placeholder={obj.placeholder}/>
            {
              icon ? (<Text onPress={handleClick} style={styles.iconInput}>
                <Ionicons name={click ? 'ios-eye-outline' : 'ios-eye'} size={20} color="black" />
            </Text>) : <></>
            }
            
        </View>
    </View>
    </>
  )
}

export default TextInputComponent