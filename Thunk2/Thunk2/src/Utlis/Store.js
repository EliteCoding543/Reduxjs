import { configureStore} from "@reduxjs/toolkit"
import ProductsReducres from './Products'

export const Store = configureStore({
    reducer : {
        card : ProductsReducres,
    }
})