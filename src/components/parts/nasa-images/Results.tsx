/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Result from 'components/parts/nasa-images/Result';
import { useAppSelector } from 'redux/hooks'

interface Props { }

const Results = (props: Props) => {
  const hits = useAppSelector((state) => state.nasaImages.hits)
  const results = useAppSelector((state) => state.nasaImages.results)

  if (hits < 0) {
    // Show nothing if hits is negative because it means the state is still in the initial state
    return <div></div>;
  } else if (hits === 0) {
    return (
      <div className="nasa-images-search-items">
        <p>No hit :-(</p>
      </div>
    );
  } else {
    return (
      <div className="nasa-images-search-items">
        <p>Yay ! { hits } hits</p>
        {
          hits > 100 ? <div>Pagination Soon</div> : null
        }
        <div css={{'display': 'grid',
                   'gridTemplateColumns': 'auto auto auto auto'}}>
          {
            results.map((result, index) => {
              return <Result key={index} item={result} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Results;
