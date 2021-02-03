import * as actions from './user';
import { ACTIONS } from '../../constants'

describe('actions', () => {
  it('should create an action to fetch the users', () => {
    const users = [
      { login: 'Nitin', id: 1 },
      { login: 'Jiya', id: 2 },
    ]
    const expectedAction = {
      type: ACTIONS.SET_USERS,
      payload: users
    }
    expect(actions.setUsers(users)).toEqual(expectedAction)
  })
})