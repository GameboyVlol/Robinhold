import {
  Autocomplete,
  Box,
  Button,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Topbar from "../organisms/Topbar";
import Barchart from "../atoms/shapes/BarChart";

const StyledRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  
}));

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Typography variant="h2" fontWeight="bold">
      {title}
    </Typography>
    <hr />
    {children}
  </Box>
);

function Home() {
  return (
    <Box>
      <Topbar />
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "68%" }}>
          <Typography variant="h1" fontWeight="bold">
            TASLA
          </Typography>
          <Barchart />
          <Paper
            sx={{
              display: "flex",
              gap: 2,
              p: 4,
              bgcolor: "primary.main",
              borderRadius: "10px",
            }}
          >
            <Box>Image</Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h3">Why Robinhood?</Typography>
              <Typography variant="h6">
                Robinhood gives you the tools you need to put your money in
                motion. You can buy or sell Tesla and other ETFs, options, and
                stocks.
              </Typography>
              <Button variant="contained">Sign Up</Button>
            </Box>
          </Paper>
          <InfoCard
            title="About TSLA"
            children={
              <Typography sx={{ fontSize: "15px" }}>
                Tesla, Inc. engages in the design, development, manufacture, and
                sale of electric vehicles and energy generation and storage
                systems. It operates through the Automotive and Energy
                Generation and Storage segments. Show more
              </Typography>
            }
          />
          <InfoCard
            title="TSLA Key Statistics"
            children={
              <Typography sx={{ fontSize: "15px" }}>
                Tesla, Inc. engages in the design, development, manufacture, and
                sale of electric vehicles and energy generation and storage
                systems. It operates through the Automotive and Energy
                Generation and Storage segments. Show more
              </Typography>
            }
          />
          <InfoCard
            title="TSLA News"
            children={
              <Typography sx={{ fontSize: "15px" }}>
                Tesla, Inc. engages in the design, development, manufacture, and
                sale of electric vehicles and energy generation and storage
                systems. It operates through the Automotive and Energy
                Generation and Storage segments. Show more
              </Typography>
            }
          />
        </Box>
        <Paper
          sx={{
            bgcolor: "primary.main",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "30%",
          }}
        >
          <Box>Buy TASLA</Box>
          <StyledRow>
            <Typography variant="h5">Invest In</Typography>
            <Autocomplete
              options={["Share", "Dollars"]}
              sx={{ width: 120 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="Shares" />}
            />
          </StyledRow>
          <StyledRow>
            <Typography variant="h5">Share</Typography>
            <TextField sx={{ width: 120 }} size="small" />
          </StyledRow>
          <StyledRow>
            <Typography sx={{ fontWeight: "bold" }}>Market Price</Typography>
            <Typography fontWeight="bold">$223</Typography>
          </StyledRow>
          <StyledRow>
            <Typography sx={{ fontWeight: "bold" }}>Comission</Typography>
            <Typography fontWeight="bold">$2.00</Typography>
          </StyledRow>
          <hr />
          <StyledRow>
            <Typography sx={{ fontWeight: "bold" }}>Estimated cost</Typography>
            <Typography fontWeight="bold">$0.00</Typography>
          </StyledRow>
          <Typography>
            Sign up for a Robinhood brokerage account to buy or sell Tesla
            stocks, ETFs, and their options commission-free. Other fees may
            apply. See Robinhood Financial's fee schedule to learn more.
          </Typography>
          <Button sx={{ bgcolor: "primary.main", color: "white" }}>
            Sign Up to Buy
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Home;
