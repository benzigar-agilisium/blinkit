import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCart } from "../stores/cart";

export default function useCart() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(setCart([...cart, { ...product, quantity: 1 }]));
  };

  const addQuantity = (id) => {
    dispatch(setCart(cart.map((e) => (e.id === id ? { ...e, quantity: e.quantity + 1 } : e))));
  };

  const removeQuantity = (id) => {
    if (cart.find((e) => e.id === id)?.quantity <= 1) removeFromCart(id);
    else dispatch(setCart(cart.map((e) => (e.id === id ? { ...e, quantity: e.quantity - 1 } : e))));
  };

  const removeFromCart = (id) => dispatch(setCart(cart.filter((e) => e.id !== id)));

  const clearCart = () => dispatch(setCart([]));

  const isInCart = (id) => (cart.find((e) => e.id === id) ? true : false);

  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((e) => {
      if (e.quantity) total += e.quantity * e.sellingPrice;
    });
    return total;
  };

  const getQuantityInCart = (id) => cart.find((e) => e.id === id)?.quantity ?? 0;

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    addQuantity,
    removeQuantity,
    getTotalAmount,
    getQuantityInCart,
  };
}
