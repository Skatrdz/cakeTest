import './currencyTable.css'
import {MinValueHighlight} from "../common/utils/minValueHighlight";
import {usePollingRequest} from "../common/hooks/useLongpolling";

export const CurrencyTable = () => {


    const firstRates = usePollingRequest(
        'first',
        'first/poll',
        2500
    )
    const secondRates = usePollingRequest(
        'second',
        'second/poll',
        600
    )
    const thirdRates = usePollingRequest(
        'third',
        'third/poll',
        3500
    )

    return (
        <table className='currency-table'>
            <thead>
            <tr>
                <th>Pair name/market</th>
                <th>First</th>
                <th>Second</th>
                <th>Third</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>RUB/CUPCAKE</td>
                {MinValueHighlight([
                firstRates.RUB,
                secondRates.RUB,
                thirdRates.RUB])}
            </tr>

            <tr>
                <td>USD/CUPCAKE</td>
                {MinValueHighlight([
                    firstRates.USD,
                    secondRates.USD,
                    thirdRates.USD])}
            </tr>

            <tr>
                <td>EUR/CUPCAKE</td>
            </tr>

            <tr>
                <td>RUB/USD</td>
            </tr>

            <tr>
                <td>RUB/EUR</td>
            </tr>

            <tr>
                <td>EUR/RUB</td>
            </tr>
            </tbody>
        </table>
    )
}