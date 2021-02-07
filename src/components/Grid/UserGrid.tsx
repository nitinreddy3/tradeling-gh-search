import React from 'react'
import { get } from 'lodash'
import { StyledGridItem, StyledNameField, StyledAnchor, StyledImage } from '../Common/CommonComponents'
import { RepositoryUserProps } from '../../interfaces'



const UserGrid: React.FC<RepositoryUserProps> = ({ data }) => {
  return (
    <StyledGridItem>
      <StyledImage src={get(data, 'avatar_url')} alt={get(data, 'login')} />
      <StyledNameField>Name: {get(data, 'login')}</StyledNameField>
      <StyledAnchor href={get(data, 'html_url')} target="_blank">GitHub profile</StyledAnchor>
    </StyledGridItem >
  )
}

export default UserGrid;
