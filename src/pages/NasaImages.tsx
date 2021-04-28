import SearchField from 'components/parts/nasa-images/SearchField';
import SearchResults from 'components/parts/nasa-images/Results';
import Pagination from 'components/parts/Pagination';
import { useAppSelector } from 'redux/hooks'

function NasaImages() {
  const currentPage = useAppSelector((state) => state.nasaImages.currentPage);
  const hits = useAppSelector((state) => state.nasaImages.hits);
  const totalPages = hits / 100;

  const changePage = function(index: number) {
    console.log("Replacing and loading the page", index)
  }

  return (
    <div className="nasa-images">
      <SearchField />
      <Pagination currentPage={currentPage}
                  totalPages={totalPages}
                  onPageSelected={changePage} />
      <SearchResults />
    </div>
  );
}

export default NasaImages;
