import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Slider,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  
  const ApplyTwoScreen = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
    const goApply = () => {
      navigation.navigate('SuccessScreen');
    };
  
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <View style={styles.arrow}>
              <Image source={require('../assets/png/leftArrow.png')} />
            </View>
            <Text style={styles.text}>Kredit müraciəti</Text>
            <View style={styles.empty}></View>
          </View>
          <View style={styles.middle}>
            <View style={styles.inpBox}>
              <TextInput placeholder="Yaş" />
            </View>
            <View style={styles.inpBox}>
              <TextInput placeholder="Əmək haqqı" />
            </View>
            <View style={styles.inpBox}>
              <TextInput placeholder="Kredit məqsədi" />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={[styles.selectBox, selectedOption === "personal" && styles.selectedBox]} onPress={() => handleOptionSelect("personal")}>
                <Text>Şəxsi ev</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.selectBox, selectedOption === "rent" && styles.selectedBox]} onPress={() => handleOptionSelect("rent")}>
                <Text>Kirayə</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.selectBox, selectedOption === "mortgage" && styles.selectedBox]} onPress={() => handleOptionSelect("mortgage")}>
                <Text>İpoteka</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.button} onPress={goApply}>
            <Text style={styles.buttonText}>Tamamla</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default ApplyTwoScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      justifyContent: 'space-between',
    },
    arrow: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#E0E0E0',
      paddingHorizontal: 15,
      paddingVertical: 12,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    empty: {
      paddingHorizontal: 15,
      paddingVertical: 12,
    },
    text: {
      fontSize: 16,
      fontWeight: '400',
      color: '#000',
    },
    middle: {
      marginTop: 40,
      height: 230,
      justifyContent: 'space-between',
    },
    inp: {
      borderRadius: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    slider: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems
  : 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#0F9071',
  },
  btnBox: {
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  inpBox: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#CAC4D0',
    paddingHorizontal: 10,
  },
  selectBox: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#CAC4D0',
  },
});
