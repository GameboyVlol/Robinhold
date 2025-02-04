import {Typography , styled} from '@mui/material'
import React from 'react'

const StyledContainer = styled('div')(({theme})=>({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}))

const StyledTitle = styled(Typography)(({theme})=>({
  fontWeight: theme.fontWeight.bold,
  fontSize: theme.fontSizes.mainHeader
}))
const StyledValue = styled(Typography)(({theme})=>({
  fontWeight: theme.fontWeight.semi,
  fontSize: theme.fontSizes.extraLargeHeader,
  padding: theme.spacing(1,0)
}))

function TotalPortfolio() {
  return (
    <StyledContainer>
      <StyledTitle>Portfolio Value</StyledTitle>
      <StyledValue>$9928.82</StyledValue>
    </StyledContainer>
  )
}

export default TotalPortfolio
