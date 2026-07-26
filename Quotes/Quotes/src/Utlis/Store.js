import {configureStore} from "@reduxjs/toolkit"
import QuotesSliceReducer from './QuotesSlice'

export const Store = configureStore({
    reducer : {
        card : QuotesSliceReducer,
    }
})