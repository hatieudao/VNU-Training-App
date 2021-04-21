import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Providers from './src/Navigation';



const App = () => {
  return (
    <Providers />
  )

};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },

});

export default App;
