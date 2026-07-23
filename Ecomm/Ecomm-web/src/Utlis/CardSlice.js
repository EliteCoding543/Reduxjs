import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    // Add to Cart
    
    addToCart: (state, action) => {
  let flag = false;

  const temp = state.map((item) => {
    if (item.id === action.payload.id) {
      flag = true;

      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }

    return item;
  });

  if (!flag) {
    temp.push({
      ...action.payload,
      quantity: 1,
    });
  }

  return temp;
},
    // Remove from Cart
    removeFromCart: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increase Quantity
    increaseQuantity: (state, action) => {
      const item = state.find(
        (product) => product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease Quantity
    decreaseQuantity: (state, action) => {
      const item = state.find(
        (product) => product.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(
          (product) => product.id !== action.payload
        );
      }
    },

    // Clear Cart
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;