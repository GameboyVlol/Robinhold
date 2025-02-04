import React from "react";
import Layout from "../templates/Layout";
import {Divider, styled, Typography } from "@mui/material";
import {ArrowDropUp} from '@mui/icons-material';
import UserOwnStock from "../organisms/table/UserOwnStock";
const StyledBox = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1, 0),
  gap: theme.spacing(1.5)
}));
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: theme.fontSizes.bodySize,
}));
const StyledValue = styled(Typography)(({theme})=>({
  fontWeight: theme.fontWeight.bold,
  fontSize: theme.fontSizes.extraLargeHeader
}))

const StyledProfitLoss = styled('div')(({theme})=>({
  display: 'flex',
  color: theme.palette.profit.main
}))
export default function Portfolio() {
  return (
    <Layout>
      <>
        <StyledTitle>Portfolio Summary</StyledTitle>
        <StyledBox>
          <StyledValue>$5000.00</StyledValue>
          <Divider orientation="vertical" flexItem/>
          <StyledProfitLoss>
            +81,10% <ArrowDropUp/>
          </StyledProfitLoss>
        </StyledBox>
        <UserOwnStock/>
      </>
    </Layout>
  );
}
