import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';

  
  const LoginScreen = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (text) => {
      setInputValue(text);
    }

    const handleSubmit = () => {
        navigation.navigate('OtpScreen')
    }
  
    const isButtonActive = inputValue.endsWith('@gmail.com');
  
    return (
      <View style={styles.container}>
        <View style={styles.headBox}>
          <Text style={styles.headText}>Daxil Ol</Text>
          <View style={styles.inpBox}>
            <View style={styles.inputBox}>
              <Image source={require('../assets/png/Letter.png')} />
              <TextInput 
                placeholder="Elektron poçt" 
                style={styles.input} 
                onChangeText={handleInputChange} 
              />
            </View>
            <TouchableOpacity style={{marginTop:15}}><Text style={{color:'black'}} onPress={() => navigation.navigate('RegisterScreen')}>Hesabınız yoxdur? Qeydiyyat</Text></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: isButtonActive ? '#0F9071' : '#91CCBE' }]} 
          disabled={!isButtonActive}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Davam et</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent:'space-between'
    },
    input: {
      width: '100%',
      paddingLeft:15
    },
    headText: {
      fontSize: 32,
      fontWeight: '500',
      color: '#000',
      marginTop: 50,
    },
    inputBox: {
      borderRadius: 7,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      width: '100%',
      borderColor:'#F5F5F5'
    },
    inpBox: {
      width: '100%',
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#fff',
    },
    button: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      borderRadius: 10,
    },
    btnBox: {
      width: '100%',
      justifyContent: 'space-between',
      paddingTop: 410,
    },
    headBox: {
      alignItems:'center'
    }
  });
  