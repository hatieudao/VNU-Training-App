import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Category from './../Component/Category'
import { useSelector } from 'react-redux';

const Categories = ({ navigation }) => {

    const menu = [
        { title: "Attendance", icon: require("../../assets/attendance.png") },
        { title: "Training", icon: require("../../assets/training.png") },
        { title: "Statistic", icon: require("../../assets/statistic.png") },
        { title: "References", icon: require("../../assets/references.png") },
        { title: "Advertise", icon: require("../../assets/advertise.png") },
        { title: "About us", icon: require("../../assets/about-us.png") }
    ]

    const username = useSelector(state => state.userReducer.user.displayName);

    const jump = (nameScreen) => {
        if (nameScreen === 'Training') {
            navigation.navigate('TrainingStack')
            return
        }
        navigation.navigate(nameScreen);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Hello
                <Text style={styles.userName} >{` ${username} !`}</Text>
            </Text>
            <View style={styles.menu}>
                {
                    menu.map((item, index) => (<Category key={index} title={item.title} icon={item.icon} jump={jump} />))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '90%',
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 28,
        textAlign: 'center'
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent: 'space-around',
    },
    userName: {
        color: '#707'
    }

})


export default Categories
