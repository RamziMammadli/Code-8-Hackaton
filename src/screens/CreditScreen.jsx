import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CreditScreen = ({navigation}) => {

    const goApply = () => {
        navigation.navigate('ApplyOneScreen')
    }

  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <Image source={require('../assets/png/credit.png')} />
        <Text style={styles.firstText}>Kredit müraciətiniz yoxdur</Text>
        <Text style={styles.secText}>Yeni Müraciət edərək kredit sorğusu göndərə bilərsiniz.</Text>
      </View>
      <View>
        <Image source={require('../assets/png/info.png')}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={goApply}>
        <Image source={require('../assets/png/plus.png')}/>
        <Text style={styles.btnText}>Kredit müraciəti</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#fff'
  },
  firstText: {
    fontSize: 20,
    color: '#000',
    fontWeight:'500'
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    marginTop:190
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#0F9071',
    flexDirection:'row'
  },
  btnText: {
    color: '#fff',
    paddingLeft:5,
    fontSize:16
  },
  secText:{
    color: '#7E7E7E',
    fontSize:14,
    paddingTop:10
  }
});
