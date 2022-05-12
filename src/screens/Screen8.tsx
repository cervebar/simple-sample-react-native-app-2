import React from 'react';
import {Focus} from '../components/refs/Focus';
import {Simplest} from '../components/refs/Simplest';
import {ForwardRefSimple} from '../components/refs/ForwardRefSimple';

export const Screen8 = () => {
  return (
    <>
      <Simplest />
      <Focus />
      <ForwardRefSimple />
    </>
  );
};
