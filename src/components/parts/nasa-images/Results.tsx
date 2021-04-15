import { Item } from 'models/nasa-images/search-result';
import Result from 'components/parts/nasa-images/Result';

interface Props {
  items: Array<Item>;
}

const Results = (props: Props) => {
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
              return <Result key={index} item={item} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Results;
