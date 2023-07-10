import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { CartContext } from "../dashboard/CartContext";
// import { useQuery } from "@apollo/client";
// import { PRODUCT_BY_ID } from "../../utils/queries";
import { Box, Typography, Grid, Button } from "@mui/material";
import ProductCard from "../productCard/ProductCard";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

// Create the Cart component and access the cartItems state from the CartContext using the useContext hook
export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].product.price;
  }

  const handleDeleteItem = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };
  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate("/dashboard");
  };

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <Box>
      <Navbar />
      <TableContainer sx={{ mt: 9 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <img src={item.product.image} width={80} alt="Product" />
                </TableCell>
                <TableCell align="left">{item.product.name}</TableCell>
                <TableCell align="left">${item.product.price}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => handleDeleteItem(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <Divider variant="fullWidth" />
          </TableBody>
          <TableFooter>
            <TableCell align="left">TOTAL</TableCell>
            <TableCell align="left">{}</TableCell>
            <TableCell align="left">${total}</TableCell>
          </TableFooter>
        </Table>
      </TableContainer>

      <Grid
        container
        xs={6}
        md={8}
        spacing={2}
        mt={3}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Grid item>
          <Button variant="contained" onClick={handleCheckOut}>
            Check out
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleContinueShopping}>
            Continue Shopping
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
