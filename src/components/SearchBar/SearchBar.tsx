import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash'
import { SEARCH_ENDPOINT } from '../../constants'
import SelectDropDown from '../SelectDropDown/SelectDropDown'
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError, fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesError, setSearchQuery, fetchData } from '../../redux/search/searchActions'
import useFetchData from '../../hooks/useFetchData'

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
  const { query, criteria } = useSelector(state => state.search)

  const resetData = () => {
    dispatch(fetchUsersSuccess([]));
    dispatch(fetchRepositoriesSuccess([]));
  }

  const delayedQuery = debounce(q => dispatch(fetchData(q, criteria)), 1000);

  return (
    <StyledWrapper>
      <StyledInput type="search" placeholder="Start typing to search..." onChange={(e) => {
        const { value } = e.target;
        dispatch(setSearchQuery(value.trim()))
        if (value.trim().length >= 3) {
          delayedQuery(value.trim())
        } else if (value.trim().length < 3) {
          resetData()
        }
      }} value={query} />
      <SelectDropDown />
    </StyledWrapper>
  )
}

export default SearchBar;
