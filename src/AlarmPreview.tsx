import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { toggleAlarm } from './stores/alarmsStore';
import { Colors } from './constants/Colors';
import { useNavigation } from '@react-navigation/native';

export function AlarmPreview({
  alarmInfo,
}: {
  alarmInfo: AlarmEntry
}): React.JSX.Element {
  const handleActivnessToggle = useCallback(() => {
    toggleAlarm(alarmInfo._id);
  }, [alarmInfo._id]);

  const navigation = useNavigation();

  const handleAlarmPress = useCallback(() => {
    navigation.navigate('Create New Alarm', {
      alarmId: alarmInfo._id,
    });
  }, [navigation, alarmInfo._id]);


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleAlarmPress}
    >
      <View style={styles.timeContainer}>
        <TouchableOpacity
          style={[styles.alarmIndicator, alarmInfo.isActive && styles.activeAlarmIndicator ]}
          hitSlop={16}
          onPress={handleActivnessToggle}
        />
        <Text style={styles.timeText}>{alarmInfo.time.hours.toString().padStart(2, '0')}:{alarmInfo.time.minutes.toString().padStart(2, '0')}</Text>
      </View>
      <View style={styles.daysContainer}>
        { alarmInfo.days.filter(day => day.isActive).map(day => (
          <Text style={styles.dayText} key={day.title}>
            { day.title }
          </Text>
        )) }
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    height: 64,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginVertical: 8,
    paddingTop: 11,
    paddingBottom: 10,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    borderColor: Colors.dim,
    backgroundColor: Colors.cardBackground,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dayText: {
    fontSize: 13,
    marginRight: 4,
  },
  timeText: {
    marginLeft: 8,
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
