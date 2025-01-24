import React from "react";
import Layout from "../templates/Layout";
import {Paper,TableBody, Box, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";



const Order = ({ buyOrders, sellOrders }) => (
  <Box sx={{
    p:2
  }}>
  <TableContainer component={Paper} className="orders buy-orders">
    <Typography variant="h6" component="div">Buy Orders</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {buyOrders.map((order, index) => (
          <TableRow key={index}>
            <TableCell>{`$${order.price}`}</TableCell>
            <TableCell>{order.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <TableContainer component={Paper} className="orders sell-orders">
    <Typography variant="h6" component="div">Sell Orders</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sellOrders.map((order, index) => (
          <TableRow key={index}>
            <TableCell>{`$${order.price}`}</TableCell>
            <TableCell>{order.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>
);


function OrderBook() {
  const buyOrders = [
    { price: 100, quantity: 50 },
    { price: 99, quantity: 30 },
    { price: 98, quantity: 20 },
  ];

  const sellOrders = [
    { price: 102, quantity: 40 },
    { price: 103, quantity: 25 },
    { price: 104, quantity: 15 },
  ];
  return (
    <Layout>
      <Box>OrderBook</Box>
      <Order buyOrders={buyOrders} sellOrders={sellOrders} />
    </Layout>
  );
}

export default OrderBook;
