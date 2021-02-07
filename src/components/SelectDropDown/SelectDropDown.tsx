import React from 'react'
import styled from 'styled-components'
import { map, get } from 'lodash'
import { useDispatch } from 'react-redux'
import { SELECT_OPTIONS } from '../../constants'
import { setSearchCriteria, fetchData, resetData } from '../../redux/search/searchActions';
import { isResultForQuery } from '../../utils'
import { SearchProps } from '../../interfaces'

const StyledSelect = styled.select`
  padding: 9px;
  border: 1px solid #d1d1d1;
  width: 120px;
  float: left;
  color:#888888;
`

const SelectDropDown: React.FC<SearchProps> = ({ users, repositories, query, criteria }) => {
  const dispatch = useDispatch()

  const handleChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    dispatch(setSearchCriteria(value))
    if (query.length >= 3) {
      if (!isResultForQuery(value, query, users, repositories)) {
        dispatch(fetchData(query, value))
      }
    } else {
      dispatch(resetData())
    }
  }

  return (
    <StyledSelect value={criteria} onChange={handleChange}>
      {
        map(SELECT_OPTIONS, (option: object) => <option key={get(option, 'value')} value={get(option, 'value')}>{get(option, 'label')}</option>)
      }
    </StyledSelect>
  )
}

export default SelectDropDown
