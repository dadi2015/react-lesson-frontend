import React from 'react'
import AssetsTableComponent from '../assetsTable'

const TopPriceComponent = (props: any) => {
    const { assets } = props

    return <AssetsTableComponent assets={assets} />
}

export default TopPriceComponent
