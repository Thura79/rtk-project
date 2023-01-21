import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const item = action.payload;
      const isExisted = state.carts.find((p) => p.id === item.id);
      if (isExisted) {
        state.carts.map((p) => (p.id === item.id ? { ...item } : { ...p }));
      } else {
        state.carts.push(action.payload);
      }
    },
    removeFromcart: (state, action) => {
        state.carts = state.carts.filter(p => p.id !== action.payload.id);
    }
  },
});

export const { addTocart, removeFromcart } = cartSlice.actions;
export default cartSlice.reducer;
