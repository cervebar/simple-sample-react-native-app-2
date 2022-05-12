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
  RouteScreen2,
  RouteScreen3,
  RouteScreen4,
  RouteScreen5,
  RouteScreen6,
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
