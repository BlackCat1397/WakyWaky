import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { toggleAlarm } from './stores/alarmsStore';

export function AlarmPreview({
  alarmInfo,
}: {
  alarmInfo: AlarmEntry
}): React.JSX.Element {
  const handleActivnessToggle = useCallback(() => {
    toggleAlarm(alarmInfo._id);
  }, [alarmInfo._id]);

  return (
    <View style={styles.alarmPreviewContainer}>
      <Text style={styles.alarmTimeText}>{alarmInfo.time.hours.toString().padStart(2, '0')}:{alarmInfo.time.minutes.toString().padStart(2, '0')}</Text>
      <TouchableOpacity onPress={handleActivnessToggle} style={[styles.alarmIndicator, alarmInfo.isActive && styles.activeAlarmIndicator ]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  alarmPreviewContainer: {
    borderWidth: 1,
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  alarmTimeText: {},
  alarmIndicator: {
    width: 10,
    height: 10,
    borderWidth: 1,
    backgroundColor: '#a32',
  },
  activeAlarmIndicator: {
    backgroundColor: '#2a3',
  },
});
