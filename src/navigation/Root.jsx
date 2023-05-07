import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import CreditScreen from '../screens/CreditScreen'
import OtpScreen from '../screens/OtpScreen'
import SuccessfulScreen from '../screens/SuccessfulScreen'
import ApplyOneScreen from '../screens/ApplyOneScreen'
import ApplyTwoScreen from '../screens/ApplyTwoScree'
import SuccessScreen from '../screens/SuccesScreen'

const Stack = createNativeStackNavigator()


const Root = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
        <Stack.Screen name='SuccessfulScreen' component={SuccessfulScreen}/>
        <Stack.Screen name='SuccessScreen' component={SuccessScreen}/>
        <Stack.Screen name='CreditScreen' component={CreditScreen}/>
        <Stack.Screen name='OtpScreen' component={OtpScreen}/>
        <Stack.Screen name='ApplyOneScreen' component={ApplyOneScreen}/>
        <Stack.Screen name='ApplyTwoScreen' component={ApplyTwoScreen}/>
      </Stack.Navigator>
  )
}

export default Root