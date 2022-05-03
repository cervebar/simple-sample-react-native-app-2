import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Screen2NavigationProps} from './Screen2';

export const RouteHome = 'RouteHome';
export const RouteScreen2 = 'RouteScreen2';
export const RouteScreen3 = 'RouteScreen3';
export const RouteScreen4 = 'RouteScreen4';

export type RootStackParamList = {
  RouteHome: undefined;
  RouteScreen2: Screen2NavigationProps;
  RouteScreen3: undefined;
  RouteScreen4: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

// use with hook for routes:  const route = useRoute<RootRouteProps<'RouteDetail'>>();
export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
