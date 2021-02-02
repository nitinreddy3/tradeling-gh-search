import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from './actions/rootActions'
import './App.css';

const App = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.users)

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
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}

export default App;
