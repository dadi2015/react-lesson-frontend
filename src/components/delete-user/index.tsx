import React, { FC, useState } from 'react'
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography,
    useTheme,
} from '@mui/material'
import { useStyles } from './styles'
import { tokens } from '../../theme'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../utils/hook'
import { deleteUser } from '../../store/thunks/auth'

const DeleteUserComponent: FC = (): JSX.Element => {
    const [checked, setChecked] = useState(false)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleDelete = () => {
        dispatch(deleteUser())
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        navigate('/login')
    }

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.tabHeading}>
                <Typography variant="h2">Удаление аккаунта</Typography>
            </Grid>
            <Grid item className={classes.alertMessage}>
                <Typography variant="body1">
                    Уважаемый пользователь, удаляя свой аккаунт, вы удаляете все
                    персональную информацию. После удаления вся сохраненная вами
                    информация будет недоступна.
                </Typography>
            </Grid>
            <Grid item className={classes.checkBoxBlock}>
                <FormGroup>
                    <FormControlLabel
                        sx={{
                            justifyContent: 'center',
                        }}
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                sx={{
                                    color: colors.blue,
                                    '&.Mui-checked': {
                                        color: colors.blue,
                                    },
                                }}
                            />
                        }
                        label="Я соглашаюсь"
                    />
                </FormGroup>
            </Grid>
            <Grid item className={classes.buttonBlock}>
                <Button
                    onClick={handleDelete}
                    color="success"
                    variant="outlined"
                    disabled={!checked}
                >
                    Удалить аккаунт
                </Button>
            </Grid>
        </Grid>
    )
}

export default DeleteUserComponent
