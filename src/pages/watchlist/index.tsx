import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getWatchlistElements } from '../../store/thunks/watchlist'
import { getTopPriceData } from '../../store/thunks/assets'
import AssetsTableComponent from '../../components/assetsTable'
import { Grid, Typography } from '@mui/material'
import { useStyles } from './styles'

const WatchlistPage = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const watchlist = useAppSelector((state) => state.watchlist.assets)
    const { assets } = useAppSelector((state) => state.assets)

    useEffect(() => {
        dispatch(getTopPriceData())
        dispatch(getWatchlistElements())
    }, [dispatch])

    const filteredArray = assets.filter((element: any) => {
        return watchlist.some((otherElement: any) => {
            return otherElement.assetId === element.id
        })
    })

    return (
        <Grid className={classes.root}>
            <Grid className={classes.watchlistHeading}>
                <Typography variant="h2" className={classes.heading}>
                    Избранное
                </Typography>
            </Grid>
            <Grid className={classes.assetsTableBlock}>
                <AssetsTableComponent assets={filteredArray} />
            </Grid>
        </Grid>
    )
}

export default WatchlistPage
