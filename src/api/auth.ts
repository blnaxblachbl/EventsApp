import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginParams, UserData } from './types';

export function logIn({ login, password }: LoginParams): Promise<UserData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === 'test@test.com' && password === '123') {
        const userData: UserData = {
          id: '1',
          name: 'Test User',
          phone: '058880195',
          email: 'test@test.com',
        };
        AsyncStorage.setItem('user', JSON.stringify(userData));
        resolve(userData);
      } else {
        reject('Incorrect creditails');
      }
    }, 2000);
  });
}
