import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { isEqual } from 'lodash'
import styled from 'styled-components'
import { getLength } from './utils'
import Header from './components/Header/Header'
import Grid from './components/Grid/Grid'
import { USERS } from "./constants"
import { SearchState, StyledProp } from './interfaces'

const StyledContainer = styled.div`
  margin: ${({ data }: StyledProp) => data ? "50px 50px" : "0"};
  width: ${({ data }: StyledProp) => data ? "auto" : "auto"};
  ${({ data }: StyledProp) => !data && `
    position:  absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 470px
  `
  }
`

const App = () => {
  const { users, repositories, criteria, loading } = useSelector((state: SearchState) => {
    return state.search
  })

  return (
    <StyledContainer data={getLength([...users, ...repositories])}>
      <Header />
      <Grid
        data={isEqual(criteria, USERS) ? users : repositories}
        criteria={criteria}
        loading={loading}
      />
    </StyledContainer>
  );
}

export default App;
