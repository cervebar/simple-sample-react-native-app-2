import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Button, Text} from 'react-native';

const Child = React.memo(
  ({functionToCall, title}: {functionToCall?: () => void; title: string}) => {
    console.log(`rerendering ${title}`);
    const rerendered = useRef<number>(0);

    useEffect(() => {
      rerendered.current = rerendered.current + 1;
    }, [title, functionToCall]);

    return (
      <>
        <Text>{title}</Text>
        <Text>{rerendered.current}</Text>
        {functionToCall && <Button title="call fc" onPress={functionToCall} />}
      </>
    );
  },
);

export const Callback = () => {
  const [someState, setSomeState] = useState<number>(0);
  const noCallbackFunction = () => {
    console.log('calling 1');
  };

  const withCallbackFunction = useCallback(() => {
    console.log('calling 2');
  }, []);

  return (
    <>
      <Text>callback</Text>
      <Button
        title="change parent state"
        onPress={() => setSomeState(someState + 1)}
      />
      <Child title="no callback" functionToCall={noCallbackFunction} />
      <Child title="with callback" functionToCall={withCallbackFunction} />
      <Child title="no function" />
    </>
  );
};
