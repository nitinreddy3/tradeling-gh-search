export interface Search {
  users: Array<object>;
  repositories: Array<object>;
  criteria: string;
  loading: boolean;
  query: string;
}
export interface SearchState {
  search: Search
}

export interface StyledProp {
  data: Array<object>;
}