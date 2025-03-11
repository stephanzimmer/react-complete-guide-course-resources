
export default function Log({turns}) {
    const list = turns.map(item => {
        const {player, square} = item
        const {row, col} = square

        return <li key={`${row}_${col}`}><span>{player} selected {row + " " + col}</span></li>
    })
    return (<ol id="log">
        {list}
    </ol>)
}