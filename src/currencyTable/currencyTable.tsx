import './currencyTable.css'

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
            </tr>

            <tr>
                <td>USD/CUPCAKE</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
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