import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getLength } from './utils'
import Header from './components/Header/Header'
import './App.css';
import Grid from './components/Grid/Grid'
import styled from 'styled-components'


const StyledContainer = styled.div`
  margin: ${props => props.data ? "50px 50px" : "0"};
  width: ${props => props.data ? "auto" : "auto"};
  ${({ data }) => !data && `
    position:  "absolute";
    left: "50%";
    top: "50%";
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `
  }
`

const App = () => {
  const { users, repositories } = useSelector(state => {
    return state.search
  })

  return (
    <StyledContainer data={getLength([...users, ...repositories])}>
      <Header />
      {/* <Grid /> */}
    </StyledContainer>
  );
}

export default App;
