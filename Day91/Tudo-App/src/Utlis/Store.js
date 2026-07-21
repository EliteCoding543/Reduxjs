import {configureStore} from "@reduxjs/toolkit"
import TudoSliceReducer from '../Utlis/ListSlice'

export const Store = configureStore({
    reducer: {
        text: TudoSliceReducer,
    }
})