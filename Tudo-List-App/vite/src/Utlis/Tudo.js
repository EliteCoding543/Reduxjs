import {createSlice} from '@reduxjs/toolkit'


const tudoSlice = createSlice({
    name: "MyText",
    initialState : [],

    reducers : {
        Addtudo: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export default tudoSlice.reducer

export const{Addtudo} = tudoSlice.actions