import React, {useEffect, useRef, useState} from 'react';
import {Button, Text} from 'react-native';

const MemoizedChild = React.memo(({text}: {text: string}) => {
  console.log(`rerendering ${text}`);
  return <Text>memoized {text}</Text>;
});

const NotMemoizedChild = ({text}: {text: string}) => {
  console.log(`rerendering ${text}`);
  return <Text>not memoized {text}</Text>;
};

const Child = ({
  children,
  functionToCall,
  title,
}: {
  children: React.ReactElement;
  functionToCall?: () => void;
  title: string;
}) => {
  const rerendered = useRef<number>(0);

  useEffect(() => {
    rerendered.current = rerendered.current + 1;
  }, [title, functionToCall]);

  return (
    <>
      <Text>{title}</Text>
      <Text>{rerendered.current}</Text>
      {functionToCall && <Button title="call fc" onPress={functionToCall} />}
      {children}
    </>
  );
};

export const ReactMemo = () => {
  const [someState, setSomeState] = useState<number>(0);

  return (
    <>
      <Text>callback</Text>
      <Button
        title="change parent state"
        onPress={() => setSomeState(someState + 1)}
      />
      <Child title="child one 1" functionToCall={() => {}}>
        <>
          <NotMemoizedChild text={'not memoized'} />
          <MemoizedChild text={'memoized'} />
        </>
      </Child>
    </>
  );
};
