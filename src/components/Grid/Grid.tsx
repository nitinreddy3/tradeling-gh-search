import React from 'react'
import styled from 'styled-components'
import { isEqual, map } from 'lodash'
import UserGrid from './UserGrid'
import RepositoryGrid from './RepositoryGrid'
import { USERS } from "../../constants"
import { StyledProp, GridProps } from '../../interfaces'

const StyledGridContainer = styled.div`
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: 275px 275px;
  }
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  ${({ data }: StyledProp) => data.length && `
     max-height: 75vh;
     overflow-y: auto;
  `}
`


const Grid: React.FC<GridProps> = ({ data, criteria, loading, error }) => {
  return (
    <StyledGridContainer data={data}>
      {
        loading ?
          <p>Loading...</p> :
          error ?
            <p>{error}</p> :
            map(data, (i: { id: string }) => isEqual(criteria, USERS) ? <UserGrid key={i.id} data={i} /> : <RepositoryGrid key={i.id} data={i} />)
      }
    </StyledGridContainer>
  )
}

export default Grid
