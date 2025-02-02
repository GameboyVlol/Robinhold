import React from "react";
import { user_owned_stock } from "../../../data/user_stock";
import {
  Paper,
  styled,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import { Table, TableCell } from "../../atoms/table";

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadiusLarge,
  margin: theme.spacing(2),
  boxShadow: "none",
}));

function UserOwnStock() {
  
  
  
    return (
    <StyledPaper>
      <Table rowHeight="standard">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>quantity</TableCell>
            <TableCell>Purchase Price</TableCell>
            <TableCell>Current Price</TableCell>
            <TableCell>Profit/Loss</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user_owned_stock.portfolio.map((row) => (
            <TableRow key={row.symbol}>
              <TableCell>{row.symbol}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell> ${row.purchasePrice}</TableCell>
              <TableCell>${row.currentValue}</TableCell>
              <TableCell>${row.profitLoss}</TableCell>
              <TableCell>Sell</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledPaper>
  );
}

export default UserOwnStock;
