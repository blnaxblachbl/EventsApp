import React from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { Empty } from '@components/Empty';
import { getEvents } from '@api/events';
import type { Event } from '@api/types';
import { styles } from './styles';
import { EventCard } from '@components/EventCard';

const Home = () => {
  const { data, refetch, isFetching } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents.bind(this, { page: 0, size: 10 }),
    initialData: [],
  });

  console.log(isFetching);

  return (
    <FlatList<Event>
      data={data}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }
      ListEmptyComponent={<Empty />}
      style={styles.container}
      contentContainerStyle={
        data.length === 0
          ? styles.emptyContentContainer
          : styles.contentContainer
      }
    />
  );
  function renderItem({ item }: ListRenderItemInfo<Event>) {
    return <EventCard event={item} />;
  }
};

export default Home;
