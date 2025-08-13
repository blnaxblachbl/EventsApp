// do not place this imports in 1st line
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabBar from '@routes/TabBar';
import { RootStackParamList } from '@routes/types';
import { useLanguage } from '@libs/I18nManager';

import SplashScreen from '@screens/Splash';
import EventDetailsScreen from '@screens/EventDetails';
import LoginScreen from '@screens/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

export let navigationRef: NavigationContainerRef<RootStackParamList> | null;

export default function RootStack() {
  const { direction } = useLanguage();

  return (
    <NavigationContainer<RootStackParamList>
      ref={ref => {
        navigationRef = ref;
      }}
      direction={direction}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetailsScreen}
          options={({ route }) => ({
            headerTitle: route.params.event.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
