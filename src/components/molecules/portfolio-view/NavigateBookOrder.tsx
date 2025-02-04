import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadiusExtraLarge,
  fontSize: theme.fontSizes.smallBody,
  fontWeight: theme.fontWeight.bold,
}));

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
}));

function NavigateBookOrder() {
  return (
    <StyledContainer>
      <StyledLink to="/orderbook">Order Book</StyledLink>
      <StyledLink to="/history">Trade History</StyledLink>
      <StyledLink to="/portfolio">Portfolio Details</StyledLink>
    </StyledContainer>
  );
}

export default NavigateBookOrder;
