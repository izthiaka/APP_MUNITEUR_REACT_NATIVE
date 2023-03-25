import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import CountdownScreen from './Countdown';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Countdown" component={CountdownScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
