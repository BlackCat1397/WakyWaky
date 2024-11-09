/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import './gesture-handler';
import { HomeScreen } from './src/HomeScreen';
import { CreateAlarmScreen } from './src/CreateAlarmScreen';
import { NavigationContainer } from '@react-navigation/native';


export type RootStackParamList = {
  Home: undefined;
  'Create New Alarm': {
    alarmId?: string,
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create New Alarm" component={CreateAlarmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
