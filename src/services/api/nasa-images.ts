import axios from 'axios';
import { SearchResult } from 'models/nasa-images/search-result';

export const search = (query: string): Promise<SearchResult> => {
  const params = "q=" + query;
  const requestUrl = "https://images-api.nasa.gov/search?" + params;

  return new Promise((resolve, reject) => {
    axios.get(requestUrl).then((response) => {
      resolve(response.data.collection);
    });
  });
}
