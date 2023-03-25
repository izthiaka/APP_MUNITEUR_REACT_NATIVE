import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const CountdownScreen = ({ route }) => {
  const { timeRemaining } = route.params;
  const [currentTime, setCurrentTime] = useState(timeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 1000);

    if (currentTime === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>
        Temps restant : {Math.floor(currentTime / 60)} minutes {currentTime % 60} secondes
      </Text>
    </View>
  );
};

export default CountdownScreen;
