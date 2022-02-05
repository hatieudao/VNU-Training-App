import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Training from './../Screen/Training'
import SettingTraining from './../Screen/SettingTraining'
import Exams from './../Screen/Exams'

const Stack = createStackNavigator();

const TrainingStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Exams" component={Exams} />
        {/* <Stack.Screen name="SettingTraining" component={SettingTraining} /> */}
        <Stack.Screen name="Training" component={Training} />
    </Stack.Navigator>
)

export default TrainingStack;