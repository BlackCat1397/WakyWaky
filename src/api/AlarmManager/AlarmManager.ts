import NativeAlarmManager from '../../../specs/NativeAlarmManager';
import { setAlarm } from '../../stores/alarmsStore';

export const AlarmManager = {
  setAlarm: (alarm: AlarmEntry) => {
    // NativeAlarmManager.createAlarm(alarm._id, alarm.time);
    setAlarm(alarm);
  },
};
