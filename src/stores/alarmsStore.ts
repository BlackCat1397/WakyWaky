import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AlarmsState {
  alarms: Array<AlarmEntry>;
}

interface Action {
  addAlarm: (alarm: AlarmEntry) => void,
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

export const useAlarmsStore = create<AlarmsState & Action>()(persist(
  (set) => ({
    alarms: [],
    addAlarm: (alarm: AlarmEntry) => set((state) => ({ alarms: [...state.alarms, alarm] })),
  }),
  {
    name: 'alarms-storage',
    storage: zustandStorage,
  }
));
