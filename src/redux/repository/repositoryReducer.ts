import { FETCH_REPOSITORIES_REQUESTS } from './repositoryTypes'
import { get } from 'lodash';

const initState = {
  repositories: []
}

type action = {
  type: string,
  payload: object
}
const repositoryReducer = (state = initState, { type, payload }: action) => {
  switch (type) {
    case FETCH_REPOSITORIES_REQUESTS:
      return payload ? {
        ...state,
        repositories: get(payload, 'repositories'),
      } : state;
    default:
      return state;
  }
}

export default repositoryReducer;