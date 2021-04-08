export interface SearchResultLink {
  render: string;
  href: string;
  rel: string;
}

export interface SearchResultData {
  media_type: String;
  nasa_id: string;
  keywords: Array<string>;
  center: string;
  title: string;
  description: string;
  date_created: string;
}

export default interface SearchResult {
  data: Array<SearchResultData>;
  links: Array<SearchResultLink>;
  href: string;
}
