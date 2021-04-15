/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SearchResult } from 'models/nasa-images/search-result';
import Result from 'components/parts/nasa-images/Result';

interface Props {
  searchResult: SearchResult;
}

const Results = (props: Props) => {
  const hits = props.searchResult.metadata.total_hits
  if (hits === 0) {
    return (
      <div className="nasa-images-search-items">
        <p>No hit :-(</p>
      </div>
    );
  } else {
    return (
      <div className="nasa-images-search-items">
        <p>Yay ! { hits } hits</p>
        <div css={{'display': 'grid',
                   'grid-template-columns': 'auto auto auto auto'}}>
          {
            props.searchResult.items.map((item, index) => {
              return <Result key={index} item={item} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Results;
