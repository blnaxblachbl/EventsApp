import { API_KEY, ROOT_URL } from '@env';

export function getEvents({ page = 0, size = 20 }) {
  const url = new URL('/events.json', ROOT_URL);

  url.searchParams.append('apiKey', API_KEY);
  url.searchParams.append('countryCode', 'US');
  url.searchParams.append('page', String(page));
  url.searchParams.append('size', String(size));

  return fetch(url.toString()).then(async response => {
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const error = await response.json();
    if (Object.hasOwn(error, 'fault')) {
      console.log(error);
      throw new Error(error.fault.faultstring);
    }
    throw new Error('Failed to fetch');
  });
}
