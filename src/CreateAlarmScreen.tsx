import React, { useState } from 'react';
import { Button, SafeAreaView, View, StyleSheet, Text } from 'react-native';

import { createId } from '@paralleldrive/cuid2';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import { useWeekdays } from './utils/useWeekdays';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AlarmManager } from './api/AlarmManager/AlarmManager';
import { Colors } from './constants/Colors';
import { RootStackParamList } from '../App';
import { useAlarmsStore } from './stores/alarmsStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Create New Alarm'>;

export function CreateAlarmScreen({
  route,
}: Props): React.JSX.Element {
  const alarmId = route.params?.alarmId;
  const alarm = useAlarmsStore((state) => state.alarms.find(({ _id }) => _id === alarmId));

  const { days, handleDayPress } = useWeekdays(alarm?.days);

  const [hourIndex, setHourIndex] = useState(alarm ? alarm.time.hours - 1 : 1);
  const [minuteIndex, setMinuteIndex] = useState(alarm ? alarm.time.minutes : 1);

  const hours = (new Array(24)).fill(0).map((_, i) => (i + 1));
  const minutes = (new Array(60)).fill(0).map((_, i) => (i));

  const navigation = useNavigation();

  const handleSavePress = () => {
    const alarmToSave: AlarmEntry = {
      _id: alarmId ?? createId(),
      days,
      isActive: alarm ? alarm.isActive : true,
      time: {
        hours: hours[hourIndex],
        minutes: minutes[minuteIndex],
      },
    };

    AlarmManager.setAlarm(alarmToSave);
    navigation.goBack();
  };


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.scrollPickerContainer}>
        <ScrollPicker
          dataSource={hours}
          selectedIndex={hourIndex}
          onValueChange={(data, selectedIndex) => {
            setHourIndex(selectedIndex);
          }}
          itemTextStyle={styles.number}
          activeItemTextStyle={styles.number}
          wrapperHeight={180}
          wrapperBackground="#fff"
          itemHeight={60}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
        <ScrollPicker
          dataSource={minutes}
          selectedIndex={minuteIndex}
          onValueChange={(data, selectedIndex) => {
            setMinuteIndex(selectedIndex);
          }}
          itemTextStyle={styles.number}
          activeItemTextStyle={styles.number}
          wrapperHeight={180}
          wrapperBackground="#fff"
          itemHeight={60}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
      </View>
      <View style={styles.dayButtonsContainer}>
        {days.map((d, index) => (
          <Button
            key={d.title}
            title={d.title}
            color={d.isActive ? Colors.activated : Colors.inactive}
            onPress={() => handleDayPress(index)}
          />
        ))}
      </View>
      <View style={styles.saveButtonContainer}>
        <Button
          title="Save"
          onPress={handleSavePress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  scrollPickerContainer: {
    marginTop: 40,
    height: 180,
    width: 180,
    flexDirection: 'row',
  },
  dayButtonsContainer: {
    flexDirection: 'row',
  },
  saveButtonContainer: {
    marginBottom: 40,
  },
  number: {
    fontSize: 24,
  },
});
