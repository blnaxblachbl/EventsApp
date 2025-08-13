import React, { useMemo } from 'react';
import { Dimensions, Image, ScrollView, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DateTime } from 'luxon';
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps';

import { RouteProps } from '@routes/types';
import { styles } from './styles';

const { width } = Dimensions.get('screen');

const EventDetails = () => {
  const {
    params: { event },
  } = useRoute<RouteProps<'EventDetails'>>();

  const images = useMemo(
    () => event.images.map(item => item.url),
    [event.images],
  );
  const { city, country, address, location, name } = useMemo(
    () => event._embedded.venues[0],
    [event._embedded.venues[0]],
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ScrollView
        horizontal
        style={styles.imagesContainer}
        snapToInterval={width}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      >
        {images.map(src => (
          <Image key={src} src={src} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>{event.info}</Text>
        <Text style={styles.startTime}>
          <Text style={styles.bold}>Date and time: </Text>
          {DateTime.fromISO(event.dates.start.dateTime).toLocaleString(
            DateTime.DATETIME_MED,
          )}
        </Text>
        <Text style={styles.startTime}>
          <Text style={styles.bold}>Place: </Text>
          {country.name}, {city.name}, {address.line1}
        </Text>
        <MapView
          provider={PROVIDER_DEFAULT}
          initialRegion={{
            latitude: Number(location.latitude),
            longitude: Number(location.longitude),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width: '100%', height: 200, backgroundColor: 'red' }}
        >
          <Marker
            coordinate={{
              latitude: Number(location.latitude),
              longitude: Number(location.longitude),
            }}
            title={name}
            description={address.line1}
          />
        </MapView>
      </View>
    </ScrollView>
  );
};

export default EventDetails;
