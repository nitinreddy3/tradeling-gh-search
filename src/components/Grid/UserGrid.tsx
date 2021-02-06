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
 text-align: center;
 margin: 0;
`
const StyledAnchor = styled.a`
 font-size: 14px;
 text-align: center;
 margin: 0;
`

interface Props {
  data: object,
}
const UserGrid = ({ data }: Props) => {
  return (
    <StyledGridItem>
      <StyledImage src={get(data, 'avatar_url')} alt={get(data, 'login')} />
      <StyledNameField>Name: {get(data, 'login')}</StyledNameField>
      <StyledAnchor href={get(data, 'html_url')} target="_blank">GitHub profile</StyledAnchor>
    </StyledGridItem >
  )
}

export default UserGrid;
