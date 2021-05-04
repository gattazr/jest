import axios from 'axios';
import { SearchResult } from 'models/nasa-images/search-result';

export const search = (query: string, page: number = 1): Promise<SearchResult> => {
  const params = "q=" + query + "&page=" + page;
  const requestUrl = "https://images-api.nasa.gov/search?" + params;

  return new Promise((resolve, reject) => {
    axios.get(requestUrl).then((response) => {
      resolve(response.data.collection);
    });
  });
}
