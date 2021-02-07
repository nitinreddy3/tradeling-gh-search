import * as actions from '../searchActions';
import { FETCH_REPOSITORIES_SUCCESS, FETCH_USERS_SUCCESS, CLEAR_USERS, CLEAR_REPOSITORIES } from '../searchTypes'

describe("actions", () => {
  it("should create an action to fetch the repositories", () => {
    const repositories = [
      { name: 'REX', id: 1 },
      { name: 'Flutter', id: 2 },
    ]
    const expectedAction = {
      type: FETCH_REPOSITORIES_SUCCESS,
      payload: repositories
    }
    expect(actions.fetchRepositoriesSuccess(repositories)).toEqual(expectedAction)
  })

  it("should create an action to fetch the users", () => {
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

  it("should create an action to clear the users' data", () => {
    const users: Array<object> = []
    const expectedAction = {
      type: CLEAR_USERS,
      payload: users
    }
    expect(actions.clearUsers(users)).toEqual(expectedAction)
  })

  it("should create an action to clear the repositories' data", () => {
    const repositories: Array<object> = []
    const expectedAction = {
      type: CLEAR_REPOSITORIES,
      payload: repositories
    }
    expect(actions.clearRepositories(repositories)).toEqual(expectedAction)
  })

})