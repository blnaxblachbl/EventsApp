import { EVENTS } from './mocks';
import { Event } from './types';

export function getEvents({ page = 0, size = 20 }): Promise<Event[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = page * size;
      resolve(EVENTS.slice(startIndex, startIndex + size));
    }, 2000);
  });
}
