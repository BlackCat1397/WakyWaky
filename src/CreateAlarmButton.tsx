import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from './constants/Colors';

export function CreateAlarmButton(): React.JSX.Element {
  const navigation = useNavigation();

  const handleCreateAlarmPress = useCallback(() => navigation.navigate('Create New Alarm'), [navigation]);

  return (
    <TouchableOpacity
      onPress={handleCreateAlarmPress}
      style={styles.button}
    >
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}

const size = 40;

const styles = StyleSheet.create({
  button: {
    width: size,
    height: size,
    alignItems: 'center',
    borderRadius: size / 2,
    justifyContent: 'center',
    backgroundColor: Colors.dim,
    position: 'absolute',
    bottom: 32,
    right: 17,
  },
  text: {
    color: Colors.textInverted,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -4,
    marginRight: -1,
  },
});
