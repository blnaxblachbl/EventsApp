import { useLanguage } from '@libs/I18nManager';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '@components/Text';

const Tab = createBottomTabNavigator();

import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';
import { Pressable } from 'react-native';

export default function TabBar() {
  const { language, switchLanguage } = useLanguage();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Pressable onPress={switchLanguage} style={{ marginRight: 24 }}>
              <Text>{language}</Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
