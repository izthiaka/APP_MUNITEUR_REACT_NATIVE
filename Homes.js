import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TimePickerScreen = ({ navigation }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    navigation.navigate('Countdown', { seconds: totalSeconds });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={hours}
          onValueChange={value => setHours(value)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {Array.from(Array(24).keys()).map(value => (
            <Picker.Item key={value} label={`${value}`} value={value} />
          ))}
        </Picker>
        <Text style={styles.separator}>:</Text>
        <Picker
          selectedValue={minutes}
          onValueChange={value => setMinutes(value)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {Array.from(Array(60).keys()).map(value => (
            <Picker.Item key={value} label={`${value}`.padStart(2, '0')} value={value} />
          ))}
        </Picker>
        <Text style={styles.separator}>:</Text>
        <Picker
          selectedValue={seconds}
          onValueChange={value => setSeconds(value)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {Array.from(Array(60).keys()).map(value => (
            <Picker.Item key={value} label={`${value}`.padStart(2, '0')} value={value} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    width: 80,
    height: 200,
    backgroundColor: '#fff',
  },
  pickerItem: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    fontSize: 50,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TimePickerScreen;
