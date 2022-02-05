/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import configureStore from './src/Redux/store';
import TrackPlayer from 'react-native-track-player';
const store = configureStore()

const MyApp = () => <Provider store={store} >
    <App />
</Provider>

TrackPlayer.registerPlaybackService(() => require('./service.js'));
AppRegistry.registerComponent(appName, () => MyApp);
