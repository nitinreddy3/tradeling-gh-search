export interface SearchState {
  search: Search
}

export interface StyledProp {
  data: Array<object>
}

export interface SearchProps {
  query: string;
  criteria: string;
  users: Array<object>;
  repositories: Array<object>;
  error: string;
}

export interface Search extends SearchProps {
  loading: boolean
}

export interface GridProps {
  data: Array<object>
  criteria: string
  loading: boolean
  error: string
}

export interface RepositoryUserProps {
  data: object
}