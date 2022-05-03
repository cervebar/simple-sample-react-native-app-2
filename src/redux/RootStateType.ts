import {ItemT} from '../types/ItemT';
import {SecondReducerStateT} from './slices/secondSlice';

// here comes root types of all reducers so we can easily use it in useMyState

export type FirstItemMapT = Record<string, ItemT>;

export type RootStateType = {
  first: {ids: string[]; data: FirstItemMapT};
  second: SecondReducerStateT;
};
