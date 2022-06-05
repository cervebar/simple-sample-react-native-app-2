import React, {useCallback} from 'react';
import {useState} from 'react';
import {Button, TextInput, StyleSheet, Text, View} from 'react-native';
import {useTimer} from './useTimer';

export const StartStop2 = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);

  const handler = useCallback(() => setCounter(counter => counter + 1), []);
  const {start, stop} = useTimer(handler, delay);

  const onInput = text => {
    // todo validations
    setDelay(Number(text));
  };

  return (
    <View style={styles.app}>
      <Text style={styles.counter}>counter: {counter}</Text>
      <Text>current delay: {delay}</Text>
      <TextInput style={styles.input} onChangeText={onInput} />
      <Button style={styles.link} onPress={start} title="start" />
      <Button style={styles.link} onPress={stop} title="stop" />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
  },
  counter: {
    padding: 30,
    height: 80,
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center',
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center',
  },
  link: {
    color: '#1B95E0',
  },
  code: {
    fontFamily: 'monospace, monospace',
  },
});
