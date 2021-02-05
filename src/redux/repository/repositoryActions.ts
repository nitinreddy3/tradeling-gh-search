import { FETCH_REPOSITORIES_REQUESTS } from './repositoryTypes'

export function setRepositories(repositories: Array<object>) {
  return {
    type: FETCH_REPOSITORIES_REQUESTS,
    payload: repositories
  }
}