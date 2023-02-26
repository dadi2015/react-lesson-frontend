import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Grid, useTheme } from '@mui/material'
import TabPanel from '../../components/tab-panel'
import { tabProps } from '../../utils/helpers'
import { useStyles } from './styles'
import { tokens } from '../../theme'
import SettingsPersonalInfoComponent from '../../components/settings-personal-info'
import { useAppDispatch } from '../../utils/hook'
import { getPublicUser } from '../../store/thunks/auth'
import ChangePasswordComponent from '../../components/change-password'
import DeleteUserComponent from '../../components/delete-user'

const SettingsPage = () => {
    const [value, setValue] = useState(0)
    const dispatch = useAppDispatch()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()

    useEffect(() => {
        dispatch(getPublicUser())
    }, [dispatch])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Grid className={classes.root}>
            <Box className={classes.tabsWrapper}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Settings tabs"
                    centered
                    textColor="secondary"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: colors.blue,
                        },
                    }}
                >
                    <Tab label="Персональные данные" {...tabProps(0)} />
                    <Tab label="Изменить пароль" {...tabProps(1)} />
                    <Tab label="Удалить аккаунт" {...tabProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <SettingsPersonalInfoComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ChangePasswordComponent />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DeleteUserComponent />
            </TabPanel>
        </Grid>
    )
}

export default SettingsPage
