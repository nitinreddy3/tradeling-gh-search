import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

const StyledGridItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`

const StyledNameField = styled.p`
 font-size: 14px;
 text-align: left;
 margin: 5px;
`

interface Props {
  data: object,
}

const RepositoryGrid = ({ data }: Props) => {
  return (
    <StyledGridItem>
      <StyledNameField>Name: {get(data, 'name')}</StyledNameField>
      <StyledNameField>Author: {get(data, 'owner.login')}</StyledNameField>
      <StyledNameField>Stars: {get(data, 'stargazers_count')}</StyledNameField>
    </StyledGridItem >
  )
}

export default RepositoryGrid;
