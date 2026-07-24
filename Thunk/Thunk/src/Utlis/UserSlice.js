import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "DataValue",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "userData",

  initialState: {
    loading: false,
    error: null,
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;