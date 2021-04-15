import { useState } from 'react';

import SearchField from 'components/parts/nasa-images/SearchField';
import Results from 'components/parts/nasa-images/Results';
import { SearchResult } from 'models/nasa-images/search-result';

function NasaImages() {
  const [searchResult, setSearchResult] = useState<SearchResult>();
  const onSearchCompleted = (newResult: SearchResult) => {
    setSearchResult(newResult)
  }

  return (
    <div className="nasa-images">
      <SearchField onSearchCompleted={onSearchCompleted} />
      {searchResult ? <Results searchResult={searchResult} />: null}
    </div>
  );
}

export default NasaImages;
