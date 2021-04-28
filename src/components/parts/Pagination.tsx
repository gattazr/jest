/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageSelected: (newPage: number) => void;
}

const Pagination = (props: Props) => {
  const list = [];
  for(let i = 1; i <= props.totalPages; i++) {
    list.push(
      <li key={i}
          className={props.currentPage === i ? 'currentPage' : ''}
          onClick={() => props.onPageSelected(i)}
          css={{'display': 'inline',
                'margin': '5px'}}>
        {i}
      </li>);
  }

  return (
    <div className="pagination">
      <ul css={{'listStyle': 'none' }}>
        {list}
      </ul>
    </div>
  );
}

export default Pagination;
