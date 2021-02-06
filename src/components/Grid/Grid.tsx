import React from 'react'
import styled from 'styled-components'
import { isEqual, map } from 'lodash'
import UserGrid from './UserGrid'
import RepositoryGrid from './RepositoryGrid'

const StyledGridContainer = styled.div`
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: 275px 275px;
  }
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  ${({ data }) => data.length && `
     height: 75vh;
     overflow-y: auto;
  `}
`

interface Props {
  data: object,
  criteria: string,
  loading: boolean,
}

const Grid = ({ data, criteria, loading }: Props) => {
  return (
    <StyledGridContainer data={data}>
      {
        loading ?
          <p>Loading...</p> :
          map(data, i => isEqual(criteria, 'users') ? <UserGrid key={i.id} data={i} /> : <RepositoryGrid key={i.id} data={i} />)
      }
    </StyledGridContainer>
  )
}

export default Grid
