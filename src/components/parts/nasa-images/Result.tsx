import { Item } from 'models/nasa-images/search-result';

interface Props {
  item: Item;
}

const Result = (props: Props) => {
  const data = props.item.data[0];
  let previewImg = undefined;
  if (props.item.links) {
    const previewLinkImg = props.item.links.find((link) => {
      return link.rel === 'preview' && link.render === 'image';
    })

    if(previewLinkImg) {
      previewImg = <img src={previewLinkImg.href} alt={data.title} />
    }
  }

  return (
    <div className="nasa-images-search-item">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      { previewImg }
    </div>
  );
}

export default Result;
