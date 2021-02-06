import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_ENDPOINT } from '../constants'
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError, fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesError, setSearchQuery } from '../redux/search/searchActions'

const useFetchData = (query: string, criteria: string) => {

  const [data, setData] = useState([])
  const [error, setError] = useState({})

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`${SEARCH_ENDPOINT}/${criteria}?q=${query}`);
        const data = await response.json();
        setData(data.items);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  return { data, error }
}

export default useFetchData;