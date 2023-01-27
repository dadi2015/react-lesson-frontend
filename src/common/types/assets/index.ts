export interface IAreaChartProps {
    data: [number[]]
}

export interface ILineChartProps {
    data: any
}

interface Roi {
    times: number
    currency: string
    percentage: number
}

interface SingleAsset {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: any
    market_cap_rank: number
    fully_diluted_valuation: any
    total_volume: any
    high_24h: number
    low_24h: number
    price_change_24h: number
    price_change_percentage_24h: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    circulating_supply: number
    total_supply: number
    max_supply?: number
    ath: number
    ath_change_percentage: number
    ath_date: Date
    atl: number
    atl_change_percentage: number
    atl_date: Date
    roi: Roi
    last_updated: Date
}

export interface IChartData {
    name: string
    price_chart_data: number[][]
    singleAsset: SingleAsset[]
}
