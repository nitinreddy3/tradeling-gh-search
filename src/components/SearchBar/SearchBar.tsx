import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { debounce, filter, includes, isEqual, toLower } from 'lodash'
import { USERS, SEARCH_LABEL } from '../../constants'
import SelectDropDown from '../SelectDropDown/SelectDropDown'
import { setSearchQuery, fetchData, clearUsers, clearRepositories } from '../../redux/search/searchActions'
import { isResultForQuery } from '../../utils'

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #d1d1d1;
  width: 360px;
  float: left;
  margin-right: 10px
`

const StyledWrapper = styled.span`
  display: inline-block
`

const SearchBar = () => {
  const dispatch = useDispatch()
  const { query, criteria, users, repositories } = useSelector(state => state.search)

  const resetData = () => {
    dispatch(clearUsers([]));
    dispatch(clearRepositories([]));
  }

  const delayedQuery = debounce(q => {
    if (!isResultForQuery(criteria, q, users, repositories)) {
      dispatch(fetchData(q, criteria))
    }
  }, 1000);

  const handleChange = (event: Event) => {
    const { value } = event.target;
    dispatch(setSearchQuery(value.trim()))
    if (value.trim().length >= 3) {
      delayedQuery(value.trim())
    }
    else if (value.trim().length < 3) {
      resetData()
    }
  };

  return (
    <StyledWrapper>
      <StyledInput type="search" placeholder={SEARCH_LABEL} onChange={handleChange} value={query} />
      <SelectDropDown users={users} repositories={repositories} criteria={criteria} query={query} />
    </StyledWrapper>
  )
}

export default SearchBar;
