import { makeStyles } from '@mui/styles'
import { tokens } from '../../theme'
import { Theme } from '@mui/material'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: colors.blue,
                },
            },
            '& label.Mui-focused': {
                color: `${
                    theme.palette.mode === 'dark'
                        ? colors.white.DEFAULT
                        : colors.black.DEFAULT
                }`,
            },
        },
        formWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px 0',
        },
        inputField: {
            width: '25%',
            marginBottom: '15px !important',
        },
        buttonBlock: {
            marginTop: 32,
        },
    }
})
