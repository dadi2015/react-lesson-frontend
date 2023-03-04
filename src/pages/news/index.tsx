import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getNews } from '../../store/thunks/news'
import { Box, Grid, Link, Typography } from '@mui/material'
import { useStyles } from './styles'

const NewsPage: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { news } = useAppSelector((state) => state.news)
    const classes = useStyles()

    const renderNewsBlock = news.map((element: any) => (
        <Grid container className={classes.newsBlock}>
            <Grid item xs={12} md={3}>
                <img src={element.imageurl} alt={element.category} />
            </Grid>
            <Grid item xs={12} md={9}>
                <Box className={classes.newsTitle}>
                    <Typography variant="h3">{element.title}</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">{element.body}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={12} className={classes.readMore}>
                <Typography variant="h4">
                    <Link href={element.url}>Read more</Link>
                </Typography>
            </Grid>
        </Grid>
    ))

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    return (
        <Grid className={classes.root}>
            <Grid className={classes.blockTitle}>
                <Typography variant="h2">Новости</Typography>
            </Grid>
            <Grid>{renderNewsBlock}</Grid>
        </Grid>
    )
}

export default NewsPage
