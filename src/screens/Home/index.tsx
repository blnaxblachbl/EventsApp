import React, { useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';

import { TextInput } from '@components/TextInput';
import { Empty } from '@components/Empty';
import { getEvents } from '@api/events';
import type { Event } from '@api/types';
import { styles } from './styles';
import { EventCard } from '@components/EventCard';
import { RootStackParamList } from '@routes/types';
import { Text } from '@components/Text';
import { Button } from '@components/Button';

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const scrollRef = useRef<FlatList>(null);

  const { data, refetch, isFetching } = useQuery({
    queryKey: [`events/${page}/${search}`],
    queryFn: getEvents.bind(this, { page, size: 20, search }),
    initialData: {
      events: [],
      totalPages: 0,
    },
  });

  const debounceSerach = debounce((text: string) => {
    setPage(0);
    setSearch(text);
  }, 500);

  return (
    <>
      <TextInput
        defaultValue={search}
        onChangeText={debounceSerach}
        placeholder="Search"
        style={styles.search}
      />
      <FlatList<Event>
        ref={scrollRef}
        data={data.events}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
        ListEmptyComponent={
          isFetching ? <ActivityIndicator size={'large'} /> : <Empty />
        }
        style={styles.container}
        contentContainerStyle={
          data.events.length === 0
            ? styles.emptyContentContainer
            : styles.contentContainer
        }
        keyExtractor={item => item.id}
        ListFooterComponent={
          !isFetching ? (
            <>
              <Button
                style={styles.button}
                disabled={page === 0}
                onPress={updatePage.bind(undefined, page - 1)}
              >
                <Text style={styles.buttonText}>Prev Page</Text>
              </Button>
              <Text style={styles.count}>
                №{page + 1}/{data.totalPages}
              </Text>
              <Button
                style={styles.button}
                disabled={page >= data.totalPages}
                onPress={updatePage.bind(undefined, page + 1)}
              >
                <Text style={styles.buttonText}>Next Page</Text>
              </Button>
            </>
          ) : null
        }
        ListFooterComponentStyle={styles.footer}
      />
    </>
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
  function updatePage(newPage: number) {
    if (page > 0 || page < data.totalPages) {
      scrollRef.current?.scrollToOffset({ offset: 0, animated: true });
      setTimeout(setPage.bind(undefined, newPage), 200);
    }
  }
};

export default Home;
