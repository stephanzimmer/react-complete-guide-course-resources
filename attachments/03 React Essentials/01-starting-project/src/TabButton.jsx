

export default function TabButton ({clickHandler, children}) {
    return(
        <li><button onClick={clickHandler}>{children}</button></li>
    )
}