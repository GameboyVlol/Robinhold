import React from "react";
import Layout from "../templates/Layout";
import { mockPortfolio } from "../../data/mockPortfolio";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

interface BookCardProps {
  bookId: string;
  title: string;
  author: string;
  genre: string;
  purchaseDate: string;
  price: number;
  condition: string;
}

const BookCard = ({ book }: BookCardProps) => (
  <Card>
    <Box sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
        alt="Live from space album cover"
        sx={{ width: 131 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography>{book.title}</Typography>
          <Typography>{book.author}</Typography>
        </CardContent>
      </Box>
    </Box>
  </Card>
);

export default function Portfolio() {
  const { userName, library, sellerDashboard } = mockPortfolio.userPortfolio;
  return (
    <Layout>
      <Box sx={{ margin: "20px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Paper
            sx={{
              padding: "10px",
              backgroundColor: "primary.main",
              display: "flex",
              borderRadius: "20px",
            }}
          >
            <CardMedia
              sx={{ borderRadius: "50%", width: 200, height: 200 }}
              component="img"
              image="https://cdn.dribbble.com/users/8309782/screenshots/17981401/media/5772ee39311b670f8ffe00052b4e48e3.jpg?resize=400x0"
              alt="profile_image"
            />
            <Typography
              sx={{ color: "white", fontWeight: "bold" }}
              variant="h3"
            >
              User Name: {userName}
            </Typography>
          </Paper>
          <Box>
            <Button variant="contained">Add Book</Button>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              margin: "20px 0px",
            }}
          >
            <Typography fontWeight={"bold"} variant="h3">
              Library
            </Typography>
            {library.map((b, idx) => (
              <BookCard key={idx} book={b} />
            ))}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              margin: "20px 0px",
            }}
          >
            <Typography variant="h3" fontWeight={"bold"}>
              Sell Dashboard.listedBook
            </Typography>
            {sellerDashboard.listedBooks.map((b, idx) => (
              <BookCard key={idx} book={b} />
            ))}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              margin: "20px 0px",
            }}
          >
            <Typography variant="h3" fontWeight={"bold"}>
              Sell Dashboard.soldBooks
            </Typography>
            {sellerDashboard.listedBooks.map((b, idx) => (
              <BookCard key={idx} book={b} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
