import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  createAlarm(id: string, time: { hours: number, minutes: number }): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeAlarmManager',
);
