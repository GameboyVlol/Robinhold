import { Paper, styled, Typography } from '@mui/material'
import React from 'react'


const StyledPaper = styled(Paper)(({theme})=>({
    background: theme.palette.background.paper,
    padding: theme.spacing(2)
}))

function TotalPortfolio() {
  return (
    <StyledPaper>
      <Typography variant='h5'>Total Portfolio</Typography>
      <Typography variant='h1' sx={{
        fontWeight: (theme)=> theme.fontWeight.semi,
        fontSize: (theme)=> theme.fontSize
      }}>$992882</Typography>
    </StyledPaper>
  )
}

export default TotalPortfolio
