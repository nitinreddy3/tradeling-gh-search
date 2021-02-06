import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

const StyledGridItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
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
      <StyledNameField>Owner name: {get(data, 'owner.login')}</StyledNameField>
    </StyledGridItem >
  )
}

export default RepositoryGrid;
