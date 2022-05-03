import {ItemT} from '../types/ItemT';
import useMyState from './useMyState';
import {useMemo} from 'react';

export function useFirstData(): ItemT[] {
  const firstData = useMyState(state => state.first);
  const result = useMemo((): ItemT[] => {
    return Object.keys(firstData.data).map(function (k) {
      return firstData.data[k];
    });
  }, [firstData]);
  return result;
}
