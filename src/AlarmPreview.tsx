import React from 'react';
import { View, Text } from 'react-native';

export function AlarmPreview({
  alarmInfo,
}: {
  alarmInfo: AlarmEntry
}): React.JSX.Element {
  return (
    <View
      style={{
        borderWidth: 1,
        height: 64,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 16,
        paddingHorizontal: 16,
      }}
    >
      <Text>{alarmInfo.time.hours}:{alarmInfo.time.minutes}</Text>
      <View
        style={{
          width: 10,
          height: 10,
          borderWidth: 1,
          backgroundColor: alarmInfo.isActive ? '#2a3' : '#a32',
        }}
      />
    </View>
  );
}
