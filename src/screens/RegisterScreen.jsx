import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const RegisterScreen = ({navigation}) => {
    const [adValue, setAdValue] = useState('');
    const [soyadValue, setSoyadValue] = useState('');
  
    const handleAdInputChange = text => {
      setAdValue(text);
    };
  
    const handleSoyadInputChange = text => {
      setSoyadValue(text);
    };
  
    const handleSubmit = () => {
      navigation.navigate('OtpScreen');
    };
  
    const isButtonActive = adValue.trim() !== '' && soyadValue.trim() !== '';
  
    return (
      <View style={styles.container}>
        <View style={styles.headBox}>
          <Text style={styles.headText}>Qeydiyyat</Text>
          <View style={styles.inpBox}>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Ad"
                style={styles.input}
                onChangeText={handleAdInputChange}
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Soyad"
                style={styles.input}
                onChangeText={handleSoyadInputChange}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isButtonActive ? '#0F9071' : '#91CCBE'},
          ]}
          disabled={!isButtonActive}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>Davam et</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      width: '100%',
    },
    headText: {
      fontSize: 32,
      fontWeight: '500',
      color: '#000',
      marginTop: 50,
      marginBottom:65
    },
    inputBox: {
      borderRadius: 7,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      width: '100%',
      borderColor:'#F5F5F5',
    },
    inpBox: {
      width: '100%',
      height: 120,
      alignItems: 'center',
      justifyContent: 'space-between',
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
      alignItems: 'center',
    },
  });
  