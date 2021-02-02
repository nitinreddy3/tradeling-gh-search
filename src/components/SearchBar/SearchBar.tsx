import React from 'react'
import styled from 'styled-components'
import SelectDropDown from '../SelectDropDown/SelectDropDown'

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #d1d1d1;
  width: 360px;
  float: left;
  margin-right: 10px
`

const SearchBar = () => {
  return (
    <div>
      <StyledInput type="search" placeholder="Start typing to search..." />
      <SelectDropDown />
    </div>
  )
}

export default SearchBar;
