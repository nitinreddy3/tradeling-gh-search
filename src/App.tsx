import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from './redux/user/userActions'
import Header from './components/Header/Header'
import './App.css';
import Grid from './components/Grid/Grid'
import styled from 'styled-components'


const StyledContainer = styled.div`
  margin: ${props => props.data.length ? "50px 50px" : "50% auto"};
  width: ${props => props.data.length ? "auto" : "500px"};
`

const App = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => {
    return state.user
  })
  const { repositories } = useSelector(state => {
    return state.repository
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/search/users?q=nitinreddy3')
      const data: Array<object> = await response.json()
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
