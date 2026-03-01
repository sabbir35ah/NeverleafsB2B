
import {  useState } from 'react';
import { createCartService } from '../businessLogic/graphql/cartService';

export const CartProvider = ({ children }) => {
  const [ setCart] = useState(null);

  const createCart = async (variantId, quantity) => {
    try {
      const response = await createCartService({
        input: {
          lines: [
            {
              merchandiseId: variantId,
              quantity,
            },
          ],
        },
      });

      const newCart = response.data.data.cartCreate.cart;

      setCart(newCart);
      localStorage.setItem("cartId", newCart.id);

    } catch (error) {
      console.error("Cart error:", error);
    }
  };

 
  const removeFromCart = (lineId) => {
  setCart((prevCart) => {
    if (!prevCart) return prevCart;

    return {
      ...prevCart,
      lines: {
        ...prevCart.lines,
        edges: prevCart.lines.edges.filter(
          (line) => line.node.id !== lineId
        ),
      },
    };
  });
};
  const value = {
    removeFromCart,
    createCart
     
   
  };
console.log(value);

  return <CartContext.Provider value={value }>{children}</CartContext.Provider>;
};
