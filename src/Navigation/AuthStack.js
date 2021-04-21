import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Login from './../Screen/Login'

const Stack = createStackNavigator();

export default function AuthStack() {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '128626367927-bao340f9ofs9cdg892r7m4cdrjks6boq.apps.googleusercontent.com',
        });
    }, [])

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
                header: () => null
            }} />
        </Stack.Navigator>
    )
}

