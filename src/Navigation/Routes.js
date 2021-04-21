import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

import { AuthContext } from './AuthProvider'

import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Redux/Actions/User'

export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const dispatch = useDispatch();

    const onAuthStateChanged = (user) => {

        setUser(user);

        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subcriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subcriber;
    }, []);

    if (initializing) return null;
    if (user) {
        console.log(user);
        dispatch(loginUser(user));
    }
    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

