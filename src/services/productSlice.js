import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    fav: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
    addToFav: (state, action) => {
      const item = action.payload;
      const isExisted = state.fav.find(f => f.id === item.id)
      if(isExisted) {
        state.fav.map( f => f.id === item.id ? {...item} : {...f} );
      }else{
        state.fav.push(action.payload);
      }
      
    }, 
    removeFav: (state, action) => {
      state.fav = state.fav.filter((item) => item.id !== action.payload.id)
    }
  },
});

export const {addProduct, addToFav, removeFav} = productSlice.actions
export default productSlice.reducer