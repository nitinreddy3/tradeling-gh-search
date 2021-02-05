import * as actions from '../../actions/repository/repository';
import { FETCH_REPOSITORIES_REQUESTS } from '../repositoryTypes'

describe('actions', () => {
  it('should create an action to fetch the repositories', () => {
    const repositories = [
      { name: 'REX', id: 1 },
      { login: 'Flutter', id: 2 },
    ]
    const expectedAction = {
      type: FETCH_REPOSITORIES_REQUESTS,
      payload: repositories
    }
    expect(actions.setRepositories(repositories)).toEqual(expectedAction)
  })
})