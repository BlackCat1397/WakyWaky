import { useState } from 'react';

import { WEEK } from '../constants';

export const useWeekdays = (defaultDays?: Array<Day>) => {
  const [days, setDays] = useState<Array<Day>>(defaultDays ?? WEEK);

  const handleDayPress = (dayIndex: number) => {
    const updatedDays = days.map((day, index) => {
      if (index === dayIndex) {
        return { ...day, isActive: !day.isActive };
      }
      return day;
    });
    setDays(updatedDays);
  };

  return { days, handleDayPress };
}