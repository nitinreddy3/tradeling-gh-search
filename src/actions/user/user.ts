import { ACTIONS } from '../../constants'

export function setUsers(users: Array<object>) {
  return {
    type: ACTIONS.SET_USERS,
    payload: users
  }
}
