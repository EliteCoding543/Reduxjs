import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getQuotes = createAsyncThunk("kuchBhi", async( _, {rejectWithValue}) => {
     try {
        const res = await fetch("https://dummyjson.com/quotes")
        const data = await res.json()
           return data
     } catch (error) {
          return rejectWithValue(error.message)
     }
})


    //  Create Action Creator 
    const QuotesSliceReducer = createSlice({
        name : "Quotes",

        initialState : {
        loading : false,
        error : null,
        data : []
    },


        reducers : {},
        extraReducers : (builder) => {
            builder
              .addCase(getQuotes.pending, (state, action) => {
                   return {
                        ...state,
                        loading : true,
                        error : null,
                   }
              })

              .addCase(getQuotes.fulfilled, (state, action) => {
                    return {
                        ...state,
                        data : action.payload.quotes,
                        loading : false,
                    }
              })

             .addCase(getQuotes.rejected, (state, action) => {
                   return {
                        ...state,
                        error : action.payload,
                        loading : false
                   }
             }) 
        }
    });

    export default QuotesSliceReducer.reducer