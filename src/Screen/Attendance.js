import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Attendance = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Attendance Screen</Text>
            <Text style={styles.text}>Chờ Minh Design</Text>
            <Text style={styles.text}>Chờ Zũ code </Text>
        </View>
    )
}

export default Attendance

const styles = StyleSheet.create({
    body: {
        height: '100%',
        backgroundColor: '#3152f3',
    },
    text: {
        fontSize: 28,
        textAlign: 'center'
    }
})
