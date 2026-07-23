import {configureStore} from "@reduxjs/toolkit"
import CartReducer from '../Utlis/CardSlice'

export const Store = configureStore({
    reducer :{
        card : CartReducer,
    }
})