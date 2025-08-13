export interface UserData {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export type LoginParams = {
  login: string;
  password: string;
};

export interface ApiError {
  fault: {
    faultstring: string;
    detail: {
      errorcode: string;
    };
  };
}

export interface Event {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  sales: Sales;
  dates: Dates;
  classifications: Classification[];
  promoter: Promoter;
  promoters: Promoter[];
  info: string;
  pleaseNote: string;
  seatmap: Seatmap;
  accessibility: Accessibility;
  ticketLimit: TicketLimit;
  ageRestrictions: AgeRestrictions;
  ticketing: Ticketing;
  _links: WelcomeLinks;
  _embedded: Embedded;
}

export interface Embedded {
  venues: Venue[];
  attractions: Attraction[];
}

export interface Attraction {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  externalLinks: ExternalLinks;
  images: Image[];
  classifications: Classification[];
  upcomingEvents: UpcomingEvents;
  _links: AttractionLinks;
}

export interface AttractionLinks {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Classification {
  primary: boolean;
  segment: Genre;
  genre: Genre;
  subGenre: Genre;
  type: Genre;
  subType: Genre;
  family: boolean;
}

export interface Genre {
  id: string;
  name: string;
}

export interface ExternalLinks {
  twitter: Facebook[];
  facebook: Facebook[];
  wiki: Facebook[];
  instagram: Facebook[];
  homepage: Facebook[];
}

export interface Facebook {
  url: string;
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
  attribution?: string;
}

export interface UpcomingEvents {
  tmr: number;
  ticketmaster: number;
  _total: number;
  _filtered: number;
  archtics?: number;
}

export interface Venue {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  postalCode: string;
  timezone: string;
  city: City;
  state: State;
  country: Country;
  address: Address;
  location: Location;
  markets: Genre[];
  dmas: DMA[];
  boxOfficeInfo: BoxOfficeInfo;
  parkingDetail: string;
  upcomingEvents: UpcomingEvents;
  ada: Ada;
  _links: AttractionLinks;
}

export interface Ada {
  adaPhones: string;
  adaCustomCopy: string;
  adaHours: string;
}

export interface Address {
  line1: string;
}

export interface BoxOfficeInfo {
  openHoursDetail: string;
}

export interface City {
  name: string;
}

export interface Country {
  name: string;
  countryCode: string;
}

export interface DMA {
  id: number;
}

export interface Location {
  longitude: string;
  latitude: string;
}

export interface State {
  name: string;
  stateCode: string;
}

export interface WelcomeLinks {
  self: Self;
  attractions: Self[];
  venues: Self[];
}

export interface Accessibility {
  info: string;
  ticketLimit: number;
  id: string;
}

export interface AgeRestrictions {
  legalAgeEnforced: boolean;
  id: string;
}

export interface Dates {
  start: Start;
  timezone: string;
  status: Status;
  spanMultipleDays: boolean;
}

export interface Start {
  localDate: string;
  localTime: string;
  dateTime: string;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}

export interface Status {
  code: string;
}

export interface Promoter {
  id: string;
  name: string;
  description: string;
}

export interface Sales {
  public: Public;
  presales: Presale[];
}

export interface Presale {
  startDateTime: string;
  endDateTime: string;
  name: string;
}

export interface Public {
  startDateTime: string;
  startTBD: boolean;
  startTBA: boolean;
  endDateTime: string;
}

export interface Seatmap {
  staticUrl: string;
  id: string;
}

export interface TicketLimit {
  info: string;
  id: string;
}

export interface Ticketing {
  safeTix: AllInclusivePricing;
  allInclusivePricing: AllInclusivePricing;
  id: string;
}

export interface AllInclusivePricing {
  enabled: boolean;
}
