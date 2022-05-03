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
import {NavigationProps, RouteScreen2} from './navigationParams';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const nav = useNavigation<NavigationProps>();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          <Text>Home screen</Text>
        </View>
        <Button
          title={'go to screen 2'}
          onPress={() =>
            nav.navigate(RouteScreen2, {
              data: {text1: 'text', number2: 1234},
            })
          }
        />
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
