import React from 'react';
import { Pressable, Image, View, ImageBackground } from 'react-native';

import { Text } from '@components/Text';
import { EventCardProps } from './types';
import { styles } from './styles';

export const EventCard = ({ event, style, ...rest }: EventCardProps) => {
  return (
    <Pressable style={[styles.container, style]} {...rest}>
      <ImageBackground
        src={event.images[0].url}
        blurRadius={10}
        style={styles.imageContainer}
      >
        <Image
          src={event.images[0].url}
          resizeMode="contain"
          style={styles.image}
        />
      </ImageBackground>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event.name}</Text>
        {event.info && (
          <Text style={styles.info} numberOfLines={5}>
            {event.info}
          </Text>
        )}
      </View>
    </Pressable>
  );
};
