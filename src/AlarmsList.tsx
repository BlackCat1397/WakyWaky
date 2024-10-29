import React from 'react';
import { FlatList } from 'react-native';
import { AlarmPreview } from './AlarmPreview';

import { createId } from '@paralleldrive/cuid2';


const mockData: Array<AlarmEntry> = [{
  _id: createId(),
}, {
  _id: createId(),
}];

export function AlarmsList(): React.JSX.Element {
  return (
    <FlatList
      data={mockData}
      renderItem={({ item }) => <AlarmPreview key={item._id} alarmInfo={item}/>}
    />
  );
}
