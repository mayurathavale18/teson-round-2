import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  // Initialize cart items from local storage or as an empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update local storage whenever cartItems state changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    toast.success(`${item.name} added to cart.`);
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.map((item) => {
        if (item.id === productId) {
          if (item.quantity >= 10) {
            return item; // No changes, max limit reached
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedCart;
    });
  };
  
  const decrementQuantity = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.map((item) => {
        if (item.id === productId) {
          if (item.quantity <= 1) {
            return item; // No changes, min limit reached
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return updatedCart;
    });
  };
  

  // Remove item from cart
  const removeFromCart = (productId, handleEmpty) => {
    const confirmRemoval = window.confirm(
      "Are you sure you want to remove this product from the cart?"
    );
    if (confirmRemoval) {
      toast.success("Product removed from the cart.");
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== productId)
      );
      handleEmpty();
    }
  };

  // Update quantity directly
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Math.min(10, quantity)) }
          : item
      )
    );
  };

  const handleEmpty = () => {
    console.log(cartItems.length)
    cartItems.length === 1 && navigate("/")
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        updateQuantity,
        pathname,
        handleEmpty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
