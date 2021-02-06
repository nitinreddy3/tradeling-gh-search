import * as actions from '../searchActions';
import { FETCH_REPOSITORIES_SUCCESS, FETCH_USERS_SUCCESS } from '../searchTypes'

describe('actions', () => {
  it('should create an action to fetch the repositories', () => {
    const repositories = [
      { name: 'REX', id: 1 },
      { login: 'Flutter', id: 2 },
    ]
    const expectedAction = {
      type: FETCH_REPOSITORIES_SUCCESS,
      payload: repositories
    }
    expect(actions.fetchRepositoriesSuccess(repositories)).toEqual(expectedAction)
  })

  it('should create an action to fetch the users', () => {
    const users = [
      { login: 'Nitin', id: 1 },
      { login: 'Jiya', id: 2 },
    ]
    const expectedAction = {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
    expect(actions.fetchUsersSuccess(users)).toEqual(expectedAction)
  })
})