import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { postCartData } from '../businessLogic/graphql/query';


const CartContext = createContext();


export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === product.id);

      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const fetchCartData = async () => {
        try {
          const res = await axios.post(
            `https://${import.meta.env.VITE_DOMAIN}/api/2024-10/graphql.json`,
            {
              mutation: postCartData,
              variables: {
                input: {
                  lines: cartItems.map((item) => ({
                    merchandiseId: item.id,
                    quantity: item.quantity,
                  })),
                },
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": import.meta.env.VITE_TOKEN,
              },
            },
          );
          console.log("Cart data posted successfully:", res.data);
          
         
        } catch (error) {
          console.error("Error posting cart data:", error);
        }
      };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    fetchCartData,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
