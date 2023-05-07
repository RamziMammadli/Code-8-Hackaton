import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Slider,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ApplyOneScreen = ({navigation}) => {
  const [azn, setAzn] = useState('0');
  const [faiz, setFaiz] = useState('0');
  const [time, setTime] = useState('0');

  const handleAznChange = value => {
    setAzn(value.toString());
  };

  const handleTimeChange = value => {
    setTime(value.toString());
  };

  const handleFaizChange = value => {
    setFaiz(value.toString());
  };

  const goApply = () => {
    navigation.navigate('ApplyTwoScreen');
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
          <View style={{marginTop: 30, height: 100}}>
            <Text style={{fontSize: 14, color: '#48494A', marginBottom: 10}}>
              Kredit məbləği
            </Text>
            <View style={styles.inp}>
              <TextInput value={azn} onChange={setAzn} />
              <Text>AZN</Text>
            </View>
            <View style={styles.slider}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={30000}
                step={100}
                minimumTrackTintColor="#0E8367"
                maximumTrackTintColor="#000000"
                onValueChange={handleAznChange}
              />
            </View>
          </View>
          <View style={{marginTop: 30, height: 100}}>
            <Text style={{fontSize: 14, color: '#48494A', marginBottom: 10}}>
              Kredit müddəti
            </Text>
            <View style={styles.inp}>
              <TextInput value={time} onChange={setTime} />
              <Text>Ay</Text>
            </View>
            <View style={styles.slider}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={3}
                maximumValue={36}
                step={1}
                minimumTrackTintColor="#0E8367"
                maximumTrackTintColor="#000000"
                onValueChange={handleTimeChange}
              />
            </View>
          </View>
          <View style={{marginTop: 30, height: 100}}>
            <Text style={{fontSize: 14, color: '#48494A', marginBottom: 10}}>
              Faiz dərəcəsi
            </Text>
            <View style={styles.inp}>
              <TextInput value={faiz} onChange={setFaiz} />
              <Text>%</Text>
            </View>
            <View style={styles.slider}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={8}
                maximumValue={30}
                step={1}
                minimumTrackTintColor="#0E8367"
                maximumTrackTintColor="#000000"
                onValueChange={handleFaizChange}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.button} onPress={goApply}>
          <Text style={styles.buttonText}>Davam et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApplyOneScreen;

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
    alignItems: 'center',
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
});
