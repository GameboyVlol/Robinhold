import React from "react";
import Layout from "../templates/Layout";
import { Box } from "@mui/material";

const Order = ({ buyOrders, sellOrders }) => (
  <div className="order-book">
    <div className="orders buy-orders">
      <h2>Buy Orders</h2>
      <ul>
        {buyOrders.map((order, index) => (
          <li key={index}>
            {`Price: $${order.price}, Quantity: ${order.quantity}`}
          </li>
        ))}
      </ul>
    </div>
    <div className="orders sell-orders">
      <h2>Sell Orders</h2>
      <ul>
        {sellOrders.map((order, index) => (
          <li key={index}>
            {`Price: $${order.price}, Quantity: ${order.quantity}`}
          </li>
        ))}
      </ul>
    </div>
  </div>
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
