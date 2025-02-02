import React from "react";
import Layout from "../templates/Layout";
import {Box, Typography} from '@mui/material';

export default function Portfolio() {
  return (
    <Layout>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h2">Portfolio Summary</Typography>
        <Box sx={{display: 'flex'}}>
          <Typography variant="h3">Total Portfolio Value</Typography>
          <Typography variant="h4">$100,00000</Typography>
        </Box>
      </Box>
    </Layout>
  );
}
