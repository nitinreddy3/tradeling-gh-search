import { ACTIONS } from '../../constants'

export function setRepositories(repositories: Array<object>) {
  return {
    type: ACTIONS.SET_REPOSITORIES,
    payload: repositories
  }
}