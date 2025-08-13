// do not place this imports in 1st line
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '@screens/Splash';
import EventDetailsScreen from '@screens/EventDetails';
import TabBar from '@routes/TabBar';
import { RootStackParamList } from '@routes/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer direction={I18nManager.isRTL ? 'rtl' : 'ltr'}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
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
