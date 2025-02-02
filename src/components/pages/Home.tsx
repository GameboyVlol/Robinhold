import {
  Autocomplete,
  Box,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Topbar from "../organisms/Topbar";
import Barchart from "../atoms/shapes/BarChart";
import PrimaryBtn from "../atoms/button/PrimaryBtn";

const StyledRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSize.bodySize,
  fontWeight: theme.fontWeight.semi,
}));


const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "1px solid #fff",
      p: 2,
      borderRadius: "10px",
      margin: "10px 0px",
    }}
  >
    <Typography variant="h4" fontWeight="bold">
      {title}
    </Typography>
    <hr style={{ margin: "10px 0px" }} />
    {children}
  </Box>
);

function Home() {
  return (
    <Box>
      <Topbar />
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "68%" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: (theme) => theme.fontWeight.medium,
            }}
          >
            TASLA
          </Typography>
          <Barchart />
          <Paper
            sx={{
              display: "flex",
              gap: 2,
              p: 4,
              borderRadius: "10px",
              background: "transparent",
              border: "1px solid #fff",
              margin: "10px 0px",
            }}
          >
            <Box>Image</Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: (theme) => theme.fontWeight.medium,
                }}
              >
                Why Robinhood?
              </Typography>
              <Typography
                sx={{
                  wordSpacing: 1,
                  fontSize: (theme) => theme.fontSize.bodySize,
                }}
              >
                Robinhood gives you the tools you need to put your money in
                motion. You can buy or sell Tesla and other ETFs, options, and
                stocks.
              </Typography>
              <PrimaryBtn title="Sign Up" />
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
          <InfoCard title="TSLA Key Statistics" children={<div>Hello</div>} />
          <InfoCard title="TSLA News" children={<div>Hello</div>} />
        </Box>
        <Paper
          sx={{
            bgcolor: "primary.main",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "30%",
            height: "fit-content",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: (theme) => theme.fontWeight.semi,
            }}
          >
            Buy TASLA
          </Typography>
          <StyledRow>
           <StyledLabel>Invest In</StyledLabel>
            <Autocomplete
              options={["Share", "Dollars"]}
              sx={{ width: 120 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="Shares" />}
            />
          </StyledRow>
          <StyledRow>
          <StyledLabel>Shares</StyledLabel>
            <TextField sx={{ width: 120 }} size="small" />
          </StyledRow>
          <StyledRow>
            <StyledLabel>Market Price</StyledLabel>
            <Typography fontWeight="bold">$223</Typography>
          </StyledRow>
          <StyledRow>
            <StyledLabel>Comission</StyledLabel>
            <Typography fontWeight="bold">$2.00</Typography>
          </StyledRow>
          <hr />
          <StyledRow>
            <StyledLabel>Estimated cost</StyledLabel>
            <Typography fontWeight="bold">$0.00</Typography>
          </StyledRow>
          <Typography>
            Sign up for a Robinhood brokerage account to buy or sell Tesla
            stocks, ETFs, and their options commission-free. Other fees may
            apply. See Robinhood Financial's fee schedule to learn more.
          </Typography>
          <PrimaryBtn title="Sign Up to Buy" />
          {/* <Button sx={{ bgcolor: "primary.main", color: "white" }}>
            Sign Up to Buy
          </Button> */}
        </Paper>
      </Box>
    </Box>
  );
}

export default Home;
