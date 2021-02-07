import React from 'react'
import { get } from 'lodash'
import { StyledGridItem, StyledNameField, StyledAnchor } from '../Common/CommonComponents'

interface Props {
  data: object,
}

const RepositoryGrid = ({ data }: Props) => {
  return (
    <StyledGridItem>
      <StyledNameField>Name: {get(data, 'name')}</StyledNameField>
      <StyledNameField>Author: {get(data, 'owner.login')}</StyledNameField>
      <StyledNameField>Stars: {get(data, 'stargazers_count')}</StyledNameField>
      <StyledAnchor href={get(data, 'html_url')} target="_blank">GitHub repository</StyledAnchor>
    </StyledGridItem >
  )
}

export default RepositoryGrid;
