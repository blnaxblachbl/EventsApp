import React from 'react';
import { Pressable, Image, Text, View } from 'react-native';

import { EventCardProps } from './types';
import { styles } from './styles';

export const EventCard = ({ event, style, ...rest }: EventCardProps) => {
  return (
    <Pressable style={[styles.container, style]} {...rest}>
      <Image
        src={event.images[0].url}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.info} numberOfLines={5}>
          {event.info}
        </Text>
      </View>
    </Pressable>
  );
};
