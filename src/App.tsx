import React, { useEffect } from 'react';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from './actions/rootActions'
import Header from './components/Header/Header'
import './App.css';
import Grid from './components/Grid/Grid'
import styled from 'styled-components'


const StyledContainer = styled.div`
  margin: ${props => props.data.length ? "50px 50px" : "50% auto"};
  width: ${props => props.data.length ? "100%" : "500px"};
  height: 50px;
`

const App = () => {
  const dispatch = useDispatch()
  const { users, repositories } = useSelector(state => {
    return state
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/search/users?q=nitinreddy3')
      const data: Array<object> = await response.json()
      console.log(data);
      dispatch(setUsers({
        users: data.items,
      }))
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <StyledContainer data={[...users, ...repositories]}>
      <Header />
      <Grid />
    </StyledContainer>
  );
}

export default App;
