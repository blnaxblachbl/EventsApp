import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '@api/types';
import { Alert } from 'react-native';

export function useUser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    if (!loading && !user) {
      setLoading(true);
      AsyncStorage.getItem('user')
        .then(data => {
          if (data) {
            setUser(JSON.parse(data));
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  function logOut() {
    Alert.alert('Confirmation', 'Do you want to log out?', [
      {
        text: 'Yes',
        onPress: () => {
          AsyncStorage.removeItem('user');
          setUser(null);
        },
        style: 'destructive',
      },
      {
        text: 'No',
      },
    ]);
  }

  return { loading, user, logOut, getUser };
}
