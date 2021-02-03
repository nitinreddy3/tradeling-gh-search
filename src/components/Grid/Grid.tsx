import React from 'react'
import styled from 'styled-components'

const StyledGridContainer = styled.div`
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  grid-template-columns: auto auto auto;
  padding: 10px;
  grid-gap: 20px;
`

const StyledGridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`

const Grid = () => {
  return (
    <StyledGridContainer>
      <StyledGridItem></StyledGridItem>
      <StyledGridItem></StyledGridItem>
      <StyledGridItem></StyledGridItem>
      <StyledGridItem></StyledGridItem>
      <StyledGridItem></StyledGridItem>
      <StyledGridItem></StyledGridItem>
    </StyledGridContainer>
  )
}

export default Grid
