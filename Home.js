import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [inputTime, setInputTime] = useState('');

  const handleSetTime = () => {
    const inputSeconds = parseInt(inputTime) * 60;
    setTimeRemaining(inputSeconds);
    setInputTime('');
    navigation.navigate('Countdown', { timeRemaining: inputSeconds });
  };

  const handleInputChange = (text) => {
    setInputTime(text);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 24 }}>
        Entrez le temps en minutes :
      </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 24, padding: 8 }}
        keyboardType="numeric"
        value={inputTime}
        onChangeText={handleInputChange}
      />
      <Button title="Démarrer le minuteur" onPress={handleSetTime} />
    </View>
  );
};

export default HomeScreen;
