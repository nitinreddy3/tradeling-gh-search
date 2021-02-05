import { FETCH_USERS_REQUESTS } from './userTypes'
import { get } from 'lodash';

const initState = {
  users: [],
}

type action = {
  type: string,
  payload: object
}
const userReducer = (state = initState, { type, payload }: action) => {
  switch (type) {
    case FETCH_USERS_REQUESTS:
      return payload ? {
        ...state,
        users: get(payload, 'users'),
      } : state;
    default:
      return state;
  }
}

export default userReducer