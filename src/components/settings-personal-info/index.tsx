import React, { useEffect, useState } from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { useStyles } from './styles'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import AppLoadingButton from '../loading-button'
import { updateUserInfo } from '../../store/thunks/auth'

const SettingsPersonalInfoComponent = () => {
    const dispatch = useAppDispatch()
    const classes = useStyles()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const { user } = useAppSelector((state) => state.auth.user)

    useEffect(() => {
        if (user) {
            setName(user.firstName)
            setUsername(user.username)
            setEmail(user.email)
        }
    }, [user])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const data = {
            firstName: name,
            username: username,
            email: email,
        }
        dispatch(updateUserInfo(data))
    }

    return (
        <Grid
            component="form"
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <Box className={classes.formWrapper}>
                <TextField
                    className={classes.inputField}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    label="Имя"
                    variant="outlined"
                />
                <TextField
                    className={classes.inputField}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    className={classes.inputField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    label="Email"
                    variant="outlined"
                />
                <Box className={classes.buttonBlock}>
                    <AppLoadingButton type="submit">Сохранить</AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default SettingsPersonalInfoComponent
