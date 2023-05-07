import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';

const OtpScreen = ({navigation}) => {
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (index, text) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);

    if (index < 3 && text) {
      inputRefs.current[index + 1].focus();
    }
  };

  // check if all the input values are filled
  const isButtonActive = inputValues.every(value => value !== '');

  const handleSubmit = () => {
    navigation.navigate('CreditScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headBox}>
        <View style={styles.head}>
          <Pressable style={styles.arrowBox} onPress={() => navigation.navigate('LoginScreen')}>
            <Image source={require('../assets/png/leftArrow.png')} />
          </Pressable>
          <Text></Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.headText}>Təsdiqləmə</Text>
          <Text style={styles.headText2}>
            Elektron poçtunuza göndərilən kodu daxil edin.
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          {inputValues.map((value, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={[
                styles.input,
                value ? styles.filledInput : styles.emptyInput,
              ]}
              onChangeText={text => handleInputChange(index, text)}
              value={value}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
      </View>
      {/* disable the button if input is empty */}
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isButtonActive ? '#0F9071' : '#91CCBE'},
        ]}
        disabled={!isButtonActive}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Təsdiqlə</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '20%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  emptyInput: {
    borderColor: '#E0E0E0',
  },
  filledInput: {
    borderColor: '#E0E0E0',
  },
  headText: {
    fontSize: 32,
    fontWeight: '500',
    color: '#000',
    marginTop: 50,
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
    width: '100%',
  },
  headText2: {
    fontSize: 14,
    color: '#9E9E9E',
    fontWeight: '400',
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 125,
  },
  arrowBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  head: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputsContainer: {
    flexDirection:'row',
    width:'70%',
    alignItems:'center',
    justifyContent:'space-between',
    height:165
  }
});
