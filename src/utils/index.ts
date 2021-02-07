import { filter, isEqual, includes, toLower } from 'lodash';
import { USERS } from '../constants'

export const isResultForQuery = (criteria: string, query: string, users: Array<object>, repositories: Array<object>) => isEqual(criteria, USERS) ? filter(users, (i: { login: string }) => includes(toLower(i.login), query)).length :
  filter(repositories, (i: { name: string }) => includes(toLower(i.name), query)).length;