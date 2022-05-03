import React from 'react';
import {Button, FlatList, Text} from 'react-native';
import {ListItem} from '../components/ListItem';
import {useFirstData} from '../hooks/useFirstData';
import {useDispatch} from 'react-redux';
import {addToFirstStore} from '../redux/slices/firstSlice';

export const Screen3 = () => {
  const firstData = useFirstData();
  const dispatch = useDispatch();

  const addRandomData = () => {
    const id = `${Math.floor(Math.random() * 10)}`;
    const newItem = {id, name: `name-${id}`};
    dispatch(addToFirstStore(newItem));
  };

  return (
    <>
      <Text>Total first: {firstData.length}</Text>
      <Button title={'add random'} onPress={addRandomData} />
      <FlatList
        data={firstData}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <ListItem data={item} />}
      />
    </>
  );
};
