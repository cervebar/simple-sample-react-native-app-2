import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// 3) udelat "chytre naseptavani"
// - do text inputu psat text. Kdyz se vic jak 3 vteriny nic nepise, nahore nad text inutem se zobrazi nejakej napis, treba "Dudlik". kdyz se zase zacne psat, napis nahore mizi a znovu se pise a kdyz se prestane psat na vic jak 3 vteriny...
export const TextTime = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const timerRef = useRef<any>();

  const textChange = () => {
    clearTimeout(timerRef.current); //stop previous timer
    setIsVisible(false);
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  });

  return (
    <View>
      <Text>text time</Text>
      {isVisible && <Text>Dudlik</Text>}
      <TextInput style={styles.white} onChangeText={textChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  white: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});
