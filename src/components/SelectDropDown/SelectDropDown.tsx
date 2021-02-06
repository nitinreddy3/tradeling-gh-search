import React, { useState } from 'react'
import styled from 'styled-components'
import { map, get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_OPTIONS } from '../../constants'
import { setSearchCriteria } from '../../redux/search/searchActions'

const StyledSelect = styled.select`
  padding: 9px;
  border: 1px solid #d1d1d1;
  width: 100px;
  float: left;
  color:#888888;
`

const SelectDropDown = () => {
  const { criteria } = useSelector(state => state.search)
  const dispatch = useDispatch()
  // const [value, setValue] = useState('')

  const handleChange = (event: Event) => {
    // setValue(event.target.value);
    console.log(criteria)
    dispatch(setSearchCriteria(event.target.value))
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
