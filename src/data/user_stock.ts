export const user_owned_stock = {
  portfolio: [
    {
      symbol: {
        ticker: "TSLA",
        name: "Tesla Inc"
      },
      quantity: 10,
      purchasePrice: 800,
      currentValue: 850,
      profitLoss: 500,
      actions: {
        sell: true,
      },
    },
    {
      symbol: {
        ticker: "AAPL",
        name: "Apple Inc"
      },
      quantity: 5,
      purchasePrice: 150,
      currentValue: 145,
      profitLoss: -25,
      actions: {
        sell: true,
      },
    },
    {
      symbol: {
        ticker: "FB",
        name: "Facebook Inc"
      },
      quantity: 3,
      purchasePrice: 2800,
      currentValue: 2900,
      profitLoss: 300,
      actions: {
        sell: true,
      },
    },
  ],
};
