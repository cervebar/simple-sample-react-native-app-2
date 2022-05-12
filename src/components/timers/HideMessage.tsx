import React, {useEffect, useRef, useState} from 'react';
import {Text, Button} from 'react-native';

/**
 * setTimeout, clearTimeout
 * 1) Dej si do projektu Button, po kliknuti na nej vyskoci nad nim message. Nechat message po 3 vterinach zmizet.
 */
export const HideMessage = () => {
  const [message, setMessage] = useState<string | null>(null);
  const timerRef = useRef<any>();

  const showMessage = () => {
    setMessage('message for 3s');
    timerRef.current = setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current); //clean timer
  }, []);

  return (
    <>
      <Button onPress={showMessage} title="show message for 3s" />
      {message && <Text>{message}</Text>}
    </>
  );
};
