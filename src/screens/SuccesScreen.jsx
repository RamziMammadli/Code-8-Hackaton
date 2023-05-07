import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SuccessScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <Image source={require('../assets/png/pic.png')} />
        <Text style={styles.firstText}>Müraciətiniz qəbul olundu!</Text>
        <Text style={{textAlign:'center'}}>Əməkdaşlarımız sizinlə ən qısa zamanda əlaqə saxlayacaqdır.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreditScreen')}>
        <Text style={styles.btnText}>Ana səhifə</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;

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
    alignContent:'center'
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
