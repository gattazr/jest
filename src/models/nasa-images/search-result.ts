export interface ItemLink {
  render: string;
  href: string;
  rel: string;
}

export interface ItemData {
  media_type: String;
  nasa_id: string;
  keywords: Array<string>;
  center: string;
  title: string;
  description: string;
  date_created: string;
}

export default interface Item {
  data: Array<ItemData>;
  links: Array<ItemLink>;
  href: string;
}
