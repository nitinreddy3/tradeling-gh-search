import { uniqBy } from 'lodash'
import {
  SET_CRITERIA,
  SET_QUERY,
  FETCH_USERS_REQUESTS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_REPOSITORIES_REQUESTS,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_ERROR,
  CLEAR_USERS,
  CLEAR_REPOSITORIES
} from './searchTypes'
import { USERS } from '../../constants'

interface InitState {
  criteria: string
  query: string
  users: Array<object>
  repositories: Array<object>,
  loading: boolean,
  error: string
}

const initState: InitState = {
  criteria: USERS,
  query: "",
  users: [],
  repositories: [],
  loading: false,
  error: ""
}

type action = {
  type: string,
  payload: any
}

const searchReducer = (state = initState, { type, payload }: action) => {
  switch (type) {
    case SET_CRITERIA:
      return {
        ...state,
        criteria: payload,
      }
    case SET_QUERY:
      return {
        ...state,
        query: payload,
      }
    case FETCH_USERS_REQUESTS:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: uniqBy([...state.users, ...payload], 'login'),
        error: ''
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: payload
      }

    case FETCH_REPOSITORIES_REQUESTS:
      return {
        ...state,
        loading: true
      }

    case FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        repositories: uniqBy([...state.repositories, ...payload], 'name'),
        error: ''
      }
    case FETCH_REPOSITORIES_ERROR:
      return {
        ...state,
        loading: false,
        repositories: [],
        error: payload
      }

    case CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: [],
        error: ""
      }
    case CLEAR_REPOSITORIES:
      return {
        ...state,
        loading: false,
        repositories: [],
        error: ""
      }
    default:
      return state;
  }
}

export default searchReducer