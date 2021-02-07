import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash'
import { SEARCH_LABEL } from '../../constants'
import SelectDropDown from '../SelectDropDown/SelectDropDown'
import { setSearchQuery, fetchData, resetData } from '../../redux/search/searchActions'
import { isResultForQuery } from '../../utils'
import { SearchState } from '../../interfaces'


const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #d1d1d1;
  width: 360px;
  float: left;
  margin-right: 10px
`

const StyledWrapper = styled.span`
  display: inline-block
`

const SearchBar: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const { query, criteria, users, repositories, error } = useSelector((state: SearchState) => state.search)

  const delayedQuery = debounce((q: string) => {
    if (!isResultForQuery(criteria, q, users, repositories)) {
      dispatch(fetchData(q, criteria))
    }
  }, 2500);

  const handleChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    dispatch(setSearchQuery(value.trim()))
    if (value.trim().length >= 3) {
      delayedQuery(value.trim())
    }
    else if (value.trim().length < 3) {
      dispatch(resetData())
    }
  };

  return (
    <StyledWrapper>
      <StyledInput type="search" placeholder={SEARCH_LABEL} onChange={handleChange} value={query} />
      <SelectDropDown users={users} repositories={repositories} criteria={criteria} query={query} error={error} />
    </StyledWrapper>
  )
}

export default SearchBar;
