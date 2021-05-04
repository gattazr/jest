/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { search } from 'services/api/nasa-images'
import { SearchResult } from 'models/nasa-images/search-result';
import Result from 'components/parts/nasa-images/Result';
import Pagination from 'components/parts/nasa-images/Pagination';
import { useAppSelector } from 'redux/hooks'
import { setSearchResults } from 'redux/reducers/nasa-images'
import { useAppDispatch } from 'redux/hooks'

interface Props { }

const Results = (props: Props) => {
  const dispatch = useAppDispatch()
  const query = useAppSelector((state) => state.nasaImages.query)
  const hits = useAppSelector((state) => state.nasaImages.hits)
  const currentPage = useAppSelector((state) => state.nasaImages.currentPage)
  const totalPages = Math.floor(hits / 100) + 1
  const results = useAppSelector((state) => state.nasaImages.results)

  const changePage = function(newPageIndex: number) {
    // Run a search and sends the result to the redux store
    search(query, newPageIndex).then((res: SearchResult) => {
      dispatch(setSearchResults({
        query: query,
        hits: res.metadata.total_hits,
        results: res.items,
        currentPage: newPageIndex
      }))
    });
  }

  let paginationElm = null
  if (hits > 100) {
     paginationElm = (
       <Pagination currentPage={currentPage}
                   totalPages={totalPages}
                   onPageSelected={changePage} />
     )
  }

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
        { paginationElm }
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
