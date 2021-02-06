import {
  SET_QUERY,
  SET_CRITERIA,
  FETCH_USERS_REQUESTS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_REPOSITORIES_REQUESTS,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_ERROR,
} from './searchTypes'

export function setSearchCriteria(criteria: string) {
  return {
    type: SET_CRITERIA,
    payload: criteria
  }
}

export const setSearchQuery = (query: string) => ({
  type: SET_QUERY,
  payload: query
})

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUESTS,
}
)

export const fetchUsersSuccess = (users: Array<object>) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
})

export const fetchUsersError = (error: object) => ({
  type: FETCH_USERS_ERROR,
  payload: error
})

export const fetchRepositoriesRequest = () => ({
  type: FETCH_REPOSITORIES_REQUESTS,
})

export const fetchRepositoriesSuccess = (repositories: Array<object>) => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload: repositories
})

export const fetchRepositoriesError = (error: object) => ({
  type: FETCH_REPOSITORIES_ERROR,
  payload: error
})