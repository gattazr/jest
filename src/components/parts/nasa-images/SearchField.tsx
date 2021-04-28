import { useState, MouseEvent } from 'react';
import { search } from 'services/api/nasa-images'
import InputText from 'components/system/InputText';
import { SearchResult } from 'models/nasa-images/search-result';
import { setSearchResults } from 'redux/reducers/nasa-images'
import { useAppDispatch } from 'redux/hooks'

interface Props {}

const Search = (props: Props) => {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('');

  const onQueryChange = (newValue: string) => {
    setQuery(newValue)
  }

  const makeSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    search(query).then((res: SearchResult) => {
      dispatch(setSearchResults(res))
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
