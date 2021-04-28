/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useAppSelector } from 'redux/hooks'
import Result from 'components/parts/nasa-images/Result';

interface Props {}

const Results = (props: Props) => {
  const hits = useAppSelector((state) => state.nasaImages.hits)
  const results = useAppSelector((state) => state.nasaImages.results)

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
                   'gridTemplateColumns': 'auto auto auto auto'}}>
          {
            results.map((item, index) => {
              return <Result key={index} item={item} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Results;
