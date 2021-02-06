import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash'
import { SEARCH_ENDPOINT } from '../../constants'
import SelectDropDown from '../SelectDropDown/SelectDropDown'
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError, fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesError, setSearchQuery } from '../../redux/search/searchActions'

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
  const { query } = useSelector(state => state.search)
  const fetchResponses = async (query: string, criteria: string) => {
    if (criteria === 'users') {
      dispatch(fetchUsersRequest())
      try {
        const response = await fetch(`${SEARCH_ENDPOINT}/${criteria}?q=${query}`);
        const data = await response.json();
        console.log(data.items);

        dispatch(fetchUsersSuccess(data.items));
      } catch (err) {
        dispatch(fetchUsersError(err.message));
      }
    } else {
      dispatch(fetchRepositoriesRequest())
      try {
        const response = await fetch(`${SEARCH_ENDPOINT}/${criteria}?q=${query}`);
        const data = await response.json();
        console.log(data.items);

        dispatch(fetchRepositoriesSuccess(data.items));
      } catch (err) {
        dispatch(fetchRepositoriesError(err.message));
      }
    }
  }

  const { criteria } = useSelector(state => state.search)
  const delayedQuery = useCallback(debounce(q => fetchResponses(q, criteria), 2000), []);
  return (
    <StyledWrapper>
      <StyledInput type="search" placeholder="Start typing to search..." onChange={(e) => {
        const { value } = e.target;
        if (value.trim().length >= 3) {
          dispatch(setSearchQuery(value.trim()))
          delayedQuery(value.trim())
        }
      }} value={query || ''} />
      <SelectDropDown />
    </StyledWrapper>
  )
}

export default SearchBar;
