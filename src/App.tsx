import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { isEqual } from 'lodash'
import styled from 'styled-components'
import { getLength } from './utils'
import Header from './components/Header/Header'
import Grid from './components/Grid/Grid'
import './App.css';


const StyledContainer = styled.div`
  margin: ${props => props.data ? "50px 50px" : "0"};
  width: ${props => props.data ? "auto" : "auto"};
  ${({ data }) => !data && `
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
  const { users, repositories, criteria, loading, query } = useSelector(state => {
    return state.search
  })

  console.log(`criteria: ${criteria}, query: ${query}`)
  return (
    <StyledContainer data={getLength([...users, ...repositories])}>
      <Header />
      <Grid
        data={isEqual(criteria, 'users') ? users : repositories}
        criteria={criteria}
        loading={loading}
      />
    </StyledContainer>
  );
}

export default App;
