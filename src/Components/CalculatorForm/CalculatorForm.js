import React from 'react'

function CalculatorForm(props) {
    return(
        <div>
            <div className="row">
                <div className="col-4">
                    <label for="operand1">Operand 1</label>
                    <input type="text" className="form-control-plaintext" placeholder="Operand 1" onChange={props.update} id="operand1"></input>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <select className="form-select" id="operation" onChange={props.operation}>
                        <option selected>Please Select an Operation</option>
                        <option selected>Addition</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label for="operand2">Operand 2</label>
                    <input type="text" className="form-control-plaintext" placeholder="Operand 2" onChange={props.update} id="operand2"></input>
                </div>
            </div>
            <button onClick={props.action}>Calculate</button> 
        </div>
    )
}

export default CalculatorForm