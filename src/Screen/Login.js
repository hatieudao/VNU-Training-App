import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../Navigation/AuthProvider';
const Stack = createStackNavigator();

const Login = ({ navigation }) => {

  const { login, register, fbLogin, ggLogin } = useContext(AuthContext);


  return (

    <ImageBackground source={require('../../assets/Background.png')} style={styles.container} >
      <View style={styles.LoginTitle}>
        <Text style={styles.textLoggin}>Sign in</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.logo}></View>
      <TouchableOpacity style={styles.buttonlogin} onPress={() => fbLogin()} >
        <Text style={styles.buttonTitle}>FACEBOOK</Text>
        <Image source={require(('../../assets/fb.png'))} style={styles.logo1}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonlogin} onPress={() => ggLogin()} >
        <Text style={styles.buttonTitle}>GOOGLE</Text>
        <Image source={require(('../../assets/google.png'))} style={styles.logo2}></Image>
      </TouchableOpacity>

    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },

  LoginTitle: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  textLoggin: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  buttonTitle: {
    color: "#707",
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30
  },
  buttonlogin: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 15,
  },
  logo1: {
    borderRadius: 20,
    marginLeft: 70
  },
  logo2: {
    borderRadius: 20,
    marginLeft: 90
  },
  line: {
    height: 4,
    width: 175,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    color: 'white',
    width: 50,
    height: 50,
    marginTop: 5,
    marginBottom: 150
  }
})