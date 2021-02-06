import {
  SET_CRITERIA,
  SET_QUERY,
  FETCH_USERS_REQUESTS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_REPOSITORIES_REQUESTS,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_ERROR
} from './searchTypes'
import { get } from 'lodash';

const initState = {
  criteria: "users",
  query: "",
  users: [],
  repositories: [],
  loading: false,
  error: ""
}

type action = {
  type: string,
  payload: object
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
        users: payload,
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
        repositories: payload,
        error: ''
      }
    case FETCH_REPOSITORIES_ERROR:
      return {
        ...state,
        loading: false,
        repositories: [],
        error: payload
      }
    default:
      return state;
  }
}

export default searchReducer