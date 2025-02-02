import { Avatar, styled } from '@mui/material'
import React from 'react'


const StyledAvatar = styled(Avatar)(({theme})=>({
    width: theme.spacing(4.75),
    height: theme.spacing(4.75),
    marginRight: theme.spacing(1.5),
}))

function UserAvatar() {
  return (
    <div>
      <StyledAvatar src='https://i.pinimg.com/736x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg'/>
    </div>
  )
}

export default UserAvatar
