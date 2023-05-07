import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SuccessfulScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <Image source={require('../assets/png/success.png')} />
        <Text style={styles.firstText}>Profiliniz yaradıldı!</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Ana səhifə</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessfulScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstText: {
    fontSize: 20,
    color: '#000',
  },
  middle: {
    alignItems: 'center',
    height: 700,
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#0F9071',
  },
  btnText: {
    color: '#fff',
  },
});
