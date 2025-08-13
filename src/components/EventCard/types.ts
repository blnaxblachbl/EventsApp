import { Event } from '@api/types';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type EventCardProps = PressableProps & {
  event: Event;
  style?: StyleProp<ViewStyle>;
};
