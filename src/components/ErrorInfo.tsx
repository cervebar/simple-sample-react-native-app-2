import React from 'react';
import {Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {resetSecondState} from '../redux/slices/secondSlice';
import {useDispatch} from 'react-redux';

export type ErrorInfoProps = {
  error: any; //TODO better
};

export const ErrorInfo = ({error}: ErrorInfoProps) => {
  const nav = useNavigation();
  const dispatch = useDispatch();

  const goBackAndReset = () => {
    dispatch(resetSecondState());
    nav.goBack();
  };

  return (
    <>
      <Text>Some error occurred</Text>
      {error.message && <Text>{`${error?.message}`}</Text>}
      {error.name && <Text>{`${error?.name}`}</Text>}
      <Button title={'ok'} onPress={goBackAndReset} />
    </>
  );
};
