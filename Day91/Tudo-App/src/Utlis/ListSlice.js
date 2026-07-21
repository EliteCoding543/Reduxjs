import {createSlice} from '@reduxjs/toolkit'

const TudoSlice = createSlice({
    name: "MyTudoApp",
    initialState: [],

    reducers: {
        addTudo : (state, action) => {
            return [...state, action.payload]
        }
    }
})

export default TudoSlice.reducer
export const{addTudo} = TudoSlice.actions