import SearchField from 'components/parts/nasa-images/SearchField';
import Results from 'components/parts/nasa-images/Results';

function NasaImages() {
  return (
    <div className="nasa-images">
      <SearchField />
      <Results />
    </div>
  );
}

export default NasaImages;
