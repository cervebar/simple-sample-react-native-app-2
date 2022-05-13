import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  NavigationProps,
  RouteScreen10,
  RouteScreen11,
  RouteScreen2,
  RouteScreen3,
  RouteScreen4,
  RouteScreen5,
  RouteScreen6,
  RouteScreen7,
  RouteScreen8,
  RouteScreen9,
} from './navigationParams';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const nav = useNavigation<NavigationProps>();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          <Text>Home screen</Text>
          <Button
            title={'go to screen 2 with nav params'}
            onPress={() =>
              nav.navigate(RouteScreen2, {
                data: {text1: 'text', number2: 1234},
              })
            }
          />
          <Button
            title={'go to screen 3 for redux'}
            onPress={() => nav.navigate(RouteScreen3)}
          />
          <Button
            title={'go to screen 4 API call'}
            onPress={() => nav.navigate(RouteScreen4)}
          />
          <Button
            title={'go to screen 5: timer, useEffect & ref'}
            onPress={() => nav.navigate(RouteScreen5)}
          />
          <Button
            title={'go to screen 6: timer 2 '}
            onPress={() => nav.navigate(RouteScreen6)}
          />
          <Button
            title={'go to screen 7: cleanup after fetch '}
            onPress={() => nav.navigate(RouteScreen7)}
          />
          <Button
            title={'go to screen 8: refs '}
            onPress={() => nav.navigate(RouteScreen8)}
          />
          <Button
            title={'go to screen 9: useCallbck, useMemo, memo '}
            onPress={() => nav.navigate(RouteScreen9)}
          />
          <Button
            title={'go to screen 10: useImperativeHandle '}
            onPress={() => nav.navigate(RouteScreen10)}
          />
          <Button
            title={'go to screen 11: profiling examples '}
            onPress={() => nav.navigate(RouteScreen11)}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lighter,
  },
});
