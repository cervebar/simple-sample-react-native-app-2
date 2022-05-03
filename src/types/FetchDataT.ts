import {ItemT} from './ItemT';

export type FetchDataT = {
  resultsCount: number;
  data: ItemT[];
};

export type FetchErrorT = {
  error: string;
};
