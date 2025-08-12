// do not place this imports in 1st line
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '@screens/Splash';
import EventDetailsScreen from '@screens/EventDetails';
import TabBar from '@routes/TabBar';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
