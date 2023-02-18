import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/auth'
import assetSlice from './slice/assets'
import watchlistSlice from './slice/watchlist'

const store = configureStore({
    reducer: {
        auth: authSlice,
        assets: assetSlice,
        watchlist: watchlistSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
