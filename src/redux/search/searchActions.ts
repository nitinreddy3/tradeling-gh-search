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

export function setSearchCriteria(criteria: Array<object>) {
  return {
    type: SET_CRITERIA,
    payload: criteria
  }
}

export function setSearchQuery(query: Array<object>) {
  return {
    type: SET_QUERY,
    payload: query
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTS,
  }
}

export const fetchUsersSuccess = (users: Array<object>) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersError = (error: object) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  }
}

export const fetchRepositoriesRequest = () => {
  return {
    type: FETCH_REPOSITORIES_REQUESTS,
  }
}

export const fetchRepositoriesSuccess = (repositories: Array<object>) => {
  return {
    type: FETCH_REPOSITORIES_SUCCESS,
    payload: repositories
  }
}

export const fetchRepositoriesError = (error: object) => {
  return {
    type: FETCH_REPOSITORIES_ERROR,
    payload: error
  }
}
