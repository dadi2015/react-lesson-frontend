import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import { tokens } from '../../theme'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)

    return {
        searchBlock: {
            display: 'flex',
            maxHeight: '45px',
            borderRadius: '8px',
            backgroundColor: `${colors.primary[600]}`,
        },
        searchIcon: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        searchInput: {
            padding: '18px 12px',
        },
    }
})
