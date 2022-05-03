import React from 'react';
import {Button, Text} from 'react-native';
import {ItemT} from '../types/ItemT';
import {useDispatch} from 'react-redux';
import {removeFromFirstStore} from '../redux/slices/firstSlice';

export type ListItemProps = {
  data: ItemT;
};

export const ListItem = ({data}: ListItemProps) => {
  const {id, name} = data;
  const dispatch = useDispatch();

  const removeItem = (id: string) => {
    dispatch(removeFromFirstStore(id));
  };

  return (
    <>
      <Text>{`${id} - ${name}`}</Text>
      <Button title={'remove'} onPress={() => removeItem(id)} />
    </>
  );
};
