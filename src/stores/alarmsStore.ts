import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AlarmsState {
  alarms: Array<AlarmEntry>;
}

import { PersistStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const zustandStorage: PersistStorage<AlarmsState> = {
  setItem: (name, value) => {
    return storage.set(name, JSON.stringify(value));
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return (value && JSON.parse(value)) ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

export const useAlarmsStore = create<AlarmsState>()(persist(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (set) => ({
    alarms: [],
  }),
  {
    name: 'alarms-storage',
    storage: zustandStorage,
  }
));

export const setAlarm = (alarm: AlarmEntry) =>
  useAlarmsStore.setState((state) => {
    const alarmIndex = state.alarms.findIndex(({ _id }) => _id === alarm._id);
    if (alarmIndex !== -1) {
      return ({
        alarms: state.alarms.map((value) => (
          value._id === alarm._id ? alarm : value
        )),
      });
    } else {
      return ({ alarms: [...state.alarms, alarm] });
    }
  });

export const toggleAlarm = (alarmId: string) =>
  useAlarmsStore.setState((state) => ({
    alarms: state.alarms.map((a) => (
      a._id === alarmId ? {
        ...a,
        isActive: !a.isActive,
      } : a
    )),
  }));
