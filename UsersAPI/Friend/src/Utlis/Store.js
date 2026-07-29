import {configureStore} from '@reduxjs/toolkit'
import UserSliceReducer from './UserSlice'

export const Store = configureStore({
    reducer : {
        users : UserSliceReducer,
    }
})

