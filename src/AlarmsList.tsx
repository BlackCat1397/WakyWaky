import React, { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { AlarmPreview } from './AlarmPreview';

import { useAlarmsStore } from './stores/alarmsStore';

export function AlarmsList(): React.JSX.Element {
  const alarms = useAlarmsStore(state => state.alarms);

  const renderItem = useCallback(
    ({ item }: { item: AlarmEntry }) => (
      <AlarmPreview key={item._id} alarmInfo={item}/>
    ),
  []);

  return (
    <FlatList
      data={alarms}
      style={styles.list}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 8,
  },
});
