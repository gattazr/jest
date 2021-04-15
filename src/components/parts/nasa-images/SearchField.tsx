import { useState, MouseEvent } from 'react';
import { search } from 'services/api/nasa-images'
import InputText from 'components/system/InputText';
import { SearchResult } from 'models/nasa-images/search-result';

interface Props {
  onSearchCompleted: (newItems: SearchResult) => void;
}

const Search = (props: Props) => {
  const [query, setQuery] = useState('');

  const onQueryChange = (newValue: string) => {
    setQuery(newValue)
  }

  const makeSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    search(query).then((res: SearchResult) => {
      props.onSearchCompleted(res);
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
