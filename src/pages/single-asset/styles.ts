import { makeStyles } from '@mui/styles'
import { tokens } from '../../theme'
import { Theme } from '@mui/material'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            padding: 5,
            alignItems: 'center',
        },
        assetName: {
            display: 'flex',
            justifyContent: 'center',
            margin: '50px 0 !important',
        },
        card: {
            display: 'flex',
            justifyContent: 'center',
        },
        cardItem: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `${
                theme.palette.mode === 'light'
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: '20px 16px',
            width: '100%',
            maxWidth: 500,
            minHeight: 185,
            marginBottom: '25px !important',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        },
        assetIcon: {
            marginRight: 2,
        },
        assetSymbol: {
            fontSize: 20,
            fontWeight: 600,
        },
        cardTitle: {
            fontSize: 20,
            fontWeight: 600,
            marginRight: 2,
        },
        assetPrice: {
            fontSize: 20,
        },
        assetPriceDetail: {
            fontSize: 20,
        },
        trendUp: {
            color: '#A9FFA7',
        },
        trendDown: {
            color: '#FFA7A7',
        },
        cardButtonBlock: {
            marginTop: 25,
        },
        cardButton: {
            '&:first-child': {
                marginRight: 20,
            },
        },
    }
})
