import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from '../Utils/CounterSlice'

export const Store = configureStore({
    reducer: {
        Counter : CounterReducer,
    },
})