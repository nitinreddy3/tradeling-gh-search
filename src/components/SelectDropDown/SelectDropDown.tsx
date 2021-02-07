import React, { useState } from 'react'
import styled from 'styled-components'
import { map, get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_OPTIONS, SEARCH_ENDPOINT } from '../../constants'
import { setSearchCriteria } from '../../redux/search/searchActions'
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError, fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesError, fetchData } from '../../redux/search/searchActions'

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

  const handleChange = (event: Event) => {
    dispatch(setSearchCriteria(event.target.value))
    if (query.length >= 3) {
      dispatch(fetchData(query, event.target.value))
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
