import React from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'
import { ISingleAsset } from '../../common/types/assets'
import { useAppSelector } from '../../utils/hook'

const SearchBarComponent = () => {
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets,
    )
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                freeSolo
                renderInput={(element) => (
                    <TextField
                        {...element}
                        label="Поиск"
                        InputProps={{
                            ...element.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                options={assetsArray.map(
                    (element: { name: string }) => element.name,
                )}
            />
        </Stack>
    )
}

export default SearchBarComponent
