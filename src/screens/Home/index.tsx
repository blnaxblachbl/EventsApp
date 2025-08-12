import { useQuery } from '@tanstack/react-query';
import { getEvents } from '@api/events';
import React from 'react';
import { View } from 'react-native';

const Home = () => {
  const { data, isPending } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents.bind(this, { page: 0, size: 20 }),
  });

  console.log(data, isPending);

  return <View></View>;
};

export default Home;
