import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export function CreateAlarmButton(): React.JSX.Element {
  const size = 40;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Create New Alarm')}
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        borderRadius: size / 2,
        justifyContent: 'center',
        backgroundColor: '#888',
        position: 'absolute',
        bottom: size,
        right: size,
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
          paddingBottom: 4,
        }}
      >+</Text>
    </TouchableOpacity>
  );
}
