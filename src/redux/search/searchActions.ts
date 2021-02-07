import { isEqual } from 'lodash';
import {
  SET_QUERY,
  SET_CRITERIA,
  FETCH_USERS_REQUESTS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_REPOSITORIES_REQUESTS,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_ERROR,
  CLEAR_USERS,
  CLEAR_REPOSITORIES,
} from './searchTypes'
import { SEARCH_ENDPOINT, USERS } from '../../constants'

export const fetchData = (query: string, criteria: string) => {
  if (isEqual(criteria, USERS)) {
    return async (dispatch: (arg0: { type: string; payload?: object | object[]; }) => void) => {
      dispatch(fetchUsersRequest())
      try {
        const response = await fetch(`${SEARCH_ENDPOINT}/${criteria}?q=${query}`)
        const data = await response.json()
        dispatch(fetchUsersSuccess(data.items))
      } catch (err) {
        dispatch(fetchUsersError(err))
      }
    }
  } else {
    return async (dispatch: (arg0: { type: string; payload?: object | object[]; }) => void) => {
      dispatch(fetchRepositoriesRequest())
      try {
        const response = await fetch(`${SEARCH_ENDPOINT}/${criteria}?q=${query}`);
        const data = await response.json();
        dispatch(fetchRepositoriesSuccess(data.items));
      } catch (err) {
        dispatch(fetchRepositoriesError(err.message));
      }
    }
  }
}

export const resetData = () => {
  return async (dispatch: (arg0: { type: string; payload: object[]; }) => void) => {
    dispatch(clearUsers([]));
    dispatch(clearRepositories([]));
  }
}

export const setSearchCriteria = (criteria: string) => ({
  type: SET_CRITERIA,
  payload: criteria
})

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

export const clearUsers = (users: Array<object>) => ({
  type: CLEAR_USERS,
  payload: users
})

export const clearRepositories = (repositories: Array<object>) => ({
  type: CLEAR_REPOSITORIES,
  payload: repositories
})