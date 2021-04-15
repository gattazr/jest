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

export interface Item {
  data: Array<ItemData>;
  links: Array<ItemLink>;
  href: string;
}

export interface ResultMetadata {
  total_hits: number;
}

export interface ResultLink {
  prompt: string;
  rel: string
  href: string;
}

export interface SearchResult {
  metadata: ResultMetadata;
  version: string;
  items: Array<Item>;
  hrefs: string;
  link: Array<ResultLink>;
}
