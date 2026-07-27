import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCard = createAsyncThunk(
  "KuchBhi",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsSliceReducer = createSlice({
  name: "ProductsSlice",

  initialState: {
    loading: false,
    error: null,
    data: [],
    fav: [],
    unFav : [],
  },

 reducers: {
  addToFav: (state, action) => {
    const product = action.payload;

    const exists = state.fav.some(
      (item) => item.id === product.id
    );

    if (!exists) {
      state.fav.push(product);

      // agar pehle unlike me tha to waha se hata do
      state.unFav = state.unFav.filter(
        (item) => item.id !== product.id
      );
    }
  },

  removeFav: (state, action) => {
    const product = action.payload;

    // favourite se remove
    state.fav = state.fav.filter(
      (item) => item.id !== product.id
    );

    // unlike me add
    const exists = state.unFav.some(
      (item) => item.id === product.id
    );

    if (!exists) {
      state.unFav.push(product);
    }
  },
},

  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.products;
      })

      .addCase(getCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToFav, removeFav } = productsSliceReducer.actions;

export default productsSliceReducer.reducer;