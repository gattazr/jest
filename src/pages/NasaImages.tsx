import SearchField from 'components/parts/nasa-images/SearchField';
import SearchResults from 'components/parts/nasa-images/Results';
import { useAppSelector } from 'redux/hooks'

function NasaImages() {
  return (
    <div className="nasa-images">
      <SearchField />
      <SearchResults />
    </div>
  );
}

export default NasaImages;
