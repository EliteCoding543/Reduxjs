import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("productData", async(_, {rejectWithValue}) => {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
          return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const productsSlice = createSlice({
    name : "productCard",

    initialState : {
        loading : false,
        error : null,
        data : []
    },

    reducers: {},
    extraReducers : (builder) => {
        builder
           .addCase(getUser.pending, (state, action) => {
              return {
                    ...state,
                    loading : true,
                    error : null
              }
           })

           .addCase(getUser.fulfilled, (state, action) => {
               return {
                      ...state,
                      data : action.payload.products,
                      loading : false,
               }
           })

           .addCase(getUser.rejected, (state, action) => {
                return {
                      ...state,
                      loading : false,
                      error : action.payload
                }
           })
    }
});

export default productsSlice.reducer

