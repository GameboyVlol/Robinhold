import {  Paper, styled, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.paper,
}));

const StyledLink = styled(Link)(({theme})=>({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

function NavigateBookOrder() {
  return (
    <StyledPaper>
      <Typography variant="h6">Quick Links</Typography>
      <Box>
        <StyledLink to="/orderbook">Order Book</StyledLink>
        <StyledLink to="/history">Trade History</StyledLink>
        <StyledLink to="/portfolio">Portfolio Details</StyledLink>
      </Box>
    </StyledPaper>
  );
}

export default NavigateBookOrder;
