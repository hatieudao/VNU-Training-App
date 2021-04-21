import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'

const Category = ({ title, icon, jump }) => {
    return (
        <TouchableHighlight style={styles.container}
            onPress={() => { jump(`${title}`) }}
            underlayColor="#fdf5ff"
        >
            <View style={styles.content} >
                <Image source={icon} style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        backgroundColor: '#edf5f4',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {

    }
})

export default Category
