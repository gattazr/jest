/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
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
      previewImg = <img width='100%' src={previewLinkImg.href} alt={data.title} />
    }
  }
  const descriptionMaxLength = 500;
  let description = data.description.slice(0, descriptionMaxLength)
  if (data.description.length > descriptionMaxLength) {
    description = '...'
  }
  return (
    <div css={{'padding': '15px'}}>
      { previewImg }
      <h4>{data.title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Result;
