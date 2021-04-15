import { useState } from 'react';

import SearchField from 'components/parts/nasa-images/SearchField';
import SearchItems from 'components/parts/nasa-images/SearchItems';
import SearchResult from 'models/nasa-images/search-result';

function NasaImages() {
  const [items, setItems] = useState<Array<SearchResult>>([]);
  const onSearchCompleted = (newItems: Array<SearchResult>) => {
    setItems(newItems)
  }

  return (
    <div className="nasa-images">
      <SearchField onSearchCompleted={onSearchCompleted} />
      <SearchItems items={items}/>
    </div>
  );
}

export default NasaImages;
