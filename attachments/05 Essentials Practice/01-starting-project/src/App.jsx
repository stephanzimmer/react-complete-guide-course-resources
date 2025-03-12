import { useState } from 'react'
import UserInput from './components/UserInput.jsx'
import Header from './components/Header.jsx'
import { calculateInvestmentResults } from './util/investment.js'
import Results from './components/Results.jsx'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
})

function handleChange(inputId, newValue) {
    console.log("changed: " + inputId + " " + userInput.inputId + " => " + newValue)

    setUserInput(prev => {        
        return {
            ...prev,
            [inputId]: newValue
        }
    })
}

  return (
    <>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput}/>
    <Results input={userInput}/>
    </>
  )
}

export default App
