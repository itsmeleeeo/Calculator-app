import React, { useState } from 'react'
import CalculatorForm from './Components/CalculatorForm/CalculatorForm'

function App() {
  const [operation, setOpetarion] = useState({});

  function updateOperands(e) {
    setOpetarion({
      ...operation,
      [e.target.id] : e.target.value
    })
  }

  function doOperation() {
    console.log(operation.operation)
    switch(operation.operation) {
      case "add": 
      console.log("Results: " + parseFloat(operation.operand1) + parseFloat(operation.operand2))
      break;
      default: 
      console.log("Sorry, We don't do that")
    }
  }

  return (
    <div className="container">
      <h1>Calculator App</h1>
      <CalculatorForm update={updateOperands} action={doOperation}/>
    </div>
  );
}

export default App;
