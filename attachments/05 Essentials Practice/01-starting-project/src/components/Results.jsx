import { calculateInvestmentResults } from '../util/investment.js'

export default function Results({input}) {
    const annualData = calculateInvestmentResults(input)

    
    const rows = annualData.map(record => {
        const {year, interest, valueEndOfYear, annualInvestment} = record

        return (
            <tr>
                <td>{year}</td>
                <td>{interest}</td>
                <td>{valueEndOfYear}</td>
                <td>{annualInvestment}</td>
            </tr>
        )
    })
    
    console.log("Results " + annualData.length)

    return (
        <table id="result" className="center">   
            <thead>
                <th>Year</th>
                <th>Interest</th>
                <th>Value end of Year</th>
                <th>Annual Investment</th>
            </thead>     
            <tbody>        
            {rows}
            </tbody>
        </table>
    )    
}