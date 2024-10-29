/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import {
  AlarmsList,
} from './src/AlarmsList';

import {
  CreateAlarmButton,
} from './src/CreateAlarmButton';


function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <AlarmsList />
      <CreateAlarmButton />
    </SafeAreaView>
  );
}

export default App;
