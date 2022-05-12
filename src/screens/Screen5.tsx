import React, {useEffect, useRef, useState} from 'react';
import {Text, Button} from 'react-native';

/**
 * setTimeout, clearTimeout
 * setInterval, clearInterval
 * setImmediate, clearImmediate
 * requestAnimationFrame, cancelAnimationFrame
 * docs: https://reactnative.dev/docs/timers
 */
export const Screen5 = () => {
  const [isTimeoutVisible, setIsTimeoutVisible] = useState<boolean>(false);
  const [timerRefCalledCount, setTimerRefCalledCount] = useState<number>(0);

  // 1) using timeout outside the useEffect
  const timerRefCalledCountRef = useRef<number>();
  const timerRef = useRef<any>();
  const callTimer = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    timerRef.current = setTimeout(() => {
      setTimerRefCalledCount(timerRefCalledCount + 1);
    }, 2000);
  };

  // 2) execute timeout once on component mount
  useEffect(() => {
    // ref for actual timerRefCalledCount
    timerRefCalledCountRef.current = timerRefCalledCount;

    // timer inside effect
    const timer = setTimeout(() => setIsTimeoutVisible(true), 5000);
    return () => {
      //always clean timeout on component unmout to prevent memory leaks
      clearTimeout(timer); // clen timer in useEffect
      clearTimeout(timerRef.current); // clear timer in ref
    };
  }, [timerRefCalledCount]);

  return (
    <>
      <Button onPress={callTimer} title="CALL timer ref" />
      <Text>{`timer ref called: ${timerRefCalledCount} times`}</Text>
      {isTimeoutVisible && <Text>after 5 seconds</Text>}
    </>
  );
};
