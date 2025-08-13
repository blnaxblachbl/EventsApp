import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Empty } from '@components/Empty';
import { getEvents } from '@api/events';
import type { Event } from '@api/types';
import { styles } from './styles';
import { EventCard } from '@components/EventCard';
import { RootStackParamList } from '@routes/types';

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { data, refetch, isFetching } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents.bind(this, { page: 0, size: 20 }),
    initialData: [],
  });

  return (
    <FlatList<Event>
      data={data}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }
      ListEmptyComponent={isFetching ? <ActivityIndicator size={'large'} /> : <Empty />}
      style={styles.container}
      contentContainerStyle={
        data.length === 0
          ? styles.emptyContentContainer
          : styles.contentContainer
      }
      keyExtractor={item => item.id}
    />
  );
  function renderItem({ item }: ListRenderItemInfo<Event>) {
    return (
      <EventCard onPress={openDetails.bind(undefined, item)} event={item} />
    );
  }
  function openDetails(item: Event) {
    navigation.navigate('EventDetails', {
      event: item,
    });
  }
};

export default Home;
