import axios from 'axios';
import { Item } from 'models/nasa-images/search-result';

export const search = (query: string): Promise<Array<Item>> => {
  const params = "q=" + query;
  const requestUrl = "https://images-api.nasa.gov/search?" + params;

  return new Promise((resolve, reject) => {
    axios.get(requestUrl).then((response) => {
      resolve(response.data.collection.items);
    });
  });
}
