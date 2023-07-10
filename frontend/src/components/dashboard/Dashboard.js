import { Box, Typography, Grid } from "@mui/material";

import ProductCard from "../productCard/ProductCard";
import React from "react";
import Navbar from "../navbar/Navbar";
import { useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import { GET_PRODUCTS } from "../../utils/queries";
import { CartContext } from "./CartContext";

const Dashboard = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log("cartItems :>> ", cartItems);
  ///// for creating cards
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const products = data.products;

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, { id: item.id, product: item, quantity: 1 }]);
  };

  return (
    <Box>
      <Navbar />

      <Box id="products" mt={5}>
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
                  onAddToCart={() => handleAddToCart(item)} // Pass the function as a prop
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
