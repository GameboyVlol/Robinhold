import React from "react";
import Layout from "../templates/Layout";
import {styled, Typography } from "@mui/material";
import UserOwnStock from "../organisms/table/UserOwnStock";
import TotalPortfolio from "../molecules/portfolio-view/TotalPortfolio";
import NavigateBookOrder from "../molecules/portfolio-view/NavigateBookOrder";

const StyledHeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})


export default function Dashboard() {
  return (
    <Layout>
      <>
        <StyledHeaderContainer>
          <TotalPortfolio />
          <NavigateBookOrder />
        </StyledHeaderContainer>
        <Typography variant="h1" fontWeight='bold'>Recent Trades</Typography>
        <UserOwnStock />
      </>
    </Layout>
  );
}
