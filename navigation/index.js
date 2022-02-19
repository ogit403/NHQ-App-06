import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import LoginStackScreen from './LoginNavigation';
import UserStackScreen from './UserNavigation';

const MyTabs = () => {
    const {user} = useContext(AuthContext);

    // console.log(user)

    return (
        !user ? <LoginStackScreen/> : <UserStackScreen/>
    )
}

export default MyTabs;