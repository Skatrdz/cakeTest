import './currencyTable.css'
import {MinValueHighlight} from "../utils/minValueHighlight";

export const CurrencyTable = () => {

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
                {MinValueHighlight([50, 55, 56])}

            </tr>

            <tr>
                <td>USD/CUPCAKE</td>
                {MinValueHighlight([10, 25, 15])}

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