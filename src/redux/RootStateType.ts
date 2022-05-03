import {ItemT} from '../types/ItemT';

// here comes root types of all reducers

export type FirstItemMapT = Record<string, ItemT>;

export type RootStateType = {
  first: {ids: string[]; data: FirstItemMapT};
};
