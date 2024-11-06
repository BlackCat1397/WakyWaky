import NativeAlarmManager from '../../../specs/NativeAlarmManager';
import { addAlarm } from '../../stores/alarmsStore';

export const AlarmManager = {
  createAlarm: (alarm: AlarmEntry) => {
    NativeAlarmManager.createAlarm(alarm._id, alarm.time);
    addAlarm(alarm);
  },
};
