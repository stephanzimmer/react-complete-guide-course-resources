export default ({text, children}) => {
    return (<div>
        <h2>My Component</h2>
        <p>
            MyProp: {text}
            {children}
            After Children
        </p>
    </div>)
}

