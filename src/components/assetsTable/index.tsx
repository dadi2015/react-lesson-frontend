import React from 'react'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { useStyles } from './styles'

const AssetsTableComponent = (props: any) => {
    const { assets } = props
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Изменения($)</TableCell>
                        <TableCell align="right">Изменения (%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assets.map((element: any) => (
                        <TableRow
                            key={element.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {element.name}
                            </TableCell>
                            <TableCell align="right">
                                {element.current_price}
                            </TableCell>
                            <TableCell
                                align="right"
                                className={
                                    element.price_change_24h > 0
                                        ? `${classes.priceUp}`
                                        : `${classes.priceDown}`
                                }
                            >
                                {element.price_change_24h.toFixed(2)}
                            </TableCell>
                            <TableCell
                                align="right"
                                className={
                                    element.price_change_percentage_24h > 0
                                        ? `${classes.priceUp}`
                                        : `${classes.priceDown}`
                                }
                            >
                                {element.price_change_percentage_24h.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AssetsTableComponent
