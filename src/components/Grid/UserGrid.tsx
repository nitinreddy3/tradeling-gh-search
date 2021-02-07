import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { StyledGridItem, StyledNameField, StyledAnchor, StyledImage } from '../Common/CommonComponents'

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
