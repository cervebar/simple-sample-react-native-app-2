import React from 'react';
import {Every5Seconds} from '../components/timers/Every5Seconds';
import {HideMessage} from '../components/timers/HideMessage';
import {TextTime} from '../components/timers/TextTime';

export const Screen6 = () => {
  return (
    <>
      <HideMessage />
      <TextTime />
      <Every5Seconds />
    </>
  );
};
