import React from 'react'
import styled from 'styled-components'
import GitHub from '../../images/github.png'
import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'

const StyledHeader = styled.div`
`

const StyledWrapper = styled.div`
  margin-bottom: 10px;
`

const ImageWrapper = styled.img`
  height: 50px;
  width: 50px;
  float: left;
`

const StyledHeadingText = styled.span`
  font-weight: 700;
  display: block;
  text-align: start;
`

const StyledDescriptionText = styled.span`
  display: block;
  text-align: start;
`


const Header = () => {
  const { users } = useSelector(state => state.user);
  const { repositories } = useSelector(state => state.repository);

  return (
    <StyledHeader data={[...users, ...repositories]}>
      <StyledWrapper >
        <ImageWrapper src={GitHub} alt="GitHub" />
        <>
          <StyledHeadingText>GitHub Searcher</StyledHeadingText>
          <StyledDescriptionText>Search users or repositories below</StyledDescriptionText>
        </>
      </StyledWrapper>
      <SearchBar />
    </StyledHeader>
  )
}

export default Header;
