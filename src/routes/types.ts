import {
  NavigationProp as GetNavigationProp,
  RouteProp as GetRouteProp,
} from '@react-navigation/native';

import { Event } from '@api/types';

export type RootStackParamList = {
  Splash: undefined;
  TabBar: undefined;
  Login: undefined;
  EventDetails: { event: Event };
};

export type NavigationProps = GetNavigationProp<RootStackParamList>;
export type RouteProps<T extends keyof RootStackParamList> = GetRouteProp<
  RootStackParamList,
  T
>;
