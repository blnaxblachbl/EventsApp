import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    SplashScreen.hide();
    navigation.dispatch(StackActions.replace('TabBar'));
  }, []);

  return <View></View>;
};

export default Splash;
