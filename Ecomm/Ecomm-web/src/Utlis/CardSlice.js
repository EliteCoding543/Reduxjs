import {createSlice} from "@reduxjs/toolkit"

const CardSlice = createSlice({
    name : "MyCard",
    initialState : [],

    reducers : {
        addCart : (state, action) => {
            return [...state, action.payload]
        },

        removeCart: (...state, action) =>{
            
        }
    }
})