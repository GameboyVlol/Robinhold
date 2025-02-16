import React from "react";
import Layout from "../templates/Layout";
import { Box, Divider, styled, Typography } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";
import UserOwnStock from "../organisms/table/UserOwnStock";
import PortfolioTab from "../templates/PortfolioTab";

const StyledBox = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1, 0),
  gap: theme.spacing(1.5),
}));
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: theme.fontSizes.bodySize,
}));
const StyledValue = styled(Typography)(({ theme }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: theme.fontSizes.extraLargeHeader,
}));

const StyledProfitLoss = styled("div")(({ theme }) => ({
  display: "flex",
  color: theme.palette.profit.main,
}));

const StyledPortfolioLayout = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  gap: theme.spacing(3),
}));

const StyledAdvanceMicroDevice = styled("div")(({ theme }) => ({
  width: "40%",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.elevation2,
  borderRadius: theme.spacing(1)
}));
export default function Portfolio() {
  return (
    <Layout>
      <StyledPortfolioLayout>
        <div style={{ width: "60%" }}>
          <StyledTitle>Portfolio Summary</StyledTitle>
          <StyledBox>
            <StyledValue>$5000.00</StyledValue>
            <Divider orientation="vertical" flexItem />
            <StyledProfitLoss>
              +81,10% <ArrowDropUp />
            </StyledProfitLoss>
          </StyledBox>
          <Typography variant="h4" fontSize="1.5rem" fontWeight="bold">
            Holdings
          </Typography>
          <UserOwnStock />
        </div>
        <StyledAdvanceMicroDevice>
          <Box>
            <Typography variant="h3">TSLA US$98</Typography>
            <Typography variant="caption">Advanced Micro Devices</Typography>
          </Box>
          <PortfolioTab/>
        </StyledAdvanceMicroDevice>
      </StyledPortfolioLayout>
    </Layout>
  );
}
