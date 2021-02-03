type ACTIONS = {
  SET_USERS: string,
  SET_REPOSITORIES: string
}
export const ACTIONS: ACTIONS = {
  SET_USERS: 'SET_USERS',
  SET_REPOSITORIES: 'SET_REPOSITORIES',
}

export const SELECT_OPTIONS: Array<object> = [
  { label: 'USERS', value: 'USERS' },
  { label: 'REPOSITORIES', value: 'REPOSITORIES' },
]