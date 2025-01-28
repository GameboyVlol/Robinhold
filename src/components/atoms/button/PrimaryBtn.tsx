import { Button, styled } from '@mui/material'
import React from 'react'

const StyledBtn = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.fontSize.smallBody,
    borderRadius: theme.shape.borderRadius,
})  ) 

function PrimaryBtn({title}:{title:string}) {
  return (
    <StyledBtn>
      {title}
    </StyledBtn>
  )
}

export default PrimaryBtn
