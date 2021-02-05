import { FETCH_USERS_REQUESTS } from './userTypes'

export function setUsers(users: Array<object>) {
  return {
    type: FETCH_USERS_REQUESTS,
    payload: users
  }
}
