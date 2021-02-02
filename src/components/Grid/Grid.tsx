import React from 'react'
import styled from 'styled-components'

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 280px 280px;
  grid-template-rows: 135px 135px 135px;
  grid-gap: 20px;
`

const StyledGridItem = styled.div`
  border: 1px solid #888;
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
