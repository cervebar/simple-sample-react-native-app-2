import React from 'react';
import {Every5Seconds} from '../components/timers/Every5Seconds';
import {HideMessage} from '../components/timers/HideMessage';
import {TextTime} from '../components/timers/TextTime';
import {StartStop2} from '../components/timers/StartStop2';
import {StartStop1} from '../components/timers/StartStop1';

export const Screen6 = () => {
  return (
    <>
      <HideMessage />
      <TextTime />
      <Every5Seconds />
      <StartStop1 />
      <StartStop2 />
    </>
  );
};
