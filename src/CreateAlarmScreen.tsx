import React, { useState } from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native';

import { createId } from '@paralleldrive/cuid2';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import { useWeekdays } from './utils/useWeekdays';
import { useNavigation } from '@react-navigation/native';
import { AlarmManager } from './api/AlarmManager/AlarmManager';


export function CreateAlarmScreen(): React.JSX.Element {
  const { days, handleDayPress } = useWeekdays();

  const [hourIndex, setHourIndex] = useState(1);
  const [minuteIndex, setMinuteIndex] = useState(1);

  const hours = (new Array(24)).fill(0).map((_, i) => (i + 1));
  const minutes = (new Array(60)).fill(0).map((_, i) => (i));

  const navigation = useNavigation();

  const handleSavePress = () => {
    const alarmToSave: AlarmEntry = {
      _id: createId(),
      days,
      isActive: true,
      time: {
        hours: hours[hourIndex],
        minutes: minutes[minuteIndex],
      },
    };

    AlarmManager.createAlarm(alarmToSave);
    navigation.goBack();
  };


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.scrollPickerContainer}>
        <ScrollPicker
          dataSource={hours}
          renderItem={(data, _) => {
            return (
              <Text>{data}</Text>
            );
          }}
          selectedIndex={hourIndex}
          onValueChange={(data, selectedIndex) => {
            setHourIndex(selectedIndex);
          }}
          wrapperHeight={180}
          wrapperBackground="#fff"
          itemHeight={60}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
        <ScrollPicker
          dataSource={minutes}
          renderItem={(data, _) => {
            return (
              <Text>{data}</Text>
            );
          }}
          selectedIndex={minuteIndex}
          onValueChange={(data, selectedIndex) => {
            setMinuteIndex(selectedIndex);
          }}
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
            color={d.isActive ? '#0a6' : '#666'}
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
});
