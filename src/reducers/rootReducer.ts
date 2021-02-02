import { ACTIONS } from '../constants';
import { get } from 'lodash';

const initState = {
  users: [],
  repositories: []
}

type action = {
  type: string,
  payload: object
}
const rootReducer = (state = initState, { type, payload }: action) => {
  switch (type) {
    case ACTIONS.SET_USERS:
      return payload ? {
        ...state,
        users: get(payload, 'users'),
      } : state;
    default:
      return state;
  }
}

export default rootReducer