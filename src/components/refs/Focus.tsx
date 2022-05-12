import React, {useRef} from 'react';
import {Button, TextInput} from 'react-native';

export const Focus = () => {
  // focus
  const textInputRef1 = useRef<any>();
  const textInputRef2 = useRef<any>();

  return (
    <>
      <Button
        title="focus 1"
        onPress={() => {
          textInputRef1.current.focus();
        }}
      />
      <Button
        title="focus 2"
        onPress={() => {
          textInputRef2.current.focus();
        }}
      />
      <TextInput ref={textInputRef1} />
      <TextInput ref={textInputRef2} />
    </>
  );
};
