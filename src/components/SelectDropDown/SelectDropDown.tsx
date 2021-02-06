import React, { useState } from 'react'
import styled from 'styled-components'
import { map, get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_OPTIONS, SEARCH_ENDPOINT } from '../../constants'
import { setSearchCriteria } from '../../redux/search/searchActions'
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError, fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesError, setSearchQuery } from '../../redux/search/searchActions'

const StyledSelect = styled.select`
  padding: 9px;
  border: 1px solid #d1d1d1;
  width: 120px;
  float: left;
  color:#888888;
`

const SelectDropDown = () => {
  const { criteria, query } = useSelector(state => state.search)
  const dispatch = useDispatch()

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
    } else if (criteria === 'repositories') {
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

  const handleChange = (event: Event) => {
    dispatch(setSearchCriteria(event.target.value))
    if (query.length >= 3) {
      fetchResponses(query, event.target.value)
    } else {
      resetData()
    }
  }

  const resetData = () => {
    dispatch(fetchUsersSuccess([]));
    dispatch(fetchRepositoriesSuccess([]));
  }

  return (
    <StyledSelect value={criteria} onChange={handleChange}>
      {
        map(SELECT_OPTIONS, option => <option key={get(option, 'value')} value={get(option, 'value')}>{get(option, 'label')}</option>)
      }
    </StyledSelect>
  )
}

export default SelectDropDown
