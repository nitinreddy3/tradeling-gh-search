import React from 'react'
import styled from 'styled-components'
import GitHub from '../../images/github.png'
import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'

const StyledHeader = styled.div`
  margin: ${props => props.data.length ? "50px 50px" : "50% auto"};
  // width: ${props => props.data.length ? "100%" : "500px"};
  height: 50px;
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
  const { users, repositories } = useSelector(state => state);

  return (
    <StyledHeader data={[...users, ...repositories]}>
      <StyledWrapper >
        <ImageWrapper src={GitHub} alt="GitHub" />
        <div>
          <StyledHeadingText>GitHub Searcher</StyledHeadingText>
          <StyledDescriptionText>Search users or repositories below</StyledDescriptionText>
        </div>
      </StyledWrapper>
      <SearchBar />
    </StyledHeader>
  )
}

export default Header;
