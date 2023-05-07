import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/Root';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})