export interface CurrencyRates {
    RUB: number
    USD: number
    EUR: number
}

export interface DateCurrencyRates {
    rates: CurrencyRates
    base: string
    timestamp: number
    date: string
}

