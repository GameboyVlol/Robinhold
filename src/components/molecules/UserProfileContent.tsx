import {Button, Divider, Paper, styled } from "@mui/material";
import React from "react";
import { ConditionallyRender } from "../atoms/ConditionalRender";
import {Link as RouterLink} from 'react-router-dom';


const StyledDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  height: "1px",
  backgroundColor: theme.palette.divider,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadiusMedium,
  minWidth: theme.spacing(34),
  boxShadow: theme.boxShadows.popup,
  zIndex: 5000,
  position: "absolute",
  marginTop: theme.spacing(0.25),
  right: 0
}));


const StyledLink = styled(RouterLink<typeof RouterLink | 'a'>)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding:0,
    color: theme.palette.links,
    '&:hover, &:focus':{
        textDecoration: 'underline',
    },
    '& svg':{
        fontSize: theme.spacing(2.25)
    },
    fontWeight: theme.fontWeight.medium,
    
}));
const StyledLogoutButton = styled(Button)(({theme})=>({
    width:'100%',
    height: theme.spacing(5),
}))
function UserProfileContent({ showProfile }: { showProfile: boolean }) {
  return (
    <ConditionallyRender
      condition={showProfile}
      show={
        <StyledPaper>
          <StyledLink to='/dashboard'>View profile settings</StyledLink>
          
          <StyledDivider />
          <StyledLogoutButton>Logout</StyledLogoutButton>
        </StyledPaper>
      }
    />
  );
}

export default UserProfileContent;
