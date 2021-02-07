import { filter, isEqual, includes, toLower } from 'lodash';

export const getLength = (list) => list.length;
export const isResultForQuery = (criteria: string, query: string, users: Array<object>, repositories: Array<object>) => isEqual(criteria, "users") ? filter(users, i => includes(toLower(i.login), query)).length :
  filter(repositories, i => includes(toLower(i.name), query)).length;