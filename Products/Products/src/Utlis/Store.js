import {configureStore} from '@reduxjs/toolkit'
import  productsSliceReducre  from './ProductSlice'

export const Store = configureStore({
    reducer : {
        card : productsSliceReducre,
    }
})