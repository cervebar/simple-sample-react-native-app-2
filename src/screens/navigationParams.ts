import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Screen2NavigationProps} from './Screen2';

export const RouteHome = 'RouteHome';
export const RouteScreen2 = 'RouteScreen2';
export const RouteScreen3 = 'RouteScreen3';
export const RouteScreen4 = 'RouteScreen4';
export const RouteScreen5 = 'RouteScreen5';
export const RouteScreen6 = 'RouteScreen6';
export const RouteScreen7 = 'RouteScreen7';
export const RouteScreen8 = 'RouteScreen8';
export const RouteScreen9 = 'RouteScreen9';
export const RouteScreen10 = 'RouteScreen10';
export const RouteScreen11 = 'RouteScreen11';
export const RouteScreen11a = 'RouteScreen11a';
export const RouteScreen11b = 'RouteScreen11b';

export type RootStackParamList = {
  RouteHome: undefined;
  RouteScreen2: Screen2NavigationProps;
  RouteScreen3: undefined;
  RouteScreen4: undefined;
  RouteScreen5: undefined;
  RouteScreen6: undefined;
  RouteScreen7: undefined;
  RouteScreen8: undefined;
  RouteScreen9: undefined;
  RouteScreen10: undefined;
  RouteScreen11: undefined;
  RouteScreen11a: undefined;
  RouteScreen11b: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

// use with hook for routes:  const route = useRoute<RootRouteProps<'RouteDetail'>>();
export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
