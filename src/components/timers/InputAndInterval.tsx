import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const isNumeric = (value: string) => {
  return /^\d+$/.test(value);
};

export const InputAndInterval = () => {
  const [count, setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number>(1000);
  const [delayInput, setDelayIpnut] = useState<number>(1000);

  const timer = useRef<any>();
  const callBack = useRef<any>();

  useEffect(() => {
    callBack.current = () => setCount(count + 1);
  }, [count]);

  useEffect(() => {
    startTimer(delay);
    return stopTimer;
  }, [delay]);

  const setValue = (input: string) => {
    if (!isNumeric(input)) {
      Alert.alert('Alert', 'Not a number character');
    } else {
      setDelayIpnut(Number(input));
    }
  };

  const changeDelay = () => {
    setDelay(delayInput);
    startTimer(delayInput);
  };

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = null;
  };
  const startTimer = (delay: number) => {
    if (timer.current) {
      // prevent if any running before
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => callBack.current(), delay);
  };

  return (
    <>
      <Text>---------input and interval -------------</Text>
      <Text>count: {count}</Text>
      <View style={{flex: 1}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={setValue}
          value={delayInput + ''}
        />
        <TouchableOpacity onPress={changeDelay}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <Button title={'stop'} onPress={stopTimer} />
      </View>
    </>
  );
};
