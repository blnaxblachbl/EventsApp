import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.dispatch(StackActions.replace('TabBar'));
  }, []);

  return <View></View>;
};

export default Splash;
