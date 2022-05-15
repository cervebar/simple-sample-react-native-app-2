import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

export const StartStop2 = () => {
  const [count, setCount] = useState<number>(0);
  const [delayInput, setDelayInput] = useState<number>(1000);
  const [delay, setDelay] = useState<number>(1000);

  const timerRef = useRef<any>();
  const handlerRef = useRef<any>();

  useEffect(() => {
    handlerRef.current = () => setCount(count + 1);
  }, [count]);

  const stopTimer = useCallback(() => {
    if (!timerRef.current) {
      return;
    }
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const startTimer = useCallback(
    (delayInput: number) => {
      if (timerRef.current) {
        stopTimer();
      }
      timerRef.current = setInterval(() => {
        handlerRef.current();
      }, delayInput);
    },
    [delayInput],
  );

  useEffect(() => {
    startTimer(delay);
    return stopTimer;
  }, [delay, startTimer]);

  const submitAndStart = () => {
    setDelay(delayInput);
    // 1. approach
    // startTimer(delayInput);
    // 2. approach useEffect with delay
  };

  const changeDelay = (text: string) => {
    //validate
    setDelayInput(Number(text));
  };

  return (
    <>
      <Text>--------- start, stop 2 -------------</Text>
      <Text>count: {count}</Text>
      <View style={{flex: 1}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
          onChangeText={changeDelay}
          value={delayInput + ''}
        />
        <Button title={'submit and start'} onPress={submitAndStart} />
        <Button title={'stop'} onPress={stopTimer} />
      </View>
    </>
  );
};
