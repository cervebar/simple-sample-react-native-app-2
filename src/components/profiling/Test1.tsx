import React, {Profiler, useEffect, useState} from 'react';
import {Button, FlatList, Text} from 'react-native';
import {fetchDummyData} from './utils';
import {ItemT} from '../../types/ItemT';

export const Test1 = () => {
  const [counter, setCounter] = useState<number>(0);
  const [data, setData] = useState<ItemT[]>();
  useEffect(() => {
    fetchDummyData().then(res => {
      // @ts-ignore
      setData(res.data);
    });
  }, []);

  const renderItem = ({item}: {item: ItemT}) => {
    return <Text>{item.name}</Text>;
  };
  const logTimes = (
    id: any, // the "id" prop of the Profiler tree that has just committed
    phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: any, // time spent rendering the committed update
    baseDuration: any, // estimated time to render the entire subtree without memoization
    startTime: any, // when React began rendering this update
    commitTime: any, // when React committed this update
    interactions: any, // the Set of interactions belonging to this update
  ) => {
    console.log(`${id}'s ${phase} phase:---------------------------------`);
    console.log(`Actual time: ${actualDuration}`);
    console.log(`Base time: ${baseDuration}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
    console.log('interactions: ', interactions);
  };

  return (
    <Profiler id="test 1" onRender={logTimes}>
      {console.count('test1')}
      <>
        <Button title="rerender" onPress={() => setCounter(counter + 1)} />
        <FlatList data={data} renderItem={renderItem} />
      </>
    </Profiler>
  );
};
