import {configureStore} from '@reduxjs/toolkit'
import tudoSliceReducer from '../Utlis/Tudo'

export const Store = configureStore({
    reducer : {
        tudo: tudoSliceReducer,
    }
})