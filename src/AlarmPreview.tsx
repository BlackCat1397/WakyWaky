import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { toggleAlarm } from './stores/alarmsStore';
import { Colors } from './constants/Colors';

export function AlarmPreview({
  alarmInfo,
}: {
  alarmInfo: AlarmEntry
}): React.JSX.Element {
  const handleActivnessToggle = useCallback(() => {
    toggleAlarm(alarmInfo._id);
  }, [alarmInfo._id]);

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{alarmInfo.time.hours.toString().padStart(2, '0')}:{alarmInfo.time.minutes.toString().padStart(2, '0')}</Text>
      <TouchableOpacity
        style={[styles.alarmIndicator, alarmInfo.isActive && styles.activeAlarmIndicator ]}
        hitSlop={16}
        onPress={handleActivnessToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    borderColor: Colors.dim,
    backgroundColor: Colors.cardBackground,
  },
  timeText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  alarmIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.deactivated,
  },
  activeAlarmIndicator: {
    backgroundColor: Colors.activated,
  },
});
