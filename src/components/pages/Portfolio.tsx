import React from "react";
import Layout from "../templates/Layout";

const PortfolioTable = ({ positions }) => (
  <table className="portfolio-table">
    <thead>
      <tr>
        <th>Stock</th>
        <th>Quantity</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {positions.map((position, index) => (
        <tr key={index}>
          <td>{position.stock}</td>
          <td>{position.quantity}</td>
          <td>{`$${position.value}`}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default function Portfolio() {
  const positions = [
    { stock: "AAPL", quantity: 10, value: 1450 },
    { stock: "TSLA", quantity: 5, value: 3500 },
    { stock: "GOOG", quantity: 2, value: 2800 },
  ];
  return (
    <Layout>
      <div>
        <h1>Portfolio</h1>
        <PortfolioTable positions={positions} />
      </div>
    </Layout>
  );
}
