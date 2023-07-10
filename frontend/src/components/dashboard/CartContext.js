import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Provide the cartItems value to the consumer components
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
