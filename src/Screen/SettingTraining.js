import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Touchable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SettingTraining = ({ navigation }) => {
    const [amountOfReading, setAmountOfReading] = useState(15);
    const [amountOfListening, setAmountOfListening] = useState(15);
    const maxAmountOfQuestion = 50; //setting get form env later
    const change = (typeOfQuestion, number) => {
        if (typeOfQuestion === 'Reading') {
            if (amountOfReading < maxAmountOfQuestion && amountOfReading > 1)
                setAmountOfReading(amountOfReading + number);
            else
                alert(`Range of questions is [1, ${maxAmountOfQuestion}`);
        } else {
            if (amountOfListening < maxAmountOfQuestion && amountOfListening > 1)
                setAmountOfListening(amountOfListening + number);
            else
                alert(`Range of questions is [1, ${maxAmountOfQuestion}`);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Reading: {amountOfReading}</Text>
            <TouchableHighlight
                onPress={() => change('Reading', 1)}
            >
                <Text>+1</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => change('Reading', -1)}
            >
                <Text>-1</Text>
            </TouchableHighlight>
            <Text>Listening: {amountOfListening}</Text>
            <TouchableHighlight
                onPress={() => change('Listening', 1)}
                title="+1"
            >
                <Text>+1</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => change('Listening', -1)}
                title="-1"
            >
                <Text>-1</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => navigation.navigate('Training', { reading: amountOfReading, listening: amountOfListening })}
            >
                <Text>Go to the Test!!!</Text>
            </TouchableHighlight>
        </View>
    )
}

export default SettingTraining

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})
