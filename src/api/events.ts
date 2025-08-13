import { ApiError, Event } from './types';
import { ROOT_URL, API_KEY } from '@env';

export function getEvents({ page = 0, size = 20, search = '' }): Promise<{
  events: Event[];
  totalPages: number;
}> {
  const url = new URL('/events.json', ROOT_URL);

  url.searchParams.append('page', String(page));
  url.searchParams.append('size', String(size));
  if (search) {
    url.searchParams.append('keyword', search);
  }
  url.searchParams.append('apikey', API_KEY);

  return fetch(url.toString()).then(async response => {
    if (response.ok) {
      const data = await response.json();
      return {
        events: data?._embedded?.events ?? [],
        totalPages: data?.page?.totalPages ?? 0,
      };
    }
    const error = await response.json();
    if (Object.hasOwn(error, 'fault')) {
      throw new Error((error as ApiError).fault.faultstring);
    }
    throw new Error('Error');
  });
}
