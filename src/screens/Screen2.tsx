import React from 'react';
import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from './navigationParams';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Screen2DataT} from '../types/Screen2DataT';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export type Screen2NavigationProps = {
  data: Screen2DataT;
};

export const Screen2 = () => {
  const route = useRoute<RootRouteProps<'RouteScreen2'>>();
  const {data} = route.params;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          <Text>{data.text1}</Text>
          <Text>{data.number2}</Text>
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
