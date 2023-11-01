import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
