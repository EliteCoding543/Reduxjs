import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "MyCounter",
  initialState: 0,

  reducers: {
    increment: (state) => {
      return state + 1;
    },

    decrement: (state) => {
      return state > 0 ? state - 1 : state;
    },

    reset: () => {
      return 0;
    },
  },
});

export default CounterSlice.reducer;

export const { increment, decrement, reset } = CounterSlice.actions;