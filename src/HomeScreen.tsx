import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { AlarmsList } from './AlarmsList';
import { CreateAlarmButton } from './CreateAlarmButton';
import { Colors } from './constants/Colors';

export function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <AlarmsList />
      <CreateAlarmButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
