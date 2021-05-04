import { useState, MouseEvent } from 'react';
import { search } from 'services/api/nasa-images'
import InputText from 'components/system/InputText';
import { SearchResult } from 'models/nasa-images/search-result';
import { setSearchResults } from 'redux/reducers/nasa-images'
import { useAppDispatch } from 'redux/hooks'

interface Props {}

const Search = (props: Props) => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch()

  const onQueryChange = (newValue: string) => {
    setQuery(newValue)
  }

  const makeSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Run a search and sends the result to the redux store
    search(query, 1).then((res: SearchResult) => {
      dispatch(setSearchResults({
        query: query,
        hits: res.metadata.total_hits,
        results: res.items,
        currentPage: 1
      }))
    });
  };


  return (
    <div className="nasa-images-search">
      <h1>Search for Nasa images</h1>
      <InputText name='query' text={query} onChange={onQueryChange}/>
      <button onClick={makeSearch}>Search</button>
    </div>
  );
}

export default Search;
