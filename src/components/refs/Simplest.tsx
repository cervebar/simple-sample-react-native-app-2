import React, {useRef} from 'react';
import {Button, Text} from 'react-native';

/**
 * refs doesn't cause component rerender
 */
export const Simplest = () => {
  const simpleRef = useRef<number>(0);

  return (
    <>
      <Button
        title="add 1 to ref(will not show)"
        onPress={() => {
          simpleRef.current = simpleRef.current + 1;
        }}
      />
      <Text>{simpleRef.current}</Text>
    </>
  );
};
