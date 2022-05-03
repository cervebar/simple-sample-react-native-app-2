import {ItemT} from '../types/ItemT';
import {FetchDataT} from '../types/FetchDataT';

export class ReactDevApi {
  async fetchData(): Promise<FetchDataT> {
    //TODO then, error
    const error = null;
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    const result = [] as ItemT[];
    for (const movie of json.movies) {
      result.push({
        id: movie.id,
        name: movie.title,
      });
    }
    return new Promise((resolve, reject) => {
      if (error != null) {
        reject({error});
      } else {
        resolve({
          resultsCount: result.length,
          data: result,
        });
      }
    });
  }
}
