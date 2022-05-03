import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RouteHome, RouteScreen2} from './navigationParams';
import {HomeScreen} from './HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen2} from './Screen2';

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
            headerTitle: 'Screen 2',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
