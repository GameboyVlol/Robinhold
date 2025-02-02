import React from "react";
import Layout from "../templates/Layout";
import { Box, Typography } from "@mui/material";
import UserOwnStock from "../organisms/table/UserOwnStock";
import TotalPortfolio from "../molecules/portfolio-view/TotalPortfolio";
import NavigateBookOrder from "../molecules/portfolio-view/NavigateBookOrder";

export default function Dashboard() {
  return (
    <Layout>
      <Box>
        <Box sx={{
          display: 'flex'
        }}>
          <TotalPortfolio />
          <NavigateBookOrder />
        </Box>
        <Typography variant="h1" fontWeight='bold'>Owned Stock Table</Typography>
        <UserOwnStock />
      </Box>
    </Layout>
  );
}
