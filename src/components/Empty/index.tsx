import React from 'react';
import { View } from 'react-native';

import EmptySvg from '@assets/icons/empty.svg';
// import EmptySvg from '../../assets/icons/empty.svg';

import { styles } from './styles';
import { Text } from '@components/Text';

export const Empty = () => {
  return (
    <View style={styles.container}>
      <EmptySvg />
      <Text>Nothing here</Text>
    </View>
  );
};
