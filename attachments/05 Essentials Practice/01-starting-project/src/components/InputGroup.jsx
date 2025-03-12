export default function InputGroup({id, title, onChange, defaultValue, ...props}) {
    return(
        <div id="user-input">
            <label>{title}</label>
            <input 
                id={id} 
                required
                type="number" 
                onChange={(e) => onChange(id, e.target.value)} 
                value={defaultValue} 
                {...props}>                
            </input>
        </div>
    )
}