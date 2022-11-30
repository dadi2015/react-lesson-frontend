import {configureStore} from "@reduxjs/toolkit";
import authSlice from './slice/auth'

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store