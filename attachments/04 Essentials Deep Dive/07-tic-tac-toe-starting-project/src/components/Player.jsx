import { useState } from 'react';

export default function Player({name, symbol, isActive, ...props}) {    
    const [editMode, setEditMode] = useState(false)
    const [nameState, setNameState] = useState(name)

    function handleEdit() {        
        setEditMode(wasEditing => !wasEditing)
        if (editMode) {
            setNameState(nameState)
        }        
    }

    function handleChange(e) {        
        setNameState(e.target.value)
    }

    

    return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">            
            {editMode
                ? <input type="text" onChange={handleChange}value={nameState} required />
                : <span className="player-name">{nameState}</span>
            }            
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{editMode ? "Save" : "Edit"}</button>
    </li>
    );
}