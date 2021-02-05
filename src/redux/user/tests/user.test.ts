import * as actions from '../userActions';
import { FETCH_USERS_REQUESTS } from '../userTypes'

describe('actions', () => {
  it('should create an action to fetch the users', () => {
    const users = [
      { login: 'Nitin', id: 1 },
      { login: 'Jiya', id: 2 },
    ]
    const expectedAction = {
      type: FETCH_USERS_REQUESTS,
      payload: users
    }
    expect(actions.setUsers(users)).toEqual(expectedAction)
  })
})