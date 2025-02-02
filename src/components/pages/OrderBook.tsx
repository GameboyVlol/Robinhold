import React from "react";
import Layout from "../templates/Layout";
import { order_book } from "../../data/order_book";
import {TableBody, Table, Paper, TableHead, TableCell, TableRow } from "@mui/material";


function OrderBook() {
  return (
    <Layout>
      <Paper elevation={3} style={{ margin: "20px", overflowX: "auto" }}>
        <Table>
          <TableHead>
          <TableRow>
              <TableCell>PRICE</TableCell>
              <TableCell>SIZE</TableCell>
              <TableCell>BUYS</TableCell>
              <TableCell>SELLS</TableCell>
              <TableCell>TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order_book.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.size}</TableCell>
                <TableCell style={{ color: "green", fontWeight: "bold" }}>
                  {row.buys}
                </TableCell>
                <TableCell style={{ color: "red", fontWeight: "bold" }}>
                  {row.sells}
                </TableCell>
                <TableCell>{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Layout>
  );
}

export default OrderBook;
