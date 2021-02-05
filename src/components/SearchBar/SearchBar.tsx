import React from 'react'
import styled from 'styled-components'
import { debounce } from 'lodash'
import SelectDropDown from '../SelectDropDown/SelectDropDown'

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

// const delayedQuery = useCallback(debounce(q => fetchContainers(q), 2000), []);

const SearchBar = () => {
  return (
    <StyledWrapper>
      <StyledInput type="search" placeholder="Start typing to search..." />
      <SelectDropDown />
    </StyledWrapper>
  )
}

export default SearchBar;
