import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  padding: 9px;
  border: 1px solid #d1d1d1;
  width: 100px;
  float: left;
  color:#888888;
`

const SelectDropDown = () => {
  return (
    <StyledSelect>
      <option value="Users">Users</option>
      <option value="Repositories">Repositories</option>
    </StyledSelect>
  )
}

export default SelectDropDown
