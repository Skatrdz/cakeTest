import './currencyTable.css'
import {MinValueHighlight} from "../common/utils/minValueHighlight";
import {usePollingRequest} from "../common/hooks/useLongpolling";
import {roundToThreeDecimals} from "../common/utils/roundToThreeDecimals";
import {memo, useRef} from "react";

export const CurrencyTable = () => {
    const TableHeader = memo(() => (
        <thead>
        <tr>
            <th>Pair name/market</th>
            <th>First</th>
            <th>Second</th>
            <th>Third</th>
        </tr>
        </thead>
    ))

    const firstTimeStamp = useRef<number>(0)
    const secondTimeStamp = useRef<number>(0)
    const thirdTimeStamp = useRef<number>(0)


    const firstRates = usePollingRequest(
        'first',
        'first/poll',
        2500,
        firstTimeStamp,
    )
    const secondRates = usePollingRequest(
        'second',
        'second/poll',
        600,
        secondTimeStamp,
    )
    const thirdRates = usePollingRequest(
        'third',
        'third/poll',
        3500,
        thirdTimeStamp,
    )

    return (
        <table className='currency-table'>
            <TableHeader />

            <tbody>
            <tr>
                <td>RUB/CUPCAKE</td>
                {MinValueHighlight([
                    roundToThreeDecimals(firstRates.RUB),
                    roundToThreeDecimals(secondRates.RUB),
                    roundToThreeDecimals(thirdRates.RUB),
                ])}
            </tr>

            <tr>
                <td>USD/CUPCAKE</td>
                {MinValueHighlight([
                    roundToThreeDecimals(firstRates.USD),
                    roundToThreeDecimals(secondRates.USD),
                    roundToThreeDecimals(thirdRates.USD)])}
            </tr>

            <tr>
                <td>EUR/CUPCAKE</td>
                {MinValueHighlight([
                    roundToThreeDecimals(firstRates.EUR),
                    roundToThreeDecimals(secondRates.EUR),
                    roundToThreeDecimals(thirdRates.EUR),
                ])}
            </tr>

            <tr>
                <td>RUB/USD</td>
                {MinValueHighlight([
                    roundToThreeDecimals(firstRates.RUB / firstRates.USD),
                    roundToThreeDecimals(secondRates.RUB / secondRates.USD),
                    roundToThreeDecimals(thirdRates.RUB / thirdRates.USD),
                ])}
            </tr>

            <tr>
                <td>RUB/EUR</td>
                {MinValueHighlight([
                    roundToThreeDecimals(firstRates.RUB / firstRates.EUR),
                    roundToThreeDecimals(secondRates.RUB / secondRates.EUR),
                    roundToThreeDecimals(thirdRates.RUB / thirdRates.EUR),
                ])}
            </tr>

            <tr>
                <td>EUR/RUB</td>
                {MinValueHighlight([
                    roundToThreeDecimals(firstRates.EUR / firstRates.RUB),
                    roundToThreeDecimals(secondRates.EUR / secondRates.RUB),
                    roundToThreeDecimals(thirdRates.EUR / thirdRates.RUB)
                ])}
            </tr>
            </tbody>
        </table>
    )
}