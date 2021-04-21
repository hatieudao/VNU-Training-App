import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Categories from './../Screen/Categories'
import Attendance from './../Screen/Attendance'
import Profile from '../Screen/Profile'
import Icon from 'react-native-vector-icons/Ionicons'
import TrainingStack from './TrainingStack'

const CategoriesStack = createStackNavigator()

const CategoriesStackScreen = () => {
    return (
        <CategoriesStack.Navigator>
            <CategoriesStack.Screen name="Categories" component={Categories} options={{
                header: () => null
            }} />
            <CategoriesStack.Screen name="Attendance" component={Attendance} />
            <CategoriesStack.Screen name="TrainingStack" component={TrainingStack} options={{
                header: () => null
            }} />
        </CategoriesStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function AppStack() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'card' : 'card-outline';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#707',
                labelStyle: {
                    fontSize: 20,
                },
            }}
        >
            <Tab.Screen name="Home" component={CategoriesStackScreen} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator >
    )
}

