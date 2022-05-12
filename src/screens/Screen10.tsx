import React, {
  ForwardedRef,
  ReactElement,
  useImperativeHandle,
  useRef,
} from 'react';
import {Button, StyleSheet, Text, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface InputWrapperT {
  type: string;
  children: ReactElement;
}

const InputWrapper = React.forwardRef<any, InputWrapperT>((props, ref) => {
  const textInputRef = useRef<any>();
  useImperativeHandle(
    ref,
    () => {
      return {
        validate: () => {
          if (props.type === 'phone') {
            console.log('validation phone');
            if (Math.random() < 0.5) {
              // valid
              textInputRef.current.setNativeProps({
                borderColor: 'green',
                borderWidth: 1,
              });
            } else {
              // not valid
              textInputRef.current.setNativeProps({
                borderColor: 'red',
                borderWidth: 1,
              });
            }
          }
        },
      };
    },
    [props.type],
  );

  return (
    <>
      <Text>{props.type}</Text>
      {props.children}
      <TextInput ref={textInputRef} />
    </>
  );
});

/**
 * useImperativeHandle
 */
export const Screen10 = () => {
  const phoneRef = useRef<any>();

  const validateAll = () => {
    phoneRef.current.validate();
  };

  return (
    <>
      <Button title="validate all" onPress={validateAll} />
      <InputWrapper ref={phoneRef} type="phone">
        <Text>some children</Text>
      </InputWrapper>
    </>
  );
};
