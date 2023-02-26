import { createAsyncThunk } from '@reduxjs/toolkit'
import { coinGeckoApi, instanceAuth } from '../../../utils/axios'

export const getFavoriteAssets = createAsyncThunk(
    'coins/markets',
    async (data: string, { rejectWithValue }) => {
        try {
            const assets = await coinGeckoApi.get(
                `coins/${data}/market_chart?vs_currency=usd&days=90`,
            )
            const singleAsset = await coinGeckoApi.get(
                `coins/markets?vs_currency=usd&ids=${data}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
            )
            return {
                name: data,
                price_chart_data: assets.data.prices.slice(
                    assets.data.prices.length - 60,
                    assets.data.prices.length - 1,
                ),
                singleAsset: singleAsset.data,
            }
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)

export const getTopPriceData = createAsyncThunk(
    'coins/markets/topPrice',
    async (_, { rejectWithValue }) => {
        try {
            const assets = await coinGeckoApi.get(
                `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
            )
            return assets.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)

export const createWatchListRecord = createAsyncThunk(
    'watchlist/create',
    (data: { name: string; assetId: string }, { rejectWithValue }) => {
        try {
            return instanceAuth.post('watchlist/create', data)
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)
