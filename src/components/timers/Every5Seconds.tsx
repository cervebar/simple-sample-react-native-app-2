import React, {useState, useEffect, useRef} from 'react';
import {Text} from 'react-native';

// 2) Kazdych 5 vterin vypsat kolik casu uz uplynulo od namountovani komponenty
// - nastartujes komponentu, po 5 vterinach se zobrazi, ze program bezi už 5 vterin, po 2 vterinach napis zmizne

export const Every5Seconds = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const fromMoutSecRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fromMoutSecRef.current = fromMoutSecRef.current + 1;
      if (fromMoutSecRef.current % 5 === 0) {
        setIsVisible(true);
      }
      if (fromMoutSecRef.current % 5 === 2) {
        setIsVisible(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Text>every 5 seconds</Text>
      {isVisible && (
        <Text>{`component mounted before: ${fromMoutSecRef.current} seconds`}</Text>
      )}
      {!isVisible && <Text>not visible</Text>}
    </>
  );
};
