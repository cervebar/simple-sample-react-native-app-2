import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, RouteScreen11a} from './navigationParams';

export const Screen11 = () => {
  const nav = useNavigation<NavigationProps>();
  return (
    <>
      <Button
        title="go to test A"
        onPress={() => nav.navigate(RouteScreen11a)}
      />
    </>
  );
};
