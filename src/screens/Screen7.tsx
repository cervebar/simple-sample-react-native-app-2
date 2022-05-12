import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import {NavigationProps, RouteHome} from './navigationParams';
import {useNavigation} from '@react-navigation/native';

/**
 * HOW TO PREVENT:
 * Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
 *     in Screen7 (at SceneVie
 *
 * but!!! do not use mounted/unmouted pattern
 * https://medium.com/doctolib/react-stop-checking-if-your-component-is-mounted-3bb2568a4934
 */
export const Screen7 = () => {
  const nav = useNavigation<NavigationProps>();
  const [data, setData] = useState<string>();

  useEffect(() => {
    const asynFetch = async () => {
      function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      await sleep(5000);
      setData('Hello World');
    };
    asynFetch().catch(error => {
      console.log('error', error);
      if (error.name === 'AbortError') {
        return; // simple skip on umnout
      }
      // do whatever error
    });
  }, []);

  return (
    <>
      <Text>{data}</Text>
      <Button
        title={'go to different screen '}
        onPress={() => nav.navigate(RouteHome)}
      />
    </>
  );
};
