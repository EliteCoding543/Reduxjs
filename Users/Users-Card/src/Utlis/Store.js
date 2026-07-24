import {configureStore} from '@reduxjs/toolkit'
import userCardReducer from '../Utlis/userCardSlice'

export const Store = configureStore({
    reducer : {
        card : userCardReducer,
    }
})