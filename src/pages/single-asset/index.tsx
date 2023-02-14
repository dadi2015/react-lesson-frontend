import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleAssetPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1 onClick={() => navigate(-1)}>Go back</h1>
        </div>
    )
}

export default SingleAssetPage
