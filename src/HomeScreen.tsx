import React from 'react';
import { SafeAreaView } from 'react-native';

import { AlarmsList } from './AlarmsList';
import { CreateAlarmButton } from './CreateAlarmButton';

export function HomeScreen(): React.JSX.Element {
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
