import React from "react";
import { user_owned_stock } from "../../../data/user_stock";
import {
  Paper,
  styled,
  TableBody,
  TableHead,
  TableRow,
  TableCell as MUITableCell,
  Typography,
  Box,
} from "@mui/material";
import { Table, TableCell } from "../../atoms/table";
import { ArrowRight, TrendingUp } from "@mui/icons-material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadiusLarge,
  margin: theme.spacing(2),
  boxShadow: "none",
}));

const StyledHeadTable = styled(TableHead)(({ theme }) => ({
  fontWeight: theme.fontWeight.small,
}));

const StyledHeadCell = styled(MUITableCell)({
  textAlign: "center",  
});

const headCells = [
  "Symbol",
  "Price vs Fair Value",
  "Value and Total Returns",
  "Total Returns",
  "Profit/Loss",
  "Action",
];

const StyledTicker = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSizes.bodySize,
  fontWeight: theme.fontWeight.semi,
  color: theme.palette.primary.main,
}));
const StyledName = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  color: theme.palette.text.secondary,
}));
const StyledPrice = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSizes.bodySize,
}));
function UserOwnStock() {
  return (
    <StyledPaper>
      <Table rowHeight="standard">
        <StyledHeadTable>
          <TableRow>
            {headCells.map((cell, idx) => (
              <StyledHeadCell key={idx}>{cell}</StyledHeadCell>
            ))}
          </TableRow>
        </StyledHeadTable>
        <TableBody>
          {user_owned_stock.portfolio.map((row) => (
            <TableRow key={row.symbol}>
              <TableCell>
                <StyledTicker>{row.symbol.ticker}</StyledTicker>
                <StyledName>{row.symbol.name}</StyledName>
              </TableCell>
              <TableCell>
                <StyledPrice>US${row.currentValue}</StyledPrice>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRight
                    sx={{ color: (theme) => theme.palette.profit.main }}
                  />
                  <Typography
                    sx={{
                      fontSize: (theme) => theme.typography.fontSize,
                      color: (theme) => theme.palette.text.secondary,
                    }}
                  >
                    {row.purchasePrice}% overvalued
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <StyledPrice>US${row.purchasePrice}</StyledPrice>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap:1
                  }}
                >
                  <TrendingUp
                    sx={{ color: (theme) => theme.palette.profit.main }}
                  />
                  <Typography
                    sx={{
                      fontSize: (theme) => theme.typography.fontSize,
                      color: (theme) => theme.palette.text.secondary,
                    }}
                  >
                    {row.purchasePrice}% +9982873
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography sx={{color: 'red'}}>-3.1%</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{color:(theme)=>theme.palette.profit.main}}>
                  13.3%
                </Typography>
              </TableCell>
              <TableCell>Graph</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledPaper>
  );
}

export default UserOwnStock;
