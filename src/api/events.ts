import { EVENTS } from './mocks';
import { Event } from './types';

export function getEvents({
  page = 0,
  size = 20,
  search = '',
}): Promise<Event[]> {
  return new Promise(resolve => {
    const filteredEvents = search
      ? EVENTS.filter(
          item =>
            item.info
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : EVENTS;
    setTimeout(() => {
      const startIndex = page * size;
      resolve(filteredEvents.slice(startIndex, startIndex + size));
    }, 2000);
  });
}
