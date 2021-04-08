import SearchResult from 'models/nasa-images/search-result';
import SearchItem from 'components/parts/nasa-images/SearchItem';

interface Props {
  items: Array<SearchResult>;
}

const SearchItems = (props: Props) => {
  if(props.items.length === 0) {
    return (
      <div className="nasa-images-search-items">
        <p>No results</p>
      </div>
    );
  } else {
    return (
      <div className="nasa-images-search-items">
        <p>Yay ! { props.items.length } results</p>
        <div>
          {
            props.items.map((item, index) => {
              return <SearchItem key={index} item={item} />
            })
          }
        </div>
      </div>
    );
  }
}

export default SearchItems;
