import { useState } from 'react';

import Search from 'components/parts/nasa-images/Search';
import SearchItems from 'components/parts/nasa-images/SearchItems';
import SearchResult from 'models/nasa-images/search-result';

function NasaImages() {
  const [items, setItems] = useState<Array<SearchResult>>([]);
  const onSearchCompleted = (newItems: Array<SearchResult>) => {
    setItems(newItems)
  }

  return (
    <div className="nasa-images">
      <Search onSearchCompleted={onSearchCompleted} />
      <SearchItems items={items}/>
    </div>
  );
}

export default NasaImages;
