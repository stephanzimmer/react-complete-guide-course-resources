import InputGroup from "./InputGroup"

export default function UserInput({onChange, userInput}){  
    return (
        <section id="user-input">
            <div className="input-group">
                <InputGroup id="initialInvestment" onChange={onChange} title="Initial Investment" defaultValue={userInput.initialInvestment} />
                <InputGroup id="annualInvestment" onChange={onChange} title="Annual Investment" defaultValue={userInput.annualInvestment} />
            </div>
            <div className="input-group" >
                <InputGroup id="expectedReturn" onChange={onChange} step="2" title="Expected Return" defaultValue={userInput.expectedReturn} />
                <InputGroup id="duration" onChange={onChange} title="Duration" defaultValue={userInput.duration} />                
            </div>
        </section>
    )
}