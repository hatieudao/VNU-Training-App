import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { useSelector } from 'react-redux'
import { AuthContext } from '../Navigation/AuthProvider';

const Profile = () => {

    const user = useSelector(state => state.userReducer.user);

    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container} >
            <Text style={styles.userName}>{user.displayName}</Text>
            <Text>{user.email}</Text>
            <Image source={{ uri: user.photoURL }} style={styles.avatar} ></Image>
            <TouchableHighlight
                onPress={() => logout()}
            >
                <Text>LOG OUT</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
})
