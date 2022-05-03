import {ItemT} from '../types/ItemT';
import {FetchDataT, FetchErrorT} from '../types/FetchDataT';

export const generateRandomData = (count: number): ItemT[] => {
  const result = [] as ItemT[];
  for (let i = 0; i < count; i++) {
    result.push({
      id: (Math.random() + 1).toString(36).substring(7),
      name: `name-${i}`,
    });
  }
  return result;
};

/**
 * simulate API with random generated data and random errors
 */
export class MockFetchStrategy {
  async fetchData(): Promise<FetchDataT | FetchErrorT> {
    const data = generateRandomData(5);
    setTimeout(() => {}, 2000); //wait for 2 sec
    return new Promise((resolve, reject) => {
      const rand = Math.floor(Math.random() * 100);
      if (rand > 80) {
        // to simulate error with 20% change to occur
        reject({error: 'some error'});
      }
      resolve({
        resultsCount: data.length,
        data,
      });
    });
  }
}
