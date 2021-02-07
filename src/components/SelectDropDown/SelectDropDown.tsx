import React, { useState } from 'react'
import styled from 'styled-components'
import { map, get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_OPTIONS } from '../../constants'
import { setSearchCriteria, fetchData, clearUsers, clearRepositories } from '../../redux/search/searchActions';
import { isResultForQuery } from '../../utils'


const StyledSelect = styled.select`
  padding: 9px;
  border: 1px solid #d1d1d1;
  width: 120px;
  float: left;
  color:#888888;
`

interface Props {
  query: string;
  criteria: string;
  users: Array<object>;
  repositories: Array<object>;
}

const SelectDropDown = ({ users, repositories, query, criteria }: Props) => {
  const dispatch = useDispatch()

  const handleChange = (event: Event) => {
    const { value } = event.target;
    dispatch(setSearchCriteria(value))
    if (query.length >= 3) {
      if (!isResultForQuery(value, query, users, repositories)) {
        dispatch(fetchData(query, value))
      }
    } else {
      resetData()
    }
  }

  const resetData = () => {
    dispatch(clearUsers([]));
    dispatch(clearRepositories([]));
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
