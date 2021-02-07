import React from 'react';
import { useSelector } from 'react-redux'
import { isEqual } from 'lodash'
import styled from 'styled-components'
import Header from './components/Header/Header'
import Grid from './components/Grid/Grid'
import { USERS } from "./constants"
import { SearchState, StyledProp } from './interfaces'

const StyledContainer = styled.div`
  margin: ${({ data }: StyledProp) => data.length ? "50px 50px" : "0"};
  width: ${({ data }: StyledProp) => data.length ? "auto" : "auto"};
  ${({ data }: StyledProp) => !data.length && `
    position:  absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 470px
  `
  }
`

const App: React.FC<{}> = () => {
  const { users, repositories, criteria, loading, error } = useSelector((state: SearchState) => state.search)

  return (
    <StyledContainer data={([...users, ...repositories])}>
      <Header />
      <Grid
        data={isEqual(criteria, USERS) ? users : repositories}
        criteria={criteria}
        loading={loading}
        error={error}
      />
    </StyledContainer>
  );
}

export default App;
