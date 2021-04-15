import { useState } from 'react';

import SearchField from 'components/parts/nasa-images/SearchField';
import Results from 'components/parts/nasa-images/Results';
import { Item } from 'models/nasa-images/search-result';

function NasaImages() {
  const [items, setItems] = useState<Array<Item>>([]);
  const onSearchCompleted = (newItems: Array<Item>) => {
    setItems(newItems)
  }
  return (
    <div className="nasa-images">
      <SearchField onSearchCompleted={onSearchCompleted} />
      <Results items={items}/>
    </div>
  );
}

export default NasaImages;
