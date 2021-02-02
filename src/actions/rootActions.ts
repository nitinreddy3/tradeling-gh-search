import { ACTIONS } from '../constants'

export function setUsers(users: Array<object>) {
  return {
    type: ACTIONS.SET_USERS,
    payload: users
  }
}

export function setRepositories(repositories: Array<object>) {
  return {
    type: ACTIONS.SET_REPOSITORIES,
    payload: repositories
  }
}