import React, {ForwardedRef, ReactElement, useRef} from 'react';
import {Button, Text, TextInput} from 'react-native';

interface InputWrapperT {
  title: string;
  children: ReactElement;
}

const InputWrapper = React.forwardRef<any, InputWrapperT>((props, ref) => {
  return (
    <>
      <Text>{props.title}</Text>
      {props.children}
      <TextInput ref={ref} />
    </>
  );
});

/**
 *
 */
export const Screen10 = () => {
  const inputRef = useRef<any>();
  const focusInput = () => {
    inputRef.current.focus();
  };
  const blurInput = () => {
    inputRef.current.blur();
  };

  return (
    <>
      <Button title="focus input" onPress={focusInput} />
      <Button title="blur input" onPress={blurInput} />
      <InputWrapper ref={inputRef} title="kvak">
        <Text>some children</Text>
      </InputWrapper>
    </>
  );
};
