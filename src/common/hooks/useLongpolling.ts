import React, { useEffect, useState, useRef, useCallback } from 'react'
import {CurrencyRates, DateCurrencyRates } from '../services/rates'
import {apiInstance} from "../services/api";

export const usePollingRequest = (
    url: string,
    urlPoll: string,
    delay: number | null,
    lastTimestamp: React.MutableRefObject<number>,
): CurrencyRates => {
    const [rates, setRates] = useState<CurrencyRates>({
        RUB: 0,
        USD: 0,
        EUR: 0,
    })
    const intervalId = useRef<NodeJS.Timeout | null>(null)

    const getRates = async (url: string): Promise<DateCurrencyRates | Error> => {
        try {
            return await apiInstance.get<DateCurrencyRates>(url)
        } catch (error: unknown) {
            throw error as Error
        }
    }
    const clearPolling = useCallback(() => {
        if (intervalId.current) {
            clearInterval(intervalId.current)
            intervalId.current = null
        }
    }, [])

    const getPoll = useCallback((urlPoll: string) => {
        getRates(urlPoll)
            .then((res: DateCurrencyRates) => {
                if (res.timestamp >= lastTimestamp.current) {
                    lastTimestamp.current = res.timestamp
                    setRates(res.rates)
                }
            })
            .catch((error: Error) => {
                clearPolling()
            })
    }, [clearPolling])

    useEffect(() => {
        getPoll(url)
    }, [url])

    useEffect(() => {
        if (delay !== null) {
            clearPolling()
            intervalId.current = setInterval(() => getPoll(urlPoll), delay)
            return () => clearPolling()
        }
    }, [urlPoll, delay])

    return rates
}