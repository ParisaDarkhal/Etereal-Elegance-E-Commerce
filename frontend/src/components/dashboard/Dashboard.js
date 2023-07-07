import { Box, Typography, Grid } from "@mui/material";

import ProductCard from "../productCard/ProductCard";
import React from "react";
import Navbar from "../navbar/Navbar";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_PRODUCTS } from "../../utils/queries";
import CartContext from "./CartContext";

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  ///// for creating cards
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const products = data.products;
  /////

  ///// for adding to the cart

  const handleAddToCart = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      // If the item already exists in the cart, increment its quantity
      // const updatedItems = cartItems.map((item) =>
      //   item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      // );
      // setCartItems(updatedItems);
      setCartItems([...cartItems, { id: productId, quantity: 1 }]); //to add a repeatative item and count as new in cart use this line and eleminate the if statement above
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  };

  /////
  return (
    <Box>
      <CartContext.Provider value={cartItems}>
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
                    imageUrl={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    onAddToCart={handleAddToCart} // Pass the function as a prop
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </CartContext.Provider>
    </Box>
  );
};

export default Dashboard;
