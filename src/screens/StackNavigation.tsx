import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  RouteHome,
  RouteScreen10,
  RouteScreen11,
  RouteScreen11a,
  RouteScreen2,
  RouteScreen3,
  RouteScreen4,
  RouteScreen5,
  RouteScreen6,
  RouteScreen7,
  RouteScreen8,
  RouteScreen9,
} from './navigationParams';
import {HomeScreen} from './HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen2} from './Screen2';
import {Screen3} from './Screen3';
import {Screen4} from './Screen4';
import {Screen5} from './Screen5';
import {Screen6} from './Screen6';
import {Screen7} from './Screen7';
import {Screen8} from './Screen8';
import {Screen9} from './Screen9';
import {Screen10} from './Screen10';
import {Screen11} from './Screen11';
import {Test1} from '../components/profiling/Test1';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#aaa',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name={RouteHome}
          component={HomeScreen}
          options={{
            headerTitle: 'Home screen',
          }}
        />
        <Stack.Screen
          name={RouteScreen2}
          component={Screen2}
          options={{
            headerTitle: 'Screen 2 - params',
          }}
        />
        <Stack.Screen
          name={RouteScreen3}
          component={Screen3}
          options={{
            headerTitle: 'Screen 3 - redux',
          }}
        />
        <Stack.Screen
          name={RouteScreen4}
          component={Screen4}
          options={{
            headerTitle: 'Screen 4 - API call with thunk',
          }}
        />
        <Stack.Screen
          name={RouteScreen5}
          component={Screen5}
          options={{
            headerTitle: 'Screen 5 - use timer simplest',
          }}
        />
        <Stack.Screen
          name={RouteScreen6}
          component={Screen6}
          options={{
            headerTitle: 'Screen 6 - use timer 2',
          }}
        />
        <Stack.Screen
          name={RouteScreen7}
          component={Screen7}
          options={{
            headerTitle: 'Screen 7 - cleanup after fetch',
          }}
        />
        <Stack.Screen
          name={RouteScreen8}
          component={Screen8}
          options={{
            headerTitle: 'Screen 8 - refs',
          }}
        />
        <Stack.Screen
          name={RouteScreen9}
          component={Screen9}
          options={{
            headerTitle: 'Screen 9 - useCallback, useMemo, memo',
          }}
        />
        <Stack.Screen
          name={RouteScreen10}
          component={Screen10}
          options={{
            headerTitle: 'Screen 10 - useImperativeHandle',
          }}
        />
        <Stack.Screen
          name={RouteScreen11}
          component={Screen11}
          options={{
            headerTitle: 'Screen 11 - profiling',
          }}
        />
        <Stack.Screen
          name={RouteScreen11a}
          component={Test1}
          options={{
            headerTitle: 'Screen 11 - profiling A',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
