import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, Button, FlatList, Text} from 'react-native';
import {ListItem} from '../components/ListItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchDataSecond,
  resetSecondState,
  selectAllSecondData,
} from '../redux/slices/secondSlice';
import useMyState from '../hooks/useMyState';
import {AppDispatch} from '../redux/store';
import {ErrorInfo} from '../components/ErrorInfo';

export const Screen4 = () => {
  const data = useSelector(selectAllSecondData);
  const dispatch = useDispatch<AppDispatch>();
  const fetchStatus = useMyState(state => state.second.status);
  const error = useMyState(state => state.second.error);

  const fetchAgain = () => {
    dispatch(resetSecondState());
  };

  useEffect(() => {
    if (fetchStatus === 'idle') {
      // @ts-ignore typescript version 4+ bug see README
      dispatch(fetchDataSecond());
    }
  }, [fetchStatus, dispatch]);

  if (fetchStatus === 'loading') {
    return <ActivityIndicator />;
  }
  if (fetchStatus === 'failed') {
    return <ErrorInfo error={error} />;
  }

  return (
    <>
      <Button title={'reload'} onPress={fetchAgain} />
      <Text>Total first: {data.length}</Text>
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <Text>{`${item.id} - ${item.name}`}</Text>}
      />
    </>
  );
};
