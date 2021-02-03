import * as actions from './repository';
import { ACTIONS } from '../../constants'

describe('actions', () => {
  it('should create an action to fetch the repositories', () => {
    const repositories = [
      { name: 'REX', id: 1 },
      { login: 'Flutter', id: 2 },
    ]
    const expectedAction = {
      type: ACTIONS.SET_REPOSITORIES,
      payload: repositories
    }
    expect(actions.setRepositories(repositories)).toEqual(expectedAction)
  })
})