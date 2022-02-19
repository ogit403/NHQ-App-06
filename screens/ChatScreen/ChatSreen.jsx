import { View, Text } from 'react-native'
import React, { useEffect, useState, useCallback, useContext, useLayoutEffect, useRef } from 'react'
import { GiftedChat, Send } from 'react-native-gifted-chat'
import { chatModal } from '../../model/chatModal';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../../navigation/AuthProvider'
import { AntDesign } from '@expo/vector-icons'; 
import { userModal } from '../../model/userModal';
const ChatSreen = () => {
  const route = useRoute();
  const [messages, setMessages] = useState([]);
  const {user} = useContext(AuthContext)
  const {displayName, email, photoURL} = user;
  const [collectionName, setCollectionName] = useState(`${route.params.name}-${route.params.id}`)
  const isStart = useRef(true)

  useEffect(() => {
    const result = userModal.connect(collectionName);
    return () => {
      result
    }
  }, [])

  useLayoutEffect(() => {
    if(isStart.current) {
      chatModal.listData(collectionName, (message) => setMessages(message));
    }
    return () => {
      isStart.current = false
    }
  }, [])  

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    chatModal.addData(messages[0], collectionName)
  }, [])

  const renderSend = (props) => {
    return (
      <Send {...props}>
       <AntDesign style={{marginBottom: 10, marginRight: 5}} name="rightcircle" size={24} color="blue" />
      </Send>
    )
  }

  return (
    <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: email,
      name: displayName,
      avatar: photoURL
    }}
    renderUsernameOnMessage={true}
    scrollToBottom
    alignTop
    alwaysShowSend
    renderSend={renderSend}
  />
  )
}

export default ChatSreen