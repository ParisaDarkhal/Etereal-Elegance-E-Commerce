import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../productCard/ProductCard";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/queries";
import Navbar from "../navbar/Navbar";

// main component
export default function Home() {
  /////
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const products = data.products;

  return (
    <Box>
      <Navbar />

      <Box id="products">
        <Box padding={5} margin="auto">
          <Typography variant="h3" gutterBottom>
            products
          </Typography>

          <Grid container spacing={5}>
            {products.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProductCard
                  id={item.id}
                  imageurl={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
