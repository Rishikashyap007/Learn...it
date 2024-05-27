
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitem: [],
  count:0
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newitem = action.payload;
      const updatedCart = [...state.cartitem, newitem];

      return {
        cartitem: updatedCart,
      };
    },
    removefromCart: (state, action) => {
      const courseId = action.payload;
      const updatedCart = state.cartitem.filter(course => course._id !== courseId);

      return {
        cartitem: updatedCart
      };
    },
    count:(state,action)=>{
      return state.count+1
    }
  }
});

export default cartSlice.reducer;
// export const selectCartCount = (state) => state.cart.cartitem.length;
export const { addToCart, removefromCart,count } = cartSlice.actions;
